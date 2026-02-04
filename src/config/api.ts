/**
 * API Configuration
 */

// API Base URL - Backend server
// Production: https://api.manuvoo.com
// Development: http://localhost:3001 (if running locally)
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.manuvoo.com';

// CRM API Endpoints
export const API_ENDPOINTS = {
  // Inquiries
  INQUIRIES: {
    CREATE: `${API_BASE_URL}/api/crm/inquiries`,
    LIST: `${API_BASE_URL}/api/crm/inquiries`,
    GET: (id: string) => `${API_BASE_URL}/api/crm/inquiries/${id}`,
    UPDATE_STATUS: (id: string) => `${API_BASE_URL}/api/crm/inquiries/${id}/status`,
  },
  
  // Feedback
  FEEDBACK: {
    CREATE: `${API_BASE_URL}/api/crm/feedback`,
    LIST: `${API_BASE_URL}/api/crm/feedback`,
  },
  
  // Support Tickets
  SUPPORT_TICKETS: {
    CREATE: `${API_BASE_URL}/api/crm/support-tickets`,
    LIST: `${API_BASE_URL}/api/crm/support-tickets`,
    GET: (id: string) => `${API_BASE_URL}/api/crm/support-tickets/${id}`,
    UPDATE_STATUS: (id: string) => `${API_BASE_URL}/api/crm/support-tickets/${id}/status`,
  },
  
  // Communications
  COMMUNICATIONS: {
    CREATE: `${API_BASE_URL}/api/crm/communications`,
    LIST: `${API_BASE_URL}/api/crm/communications`,
    UPDATE_STATUS: (id: string) => `${API_BASE_URL}/api/crm/communications/${id}/status`,
  },
  
  // Contacts
  CONTACTS: {
    LIST: `${API_BASE_URL}/api/crm/contacts`,
    GET: (id: string) => `${API_BASE_URL}/api/crm/contacts/${id}`,
  },
  
  // Legacy/Other
  SEND_WHATSAPP: `${API_BASE_URL}/api/send-whatsapp`,
  HEALTH: `${API_BASE_URL}/api/health`,
};

// For local development, you can use a mock endpoint
export const USE_MOCK_API = import.meta.env.VITE_USE_MOCK_API === 'true';
