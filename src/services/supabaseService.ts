import { supabase, hasRealCredentials } from '@/lib/supabase';
import { Restaurant, Table, MenuItem, MenuCategory, BookingData } from '@/types/reservations';
import { fallbackRestaurants, fallbackTables, fallbackMenuItems, fallbackMenuCategories } from '@/data/fallback-data';

// Supabase project ID from the URL
const PROJECT_ID = 'ntzeinyrrtogekvpukqp';

/**
 * Fetch all restaurants from the database
 * Uses MCP server if available, otherwise falls back to client-side Supabase or mock data
 */
export async function fetchRestaurants(searchQuery?: string): Promise<Restaurant[]> {
  console.log('🔍 fetchRestaurants called with searchQuery:', searchQuery);
  console.log('🔑 hasRealCredentials:', hasRealCredentials);
  console.log('🌐 Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
  console.log('🔐 Supabase Key exists:', !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  
  if (!hasRealCredentials) {
    console.log('⚠️ Using fallback restaurant data - no real Supabase credentials');
    if (searchQuery) {
      const lowercaseQuery = searchQuery.toLowerCase();
      const filtered = fallbackRestaurants.filter(restaurant => 
        restaurant.name.toLowerCase().includes(lowercaseQuery) ||
        restaurant.cuisine_type.toLowerCase().includes(lowercaseQuery) ||
        restaurant.address.toLowerCase().includes(lowercaseQuery)
      );
      console.log('📊 Filtered fallback restaurants:', filtered.length, 'results');
      return filtered;
    }
    console.log('📊 Returning all fallback restaurants:', fallbackRestaurants.length, 'total');
    return fallbackRestaurants;
  }
  
  try {
    console.log('🚀 Attempting to connect to Supabase database...');
    console.log('📋 Project ID:', PROJECT_ID);
    
    // Use Supabase client directly
    let query = supabase
      .from('restaurants')
      .select('*')
      .eq('is_active', true);

    console.log('🔍 Building query for restaurants table...');
    
    if (searchQuery) {
      console.log('🔎 Adding search filter for:', searchQuery);
      query = query.ilike('name', `%${searchQuery}%`)
        .or(`cuisine_type.ilike.%${searchQuery}%,address.ilike.%${searchQuery}%`);
    }

    console.log('⏳ Executing Supabase query...');
    const { data, error } = await query;

    if (error) {
      console.error('❌ Supabase query error:', error);
      console.error('❌ Error details:', {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code
      });
      console.log('🔄 Falling back to mock data due to error');
      return fallbackRestaurants;
    }

    console.log('✅ Successfully fetched restaurants from Supabase!');
    console.log('📊 Restaurant count:', data?.length || 0);
    console.log('📝 First restaurant sample:', data?.[0] ? {
      id: data[0].id,
      name: data[0].name,
      cuisine_type: data[0].cuisine_type
    } : 'No restaurants found');
    
    return data || [];
  } catch (error) {
    console.error('❌ Connection error to Supabase:', error);
    console.error('❌ Error type:', typeof error);
    console.error('❌ Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    console.log('🔄 Falling back to mock data due to connection error');
    return fallbackRestaurants;
  }
}

/**
 * Fetch a specific restaurant by ID
 */
export async function fetchRestaurantById(id: string): Promise<Restaurant | null> {
  if (!hasRealCredentials) {
    console.log('Using fallback restaurant data for ID:', id);
    const restaurant = fallbackRestaurants.find(r => r.id === id);
    return restaurant || null;
  }
  
  try {
    const { data, error } = await supabase
      .from('restaurants')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching restaurant:', error);
      return fallbackRestaurants.find(r => r.id === id) || null;
    }

    return data;
  } catch (error) {
    console.error('Error connecting to Supabase:', error);
    return fallbackRestaurants.find(r => r.id === id) || null;
  }
}

/**
 * Fetch tables for a specific restaurant
 */
export async function fetchTables(
  restaurantId: string,
  partySize?: number
): Promise<Table[]> {
  console.log('🍽️ fetchTables called for restaurant:', restaurantId, 'party size:', partySize);
  console.log('🔑 hasRealCredentials:', hasRealCredentials);
  
  if (!hasRealCredentials) {
    console.log('⚠️ Using fallback tables data');
    let tables = fallbackTables.filter(table => table.restaurant_id === restaurantId);
    console.log('📊 Found fallback tables for restaurant:', tables.length);
    
    if (partySize) {
      tables = tables.filter(table => table.capacity >= partySize);
      console.log('📊 Filtered tables by party size:', tables.length);
    }
    
    return tables;
  }
  
  try {
    let query = supabase
      .from('tables')
      .select('*')
      .eq('restaurant_id', restaurantId)
      .eq('is_available', true);
      
    if (partySize) {
      query = query.gte('capacity', partySize);
    }
    
    const { data, error } = await query;
    
    if (error) {
      console.error('Error fetching tables:', error);
      return fallbackTables.filter(table => table.restaurant_id === restaurantId);
    }
    
    return data || [];
  } catch (error) {
    console.error('Error connecting to Supabase:', error);
    return fallbackTables.filter(table => table.restaurant_id === restaurantId);
  }
}

/**
 * Fetch menu items for a specific restaurant
 */
export async function fetchMenuItems(restaurantId: string): Promise<MenuItem[]> {
  if (!hasRealCredentials) {
    console.log('Using fallback menu items data');
    return fallbackMenuItems.filter(item => item.restaurant_id === restaurantId);
  }
  
  try {
    const { data, error } = await supabase
      .from('menu_items')
      .select('*')
      .eq('restaurant_id', restaurantId)
      .eq('is_available', true);
    
    if (error) {
      console.error('Error fetching menu items:', error);
      return fallbackMenuItems.filter(item => item.restaurant_id === restaurantId);
    }
    
    return data || [];
  } catch (error) {
    console.error('Error connecting to Supabase:', error);
    return fallbackMenuItems.filter(item => item.restaurant_id === restaurantId);
  }
}

/**
 * Fetch menu categories with items for a specific restaurant
 */
export async function fetchMenuCategories(restaurantId: string): Promise<MenuCategory[]> {
  if (!hasRealCredentials) {
    console.log('Using fallback menu categories data');
    const categories = fallbackMenuCategories.filter(cat => cat.restaurant_id === restaurantId);
    const items = fallbackMenuItems.filter(item => item.restaurant_id === restaurantId);
    
    return categories.map(category => {
      const categoryItems = items.filter(item => item.category === category.name);
      return {
        ...category,
        items: categoryItems
      };
    });
  }
  
  try {
    // First, get all categories for the restaurant
    const { data: categories, error: categoriesError } = await supabase
      .from('menu_categories')
      .select('*')
      .eq('restaurant_id', restaurantId)
      .order('display_order', { ascending: true });
    
    if (categoriesError) {
      console.error('Error fetching menu categories:', categoriesError);
      return fetchFallbackMenuCategories(restaurantId);
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
      return fetchFallbackMenuCategories(restaurantId);
    }
    
    // Group items by category
    return categories.map(category => {
      const categoryItems = items ? items.filter(item => item.category === category.name) : [];
      return {
        ...category,
        items: categoryItems
      };
    });
  } catch (error) {
    console.error('Error connecting to Supabase:', error);
    return fetchFallbackMenuCategories(restaurantId);
  }
}

/**
 * Helper function to get fallback menu categories
 */
function fetchFallbackMenuCategories(restaurantId: string): MenuCategory[] {
  const categories = fallbackMenuCategories.filter(cat => cat.restaurant_id === restaurantId);
  const items = fallbackMenuItems.filter(item => item.restaurant_id === restaurantId);
  
  return categories.map(category => {
    const categoryItems = items.filter(item => item.category === category.name);
    return {
      ...category,
      items: categoryItems
    };
  });
}

/**
 * Create a booking confirmation (no database storage)
 */
export async function createBookingConfirmation(bookingData: BookingData): Promise<BookingData & { id: string; created_at: string }> {
  // Since we're not using the reservations table, we'll just return a confirmation
  // In a real implementation, you might send this data to an external service,
  // email system, or temporary storage
  
  console.log('Creating booking confirmation for:', bookingData);
  
  // Simulate processing time
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Generate a confirmation ID
  const confirmationId = `booking-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  
  // Return booking confirmation with ID and timestamp
  return {
    ...bookingData,
    id: confirmationId,
    created_at: new Date().toISOString()
  };
}
