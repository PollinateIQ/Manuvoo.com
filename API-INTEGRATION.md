# API Integration Guide

## Backend Server

**Base URL:** `https://api.manuvoo.com`

## Available API Endpoints

### 1. Inquiries (Contact Form)

#### Create Inquiry
- **Endpoint:** `POST /api/crm/inquiries`
- **Description:** Create a new inquiry (auto-creates contact)
- **Usage:** Contact form submissions
- **Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+27696848796",
  "companyName": "Restaurant Name",
  "venueType": "restaurant",
  "message": "I'm interested in learning more about Manuvoo",
  "source": "website_contact_form"
}
```

#### Get Inquiries
- **Endpoint:** `GET /api/crm/inquiries`
- **Query Parameters:** 
  - `page` (number)
  - `limit` (number)
  - `status` (string)

#### Get Single Inquiry
- **Endpoint:** `GET /api/crm/inquiries/:id`

#### Update Inquiry Status
- **Endpoint:** `PATCH /api/crm/inquiries/:id/status`
- **Request Body:**
```json
{
  "status": "contacted"
}
```

---

### 2. Feedback

#### Submit Feedback
- **Endpoint:** `POST /api/crm/feedback`
- **Description:** Submit customer feedback
- **Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "rating": 5,
  "message": "Great service!",
  "category": "general"
}
```

#### Get Feedback
- **Endpoint:** `GET /api/crm/feedback`
- **Query Parameters:**
  - `page` (number)
  - `limit` (number)

---

### 3. Support Tickets

#### Create Support Ticket
- **Endpoint:** `POST /api/crm/support-tickets`
- **Description:** Create a new support ticket
- **Request Body:**
```json
{
  "subject": "Login issue",
  "description": "Unable to login to my account",
  "priority": "medium",
  "category": "technical",
  "contactEmail": "john@example.com",
  "contactName": "John Doe"
}
```

#### Get Support Tickets
- **Endpoint:** `GET /api/crm/support-tickets`
- **Query Parameters:**
  - `page` (number)
  - `limit` (number)
  - `status` (string)

#### Get Single Ticket
- **Endpoint:** `GET /api/crm/support-tickets/:id`

#### Update Ticket Status
- **Endpoint:** `PATCH /api/crm/support-tickets/:id/status`
- **Request Body:**
```json
{
  "status": "resolved"
}
```

---

### 4. Communications

#### Create Communication
- **Endpoint:** `POST /api/crm/communications`
- **Description:** Create a communication record (used for newsletter subscriptions)
- **Request Body:**
```json
{
  "contactId": "optional_contact_id",
  "type": "newsletter_subscription",
  "subject": "Newsletter Subscription",
  "message": "Newsletter subscription from email@example.com",
  "channel": "email"
}
```

#### Get Communications
- **Endpoint:** `GET /api/crm/communications`
- **Query Parameters:**
  - `page` (number)
  - `limit` (number)
  - `contactId` (string)

#### Update Communication Status
- **Endpoint:** `PATCH /api/crm/communications/:id/status`
- **Request Body:**
```json
{
  "status": "sent"
}
```

---

### 5. Contacts

#### Get Contacts
- **Endpoint:** `GET /api/crm/contacts`
- **Query Parameters:**
  - `page` (number)
  - `limit` (number)
  - `search` (string)

#### Get Single Contact
- **Endpoint:** `GET /api/crm/contacts/:id`

---

## Implementation in Code

### Configuration File
Located at: `src/config/api.ts`

```typescript
export const API_BASE_URL = 'https://api.manuvoo.com';
export const API_ENDPOINTS = {
  INQUIRIES: { ... },
  FEEDBACK: { ... },
  SUPPORT_TICKETS: { ... },
  COMMUNICATIONS: { ... },
  CONTACTS: { ... }
};
```

### API Utility Functions
Located at: `src/lib/api.ts`

All API calls are abstracted into easy-to-use functions:

```typescript
// Create an inquiry from contact form
import { createInquiry } from '@/lib/api';

const result = await createInquiry({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  venueType: 'restaurant',
  message: 'Interested in demo',
  source: 'website_contact_form'
});

if (result.error) {
  console.error(result.error);
} else {
  console.log('Success!', result.data);
}
```

### Current Implementations

#### 1. Contact Form
**File:** `src/pages/Contact.tsx`
- Uses `createInquiry()` API function
- Submits to `/api/crm/inquiries`
- Auto-creates contact record
- Shows success/error toast notifications

#### 2. Newsletter Subscription
**File:** `src/sections/Newsletter.tsx`
- Uses `subscribeToNewsletter()` API function
- Creates a communication record via `/api/crm/communications`
- Can be enhanced to use dedicated newsletter endpoint

---

## Environment Variables

### For Development
Create a `.env` file:

```env
VITE_API_BASE_URL=https://api.manuvoo.com
VITE_USE_MOCK_API=false
```

### For Production (Netlify)
Set environment variables in Netlify dashboard:
1. Go to Site settings → Environment variables
2. Add:
   - `VITE_API_BASE_URL` = `https://api.manuvoo.com`

---

## Error Handling

All API functions return a consistent response format:

```typescript
{
  data?: any,      // Response data on success
  error?: string   // Error message on failure
}
```

Example usage with error handling:

```typescript
const result = await createInquiry(formData);

if (result.error) {
  // Handle error
  toast.error(result.error);
} else {
  // Handle success
  toast.success('Inquiry submitted!');
  console.log(result.data);
}
```

---

## CORS Configuration

Ensure your backend API at `https://api.manuvoo.com` has CORS enabled for your frontend domain(s):

```javascript
// Backend CORS configuration example
const allowedOrigins = [
  'https://manuvoo.com',
  'https://www.manuvoo.com',
  'https://your-netlify-site.netlify.app',
  'http://localhost:5173' // For local development
];
```

---

## Testing the API

### 1. Test Locally
```bash
bun run dev
# Visit http://localhost:5173
# Fill out contact form or newsletter
# Check browser console for API calls
```

### 2. Test API Directly
```bash
curl -X POST https://api.manuvoo.com/api/crm/inquiries \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User",
    "email": "test@example.com",
    "venueType": "restaurant",
    "message": "Test inquiry",
    "source": "api_test"
  }'
```

---

## Next Steps

### Potential Enhancements

1. **Newsletter Endpoint**
   - Add dedicated `/api/crm/newsletter/subscribe` endpoint
   - Update `subscribeToNewsletter()` to use it

2. **Form Validation**
   - Add phone number validation
   - Add custom field validation based on venue type

3. **Rate Limiting**
   - Implement client-side rate limiting
   - Add honeypot fields for spam prevention

4. **Analytics**
   - Track form submission rates
   - Monitor API response times
   - Log conversion metrics

5. **Webhook Integration**
   - Add webhook support for real-time notifications
   - Integrate with Slack/Discord for new inquiries

---

## Troubleshooting

### API Not Responding
1. Check if backend is running: `https://api.manuvoo.com/api/health`
2. Verify CORS headers are set correctly
3. Check browser console for errors
4. Verify environment variables are set

### Forms Not Submitting
1. Check browser console for errors
2. Verify API endpoint URLs in `src/config/api.ts`
3. Test API directly with curl
4. Check network tab in browser DevTools

### TypeScript Errors
1. Ensure all types are imported from `src/lib/api.ts`
2. Run `bun run build` to check for type errors
3. Update type definitions if API response format changes

---

## Support

For API-related issues:
- Check backend API documentation
- Review error logs in browser console
- Test endpoints with Postman or curl
- Contact backend team for API changes
