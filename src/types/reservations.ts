export interface Restaurant {
  id: string;
  name: string;
  description?: string;
  cuisine_type: string;
  address: string;
  phone: string;
  email?: string;
  website?: string;
  logo_url?: string;
  banner_url?: string;
  rating?: number;
  price_range: string;
  opening_hours?: {
    [key: string]: { open: string; close: string };
  };
  capacity?: number;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

// Simple booking data structure (no database table)
export interface BookingData {
  id?: string;
  restaurant_id: string;
  table_id: string;
  reservation_date: string; // ISO date string
  reservation_time: string; // 24h format: "18:30"
  party_size: number;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  special_requests?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  created_at?: string;
  updated_at?: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface ReservationFormData {
  restaurant_id: string;
  table_id: string;
  reservation_date: Date;
  reservation_time: string;
  party_size: number;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  special_requests?: string;
}

export interface Table {
  id: string;
  restaurant_id: string;
  table_number: string;
  capacity: number;
  location: 'indoor' | 'outdoor' | 'bar' | 'private';
  is_available: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface MenuItem {
  id: string;
  restaurant_id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url?: string;
  is_available: boolean;
  dietary_info?: string[];
  allergens?: string[];
  spice_level?: number;
  is_featured?: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface MenuCategory {
  id: string;
  restaurant_id: string;
  name: string;
  description?: string;
  display_order: number;
  items: MenuItem[];
}
