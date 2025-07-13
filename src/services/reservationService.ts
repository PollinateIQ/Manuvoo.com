import { supabase, hasRealCredentials } from '@/lib/supabase';
import { fallbackRestaurants, fallbackTimeSlots, fallbackTables, fallbackMenuItems, fallbackMenuCategories } from '@/data/fallback-data';
import { Reservation, Restaurant, TimeSlot, Table, MenuItem, MenuCategory } from '@/types/reservations';

/**
 * Fetch available restaurants
 * @param searchQuery Optional search query to filter restaurants
 * @returns Array of restaurants
 */
export async function getRestaurants(searchQuery?: string): Promise<Restaurant[]> {
  // If we don't have real credentials, return fallback data
  if (!hasRealCredentials) {
    console.log('Using fallback restaurant data');
    if (searchQuery) {
      const lowercaseQuery = searchQuery.toLowerCase();
      return fallbackRestaurants.filter(restaurant => 
        restaurant.name.toLowerCase().includes(lowercaseQuery) ||
        restaurant.cuisine.toLowerCase().includes(lowercaseQuery) ||
        restaurant.location.toLowerCase().includes(lowercaseQuery)
      );
    }
    return fallbackRestaurants;
  }
  
  // Otherwise use Supabase
  let query = supabase
    .from('restaurants')
    .select('*')
    .eq('is_active', true);

  if (searchQuery) {
    query = query.ilike('name', `%${searchQuery}%`)
      .or(`cuisine.ilike.%${searchQuery}%,location.ilike.%${searchQuery}%`);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching restaurants:', error);
    throw new Error('Failed to fetch restaurants');
  }

  return data || [];
}

/**
 * Fetch a specific restaurant by ID
 * @param id Restaurant ID
 * @returns Restaurant details
 */
export async function getRestaurantById(id: string): Promise<Restaurant | null> {
  // If we don't have real credentials, return fallback data
  if (!hasRealCredentials) {
    console.log('Using fallback restaurant data for ID:', id);
    const restaurant = fallbackRestaurants.find(r => r.id === id);
    return restaurant || null;
  }
  
  // Otherwise use Supabase
  const { data, error } = await supabase
    .from('restaurants')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching restaurant:', error);
    throw new Error('Failed to fetch restaurant');
  }

  return data;
}

/**
 * Get available time slots for a specific restaurant on a specific date
 * @param restaurantId Restaurant ID
 * @param date Date to check availability
 * @param partySize Number of guests
 * @returns Array of available time slots
 */
export async function getAvailableTimeSlots(
  restaurantId: string,
  date: Date,
  partySize: number
): Promise<TimeSlot[]> {
  // If we don't have real credentials, return fallback data with some slots marked as unavailable
  if (!hasRealCredentials) {
    console.log('Using fallback time slots data');
    // Create a copy of the fallback time slots
    const slots = [...fallbackTimeSlots];
    
    // Randomly mark some slots as unavailable for demo purposes
    const dayOfWeek = date.getDay();
    const dateString = date.toISOString().split('T')[0];
    
    // Use a deterministic approach based on date and restaurant to mark slots as unavailable
    // This ensures the same slots are marked unavailable for the same date+restaurant combination
    const seed = dateString + restaurantId;
    let seedNum = 0;
    for (let i = 0; i < seed.length; i++) {
      seedNum += seed.charCodeAt(i);
    }
    
    // Mark ~30% of slots as unavailable based on the seed
    slots.forEach((slot, index) => {
      if ((seedNum + index) % 3 === 0) {
        slot.available = false;
      }
    });
    
    return slots;
  }
  
  // Format date as ISO string for the database query
  const dateString = date.toISOString().split('T')[0];

  // First, get the restaurant's operating hours
  const { data: restaurant, error: restaurantError } = await supabase
    .from('restaurants')
    .select('opening_hours')
    .eq('id', restaurantId)
    .single();

  if (restaurantError) {
    console.error('Error fetching restaurant hours:', restaurantError);
    throw new Error('Failed to fetch restaurant hours');
  }

  // Get day of week (0 = Sunday, 1 = Monday, etc.)
  const dayOfWeek = date.getDay();
  const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const dayName = daysOfWeek[dayOfWeek];

  // Get opening hours for this day
  const hours = restaurant?.opening_hours?.[dayName];
  if (!hours) {
    return []; // Restaurant is closed on this day
  }

  // Generate time slots based on opening hours
  const openTime = hours.open; // e.g., "10:00"
  const closeTime = hours.close; // e.g., "22:00"

  // Generate time slots in 30-minute intervals
  const timeSlots: TimeSlot[] = [];
  const [openHour, openMinute] = openTime.split(':').map(Number);
  const [closeHour, closeMinute] = closeTime.split(':').map(Number);

  let currentHour = openHour;
  let currentMinute = openMinute;

  while (
    currentHour < closeHour ||
    (currentHour === closeHour && currentMinute < closeMinute - 30) // Stop 30 minutes before closing
  ) {
    const timeString = `${currentHour.toString().padStart(2, '0')}:${currentMinute.toString().padStart(2, '0')}`;
    timeSlots.push({ time: timeString, available: true });

    // Advance by 30 minutes
    currentMinute += 30;
    if (currentMinute >= 60) {
      currentHour += 1;
      currentMinute = 0;
    }
  }

  // Check existing reservations to determine availability
  const { data: reservations, error: reservationsError } = await supabase
    .from('reservations')
    .select('reservation_time, party_size')
    .eq('restaurant_id', restaurantId)
    .eq('reservation_date', dateString)
    .not('status', 'eq', 'cancelled');

  if (reservationsError) {
    console.error('Error fetching reservations:', reservationsError);
    throw new Error('Failed to fetch reservations');
  }

  // Mark time slots as unavailable based on existing reservations
  // This is a simplified availability check - in a real system, you'd need to consider
  // restaurant capacity, table configurations, etc.
  if (reservations) {
    for (const reservation of reservations) {
      const slot = timeSlots.find(slot => slot.time === reservation.reservation_time);
      if (slot) {
        slot.available = false;
      }
    }
  }

  return timeSlots;
}

/**
 * Create a new reservation
 * @param reservation Reservation data
 * @returns Created reservation
 */
export async function createReservation(reservation: Reservation): Promise<Reservation> {
  // If we don't have real credentials, return a mock successful response
  if (!hasRealCredentials) {
    console.log('Using mock reservation creation');
    // Create a mock reservation with an ID
    return {
      ...reservation,
      id: 'mock-' + Date.now().toString(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
  }
  
  // Otherwise use Supabase
  const { data, error } = await supabase
    .from('reservations')
    .insert([reservation])
    .select()
    .single();

  if (error) {
    console.error('Error creating reservation:', error);
    throw new Error('Failed to create reservation');
  }

  return data;
}

/**
 * Cancel a reservation
 * @param reservationId Reservation ID
 * @returns Success status
 */
export async function cancelReservation(reservationId: string): Promise<boolean> {
  // If we don't have real credentials, return a mock successful response
  if (!hasRealCredentials) {
    console.log('Using mock reservation cancellation');
    return true;
  }
  
  // Otherwise use Supabase
  const { error } = await supabase
    .from('reservations')
    .update({ status: 'cancelled' })
    .eq('id', reservationId);

  if (error) {
    console.error('Error cancelling reservation:', error);
    throw new Error('Failed to cancel reservation');
  }

  return true;
}

/**
 * Fetch available tables for a restaurant
 * @param restaurantId Restaurant ID
 * @param date Reservation date
 * @param time Reservation time
 * @param partySize Number of guests
 * @returns Array of available tables
 */
export async function getAvailableTables(
  restaurantId: string,
  date: Date,
  time: string,
  partySize: number
): Promise<Table[]> {
  // If we don't have real credentials, return fallback data
  if (!hasRealCredentials) {
    console.log('Using fallback tables data');
    // Filter tables by restaurant and capacity
    const tables = fallbackTables.filter(table => 
      table.restaurant_id === restaurantId &&
      table.capacity >= partySize &&
      table.is_available
    );
    return tables;
  }
  
  // Format date as ISO string for the database query
  const dateString = date.toISOString().split('T')[0];

  // First, get all tables for the restaurant with sufficient capacity
  const { data: tables, error: tablesError } = await supabase
    .from('tables')
    .select('*')
    .eq('restaurant_id', restaurantId)
    .gte('capacity', partySize)
    .eq('is_available', true);

  if (tablesError) {
    console.error('Error fetching tables:', tablesError);
    throw new Error('Failed to fetch tables');
  }

  if (!tables || tables.length === 0) {
    return [];
  }

  // Then, check existing reservations to see which tables are already booked
  const { data: reservations, error: reservationsError } = await supabase
    .from('reservations')
    .select('table_id')
    .eq('restaurant_id', restaurantId)
    .eq('reservation_date', dateString)
    .eq('reservation_time', time)
    .not('status', 'eq', 'cancelled');

  if (reservationsError) {
    console.error('Error fetching reservations:', reservationsError);
    throw new Error('Failed to fetch reservations');
  }

  // Filter out tables that are already booked
  const bookedTableIds = reservations ? reservations.map(r => r.table_id) : [];
  const availableTables = tables.filter(table => !bookedTableIds.includes(table.id));

  return availableTables;
}

/**
 * Fetch menu items for a restaurant
 * @param restaurantId Restaurant ID
 * @returns Array of menu items
 */
export async function getMenuItems(restaurantId: string): Promise<MenuItem[]> {
  // If we don't have real credentials, return fallback data
  if (!hasRealCredentials) {
    console.log('Using fallback menu items data');
    return fallbackMenuItems.filter(item => item.restaurant_id === restaurantId);
  }
  
  // Otherwise use Supabase
  const { data, error } = await supabase
    .from('menu_items')
    .select('*')
    .eq('restaurant_id', restaurantId)
    .eq('is_available', true);

  if (error) {
    console.error('Error fetching menu items:', error);
    throw new Error('Failed to fetch menu items');
  }

  return data || [];
}

/**
 * Fetch menu categories with items for a restaurant
 * @param restaurantId Restaurant ID
 * @returns Array of menu categories with their items
 */
export async function getMenuCategories(restaurantId: string): Promise<MenuCategory[]> {
  // If we don't have real credentials, return fallback data
  if (!hasRealCredentials) {
    console.log('Using fallback menu categories data');
    // Get categories for this restaurant
    const categories = fallbackMenuCategories.filter(cat => cat.restaurant_id === restaurantId);
    // Get items for this restaurant
    const items = fallbackMenuItems.filter(item => item.restaurant_id === restaurantId);
    
    // Group items by category
    return categories.map(category => {
      const categoryItems = items.filter(item => item.category === category.name);
      return {
        ...category,
        items: categoryItems
      };
    });
  }
  
  // First, get all categories for the restaurant
  const { data: categories, error: categoriesError } = await supabase
    .from('menu_categories')
    .select('*')
    .eq('restaurant_id', restaurantId)
    .order('display_order', { ascending: true });

  if (categoriesError) {
    console.error('Error fetching menu categories:', categoriesError);
    throw new Error('Failed to fetch menu categories');
  }

  if (!categories || categories.length === 0) {
    return [];
  }

  // Then, get all menu items for the restaurant
  const { data: items, error: itemsError } = await supabase
    .from('menu_items')
    .select('*')
    .eq('restaurant_id', restaurantId)
    .eq('is_available', true);

  if (itemsError) {
    console.error('Error fetching menu items:', itemsError);
    throw new Error('Failed to fetch menu items');
  }

  // Group items by category
  const result = categories.map(category => {
    const categoryItems = items ? items.filter(item => item.category === category.name) : [];
    return {
      ...category,
      items: categoryItems
    };
  });

  return result;
}
