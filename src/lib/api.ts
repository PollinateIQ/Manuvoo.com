/**
 * API Utility Functions
 */

import { API_ENDPOINTS } from '@/config/api';

// Types for API requests
export interface CreateInquiryRequest {
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  username?: string;
  venueType: string;
  tenantType?: string;
  description?: string;
  message: string;
  source?: string;
  metadata?: Record<string, any>;
}

export interface CreateFeedbackRequest {
  message: string;
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  rating?: number;
  category?: string;
  subject?: string;
  isPublic?: boolean;
  metadata?: Record<string, any>;
}

export interface CreateSupportTicketRequest {
  subject: string;
  description: string;
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  priority?: 'low' | 'medium' | 'high' | 'urgent';
  metadata?: Record<string, any>;
}

export interface NewsletterSubscribeRequest {
  email: string;
  firstName?: string;
  lastName?: string;
  source?: string;
}

// API Helper Function
async function apiCall<T>(
  url: string,
  options: RequestInit = {}
): Promise<{ data?: T; error?: string }> {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    console.error('API Error:', error);
    return {
      error: error instanceof Error ? error.message : 'An unexpected error occurred',
    };
  }
}

// CRM API Functions

/**
 * Create a new inquiry (contact form submission)
 * 
 * API expects:
 * - full_name (required): string
 * - email or phone_number (at least one required): string
 * - venue_type (optional): enum (restaurant, cafe, bar, food_truck, catering, hotel, fast_food, fine_dining, casual_dining, bakery, other)
 * - message (optional): string
 * - source (optional): enum (website, mobile_app, referral, social_media, advertisement, cold_call, event, partner, other)
 */
export async function createInquiry(data: CreateInquiryRequest) {
  // Transform data to match backend API expectations
  const apiData: Record<string, any> = {
    full_name: `${data.firstName} ${data.lastName}`.trim(),
    email: data.email,
    message: data.message,
    source: data.source || 'website',
  };

  // Only include venue_type if it's provided and valid
  if (data.venueType) {
    apiData.venue_type = data.venueType;
  }

  // Include phone if provided
  if (data.phone) {
    apiData.phone_number = data.phone;
  }

  return apiCall(API_ENDPOINTS.INQUIRIES.CREATE, {
    method: 'POST',
    body: JSON.stringify(apiData),
  });
}

/**
 * Get list of inquiries
 */
export async function getInquiries(params?: {
  page?: number;
  limit?: number;
  status?: string;
}) {
  const queryParams = new URLSearchParams();
  if (params?.page) queryParams.append('page', params.page.toString());
  if (params?.limit) queryParams.append('limit', params.limit.toString());
  if (params?.status) queryParams.append('status', params.status);

  const url = `${API_ENDPOINTS.INQUIRIES.LIST}?${queryParams.toString()}`;
  return apiCall(url);
}

/**
 * Get a specific inquiry
 */
export async function getInquiry(id: string) {
  return apiCall(API_ENDPOINTS.INQUIRIES.GET(id));
}

/**
 * Update inquiry status
 */
export async function updateInquiryStatus(id: string, status: string) {
  return apiCall(API_ENDPOINTS.INQUIRIES.UPDATE_STATUS(id), {
    method: 'PATCH',
    body: JSON.stringify({ status }),
  });
}

/**
 * Submit feedback
 */
export async function createFeedback(data: CreateFeedbackRequest) {
  const apiData = {
    message: data.message,
    full_name: data.fullName,
    email: data.email,
    phone_number: data.phoneNumber,
    rating: data.rating,
    category: data.category || 'general',
    subject: data.subject,
    is_public: data.isPublic ?? false,
    metadata: data.metadata || {},
  };

  return apiCall(API_ENDPOINTS.FEEDBACK.CREATE, {
    method: 'POST',
    body: JSON.stringify(apiData),
  });
}

/**
 * Get feedback list
 */
export async function getFeedback(params?: {
  page?: number;
  limit?: number;
}) {
  const queryParams = new URLSearchParams();
  if (params?.page) queryParams.append('page', params.page.toString());
  if (params?.limit) queryParams.append('limit', params.limit.toString());

  const url = `${API_ENDPOINTS.FEEDBACK.LIST}?${queryParams.toString()}`;
  return apiCall(url);
}

/**
 * Create support ticket
 */
export async function createSupportTicket(data: CreateSupportTicketRequest) {
  const apiData = {
    subject: data.subject,
    description: data.description,
    full_name: data.fullName,
    email: data.email,
    phone_number: data.phoneNumber,
    priority: data.priority || 'medium',
    metadata: data.metadata || {},
  };

  return apiCall(API_ENDPOINTS.SUPPORT_TICKETS.CREATE, {
    method: 'POST',
    body: JSON.stringify(apiData),
  });
}

/**
 * Get support tickets
 */
export async function getSupportTickets(params?: {
  page?: number;
  limit?: number;
  status?: string;
}) {
  const queryParams = new URLSearchParams();
  if (params?.page) queryParams.append('page', params.page.toString());
  if (params?.limit) queryParams.append('limit', params.limit.toString());
  if (params?.status) queryParams.append('status', params.status);

  const url = `${API_ENDPOINTS.SUPPORT_TICKETS.LIST}?${queryParams.toString()}`;
  return apiCall(url);
}

/**
 * Get a specific support ticket
 */
export async function getSupportTicket(id: string) {
  return apiCall(API_ENDPOINTS.SUPPORT_TICKETS.GET(id));
}

/**
 * Update support ticket status
 */
export async function updateSupportTicketStatus(id: string, status: string) {
  return apiCall(API_ENDPOINTS.SUPPORT_TICKETS.UPDATE_STATUS(id), {
    method: 'PATCH',
    body: JSON.stringify({ status }),
  });
}

/**
 * Create communication record
 */
export async function createCommunication(data: {
  channel: 'email' | 'sms' | 'whatsapp' | 'phone' | 'in_app' | 'other';
  direction: 'inbound' | 'outbound';
  subject?: string;
  payloadJson: Record<string, any>;
  contactId?: string;
  inquiryId?: string;
  ticketId?: string;
  status?: 'draft' | 'pending' | 'sent' | 'delivered' | 'read' | 'failed' | 'bounced';
  metadata?: Record<string, any>;
}) {
  const apiData = {
    channel: data.channel,
    direction: data.direction,
    subject: data.subject,
    payload_json: data.payloadJson,
    contact_id: data.contactId,
    inquiry_id: data.inquiryId,
    ticket_id: data.ticketId,
    status: data.status || 'sent',
    metadata: data.metadata || {},
  };

  return apiCall(API_ENDPOINTS.COMMUNICATIONS.CREATE, {
    method: 'POST',
    body: JSON.stringify(apiData),
  });
}

/**
 * Get communications
 */
export async function getCommunications(params?: {
  page?: number;
  limit?: number;
  contactId?: string;
}) {
  const queryParams = new URLSearchParams();
  if (params?.page) queryParams.append('page', params.page.toString());
  if (params?.limit) queryParams.append('limit', params.limit.toString());
  if (params?.contactId) queryParams.append('contactId', params.contactId);

  const url = `${API_ENDPOINTS.COMMUNICATIONS.LIST}?${queryParams.toString()}`;
  return apiCall(url);
}

/**
 * Update communication status
 */
export async function updateCommunicationStatus(id: string, status: string) {
  return apiCall(API_ENDPOINTS.COMMUNICATIONS.UPDATE_STATUS(id), {
    method: 'PATCH',
    body: JSON.stringify({ status }),
  });
}

/**
 * Get contacts
 */
export async function getContacts(params?: {
  page?: number;
  limit?: number;
  search?: string;
}) {
  const queryParams = new URLSearchParams();
  if (params?.page) queryParams.append('page', params.page.toString());
  if (params?.limit) queryParams.append('limit', params.limit.toString());
  if (params?.search) queryParams.append('search', params.search);

  const url = `${API_ENDPOINTS.CONTACTS.LIST}?${queryParams.toString()}`;
  return apiCall(url);
}

/**
 * Get a specific contact
 */
export async function getContact(id: string) {
  return apiCall(API_ENDPOINTS.CONTACTS.GET(id));
}

/**
 * Newsletter subscription
 */
export async function subscribeToNewsletter(data: NewsletterSubscribeRequest) {
  // Create communication record for newsletter subscription
  return createCommunication({
    channel: 'email',
    direction: 'inbound',
    subject: 'Newsletter Subscription',
    payloadJson: {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      type: 'newsletter_subscription',
      message: `Newsletter subscription from ${data.email}`,
    },
    status: 'sent',
    metadata: {
      source: data.source || 'website_newsletter',
    },
  });
}
