/**
 * Cal.com Booking Configuration
 */

export const CAL_API_KEY = 'cal_live_51ab9dcff762568b6167fe6791891acd';

// Cal.com domain (using European server)
export const CAL_DOMAIN = 'cal.eu';

// Your Cal.com username and event type slugs
export const CAL_USERNAME = 'pollinate-iq-admin';

// Available event types
export const CAL_EVENT_TYPES = {
  DEMO: 'demo',
  TRAINING: 'training',
  QUICK_CHAT: 'quick-chat',
};

// Default event type for "Book a Demo" buttons
export const CAL_EVENT_TYPE = CAL_EVENT_TYPES.DEMO;

// Full booking URLs
export const CAL_BOOKING_URL = `https://${CAL_DOMAIN}/${CAL_USERNAME}/${CAL_EVENT_TYPE}`;
export const CAL_TRAINING_URL = `https://${CAL_DOMAIN}/${CAL_USERNAME}/${CAL_EVENT_TYPES.TRAINING}`;
export const CAL_QUICK_CHAT_URL = `https://${CAL_DOMAIN}/${CAL_USERNAME}/${CAL_EVENT_TYPES.QUICK_CHAT}`;

/**
 * Cal.com Account Details:
 * - Email: Pollinateiq@gmail.com
 * - Username: pollinate-iq-admin
 * - Server: cal.eu (European)
 * 
 * Available booking links:
 * - Demo: https://cal.eu/pollinate-iq-admin/demo
 * - Training: https://cal.eu/pollinate-iq-admin/training
 * - Quick Chat: https://cal.eu/pollinate-iq-admin/quick-chat
 */
