import { Restaurant, TimeSlot, Table, MenuItem, MenuCategory } from '@/types/reservations';

/**
 * Fallback restaurant data for development and testing
 * Used when Supabase credentials are not available
 */
export const fallbackRestaurants: Restaurant[] = [
  {
    id: 'rest-1',
    name: 'The Cape Grill',
    description: 'Upscale steakhouse with ocean views and premium South African wines.',
    cuisine_type: 'Steakhouse',
    address: '123 Waterfront Drive, Cape Town, 8001',
    phone: '+27 21 123 4567',
    email: 'info@capegrill.co.za',
    website: 'https://capegrill.co.za',
    price_range: '₹₹₹',
    rating: 4.8,
    logo_url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    banner_url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    is_active: true,
    opening_hours: {
      monday: { open: '12:00', close: '22:00' },
      tuesday: { open: '12:00', close: '22:00' },
      wednesday: { open: '12:00', close: '22:00' },
      thursday: { open: '12:00', close: '22:00' },
      friday: { open: '12:00', close: '23:00' },
      saturday: { open: '12:00', close: '23:00' },
      sunday: { open: '12:00', close: '21:00' },
    },
    capacity: 80,
    created_at: '2023-01-15T08:00:00Z',
    updated_at: '2023-06-20T14:30:00Z'
  },
  {
    id: 'rest-2',
    name: 'Spice Route',
    description: 'Authentic Indian cuisine with modern twists and extensive vegetarian options.',
    cuisine_type: 'Indian',
    address: '456 Gandhi Square, Johannesburg, 2001',
    phone: '+27 11 234 5678',
    email: 'reservations@spiceroute.co.za',
    website: 'https://spiceroute.co.za',
    price_range: '₹₹',
    rating: 4.6,
    logo_url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    banner_url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    is_active: true,
    opening_hours: {
      monday: { open: '11:00', close: '21:00' },
      tuesday: { open: '11:00', close: '21:00' },
      wednesday: { open: '11:00', close: '21:00' },
      thursday: { open: '11:00', close: '21:00' },
      friday: { open: '11:00', close: '22:00' },
      saturday: { open: '11:00', close: '22:00' },
      sunday: { open: '11:00', close: '21:00' },
    },
    capacity: 60,
    created_at: '2023-02-10T10:15:00Z',
    updated_at: '2023-07-05T09:45:00Z'
  },
  {
    id: 'rest-3',
    name: 'Ocean Basket',
    description: 'Fresh seafood restaurant specializing in Mediterranean-style fish dishes.',
    cuisine_type: 'Seafood',
    address: '789 Marine Parade, Durban, 4001',
    phone: '+27 31 345 6789',
    email: 'bookings@oceanbasket.co.za',
    website: 'https://oceanbasket.co.za',
    price_range: '₹₹',
    rating: 4.5,
    logo_url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    banner_url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    is_active: true,
    opening_hours: {
      monday: { open: '11:30', close: '21:30' },
      tuesday: { open: '11:30', close: '21:30' },
      wednesday: { open: '11:30', close: '21:30' },
      thursday: { open: '11:30', close: '21:30' },
      friday: { open: '11:30', close: '22:30' },
      saturday: { open: '11:30', close: '22:30' },
      sunday: { open: '11:30', close: '21:00' },
    },
    capacity: 70,
    created_at: '2023-03-05T11:20:00Z',
    updated_at: '2023-08-12T16:40:00Z'
  },
  {
    id: 'rest-4',
    name: 'Braai Republic',
    description: 'Traditional South African braai experience with craft beers and live music.',
    cuisine_type: 'South African',
    address: '321 Church Street, Pretoria, 0002',
    phone: '+27 12 456 7890',
    email: 'info@braairepublic.co.za',
    website: 'https://braairepublic.co.za',
    price_range: '₹₹',
    rating: 4.7,
    logo_url: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    banner_url: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    is_active: true,
    opening_hours: {
      monday: { open: '16:00', close: '23:00' },
      tuesday: { open: '16:00', close: '23:00' },
      wednesday: { open: '16:00', close: '23:00' },
      thursday: { open: '16:00', close: '23:00' },
      friday: { open: '16:00', close: '00:00' },
      saturday: { open: '12:00', close: '00:00' },
      sunday: { open: '12:00', close: '22:00' },
    },
    capacity: 90,
    created_at: '2023-04-20T14:10:00Z',
    updated_at: '2023-09-01T13:25:00Z'
  },
  {
    id: 'rest-5',
    name: 'Café Parisienne',
    description: 'Charming French bistro offering pastries, coffee, and classic French cuisine.',
    cuisine_type: 'French',
    address: '654 Long Street, Cape Town, 8001',
    phone: '+27 21 567 8901',
    email: 'bonjour@cafeparisienne.co.za',
    website: 'https://cafeparisienne.co.za',
    price_range: '₹₹₹',
    rating: 4.4,
    logo_url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    banner_url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    is_active: true,
    opening_hours: {
      monday: { open: '08:00', close: '20:00' },
      tuesday: { open: '08:00', close: '20:00' },
      wednesday: { open: '08:00', close: '20:00' },
      thursday: { open: '08:00', close: '20:00' },
      friday: { open: '08:00', close: '22:00' },
      saturday: { open: '09:00', close: '22:00' },
      sunday: { open: '09:00', close: '18:00' },
    },
    capacity: 40,
    created_at: '2023-05-15T09:30:00Z',
    updated_at: '2023-10-10T11:15:00Z'
  }
];

/**
 * Fallback time slots for development and testing
 * Used when Supabase credentials are not available
 */
export const fallbackTimeSlots: TimeSlot[] = [
  { time: '12:00', available: true },
  { time: '12:30', available: true },
  { time: '13:00', available: true },
  { time: '13:30', available: true },
  { time: '14:00', available: true },
  { time: '14:30', available: true },
  { time: '15:00', available: true },
  { time: '15:30', available: true },
  { time: '16:00', available: true },
  { time: '16:30', available: true },
  { time: '17:00', available: true },
  { time: '17:30', available: true },
  { time: '18:00', available: true },
  { time: '18:30', available: true },
  { time: '19:00', available: true },
  { time: '19:30', available: true },
  { time: '20:00', available: true },
  { time: '20:30', available: true },
  { time: '21:00', available: true },
  { time: '21:30', available: true },
];

/**
 * Fallback tables data for development and testing
 * Used when Supabase credentials are not available
 */
export const fallbackTables: Table[] = [
  {
    id: 'table-1',
    restaurant_id: 'rest-1',
    table_number: 'A1',
    capacity: 4,
    location: 'indoor',
    is_available: true,
    created_at: '2023-01-15T08:00:00Z',
    updated_at: '2023-06-20T14:30:00Z'
  },
  {
    id: 'table-2',
    restaurant_id: 'rest-1',
    table_number: 'A2',
    capacity: 2,
    location: 'indoor',
    is_available: true,
    created_at: '2023-01-15T08:00:00Z',
    updated_at: '2023-06-20T14:30:00Z'
  },
  {
    id: 'table-3',
    restaurant_id: 'rest-1',
    table_number: 'B1',
    capacity: 6,
    location: 'outdoor',
    is_available: true,
    created_at: '2023-01-15T08:00:00Z',
    updated_at: '2023-06-20T14:30:00Z'
  },
  {
    id: 'table-4',
    restaurant_id: 'rest-2',
    table_number: 'A1',
    capacity: 4,
    location: 'indoor',
    is_available: true,
    created_at: '2023-01-15T08:00:00Z',
    updated_at: '2023-06-20T14:30:00Z'
  },
  {
    id: 'table-5',
    restaurant_id: 'rest-3',
    table_number: 'C1',
    capacity: 8,
    location: 'private',
    is_available: true,
    created_at: '2023-01-15T08:00:00Z',
    updated_at: '2023-06-20T14:30:00Z'
  },
];

/**
 * Fallback menu items data for development and testing
 * Used when Supabase credentials are not available
 */
export const fallbackMenuItems: MenuItem[] = [
  {
    id: 'item-1',
    restaurant_id: 'rest-1',
    name: 'Grilled Ribeye Steak',
    description: 'Prime cut ribeye steak grilled to perfection, served with roasted vegetables and red wine jus.',
    price: 280,
    category: 'Mains',
    image_url: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    is_available: true,
    dietary_info: ['gluten-free'],
    allergens: ['none'],
    spice_level: 0,
    is_featured: true
  },
  {
    id: 'item-2',
    restaurant_id: 'rest-1',
    name: 'Seafood Platter',
    description: 'Fresh selection of local seafood including prawns, mussels, line fish, and calamari.',
    price: 350,
    category: 'Mains',
    image_url: 'https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    is_available: true,
    dietary_info: ['pescatarian'],
    allergens: ['shellfish'],
    spice_level: 1,
    is_featured: true
  },
  {
    id: 'item-3',
    restaurant_id: 'rest-2',
    name: 'Butter Chicken',
    description: 'Tender chicken pieces in a rich, creamy tomato sauce with aromatic spices.',
    price: 160,
    category: 'Curries',
    image_url: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    is_available: true,
    dietary_info: [],
    allergens: ['dairy'],
    spice_level: 2,
    is_featured: true
  },
  {
    id: 'item-4',
    restaurant_id: 'rest-2',
    name: 'Vegetable Biryani',
    description: 'Fragrant basmati rice cooked with mixed vegetables, saffron, and aromatic spices.',
    price: 140,
    category: 'Rice Dishes',
    image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    is_available: true,
    dietary_info: ['vegetarian'],
    allergens: ['nuts'],
    spice_level: 3,
    is_featured: false
  },
  {
    id: 'item-5',
    restaurant_id: 'rest-3',
    name: 'Grilled Kingklip',
    description: 'Fresh local kingklip fillet grilled with lemon butter sauce and served with seasonal vegetables.',
    price: 220,
    category: 'Seafood',
    image_url: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    is_available: true,
    dietary_info: ['pescatarian', 'gluten-free'],
    allergens: ['fish', 'dairy'],
    spice_level: 0,
    is_featured: true
  },
];

/**
 * Fallback menu categories data for development and testing
 * Used when Supabase credentials are not available
 */
export const fallbackMenuCategories: MenuCategory[] = [
  {
    id: 'cat-1',
    restaurant_id: 'rest-1',
    name: 'Starters',
    description: 'Begin your meal with our delicious appetizers',
    display_order: 1,
    items: []
  },
  {
    id: 'cat-2',
    restaurant_id: 'rest-1',
    name: 'Mains',
    description: 'Our signature main courses',
    display_order: 2,
    items: []
  },
  {
    id: 'cat-3',
    restaurant_id: 'rest-2',
    name: 'Curries',
    description: 'Authentic Indian curries',
    display_order: 1,
    items: []
  },
  {
    id: 'cat-4',
    restaurant_id: 'rest-2',
    name: 'Rice Dishes',
    description: 'Fragrant rice specialties',
    display_order: 2,
    items: []
  },
  {
    id: 'cat-5',
    restaurant_id: 'rest-3',
    name: 'Seafood',
    description: 'Fresh from the ocean',
    display_order: 1,
    items: []
  },
];
