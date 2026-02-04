# Backend API Integration Summary

## ✅ Completed Integration

Your Manuvoo website is now fully integrated with the backend API at **`https://api.manuvoo.com`**

---

## 🔌 Integrated Features

### 1. Contact Form (`src/pages/Contact.tsx`)
- **API Endpoint:** `POST /api/crm/inquiries`
- **Function:** `createInquiry()`
- **What it does:**
  - Submits contact form data
  - Auto-creates contact record in CRM
  - Returns success/error response
- **Data captured:**
  - First Name
  - Last Name
  - Email
  - Venue Type
  - Message
  - Source (automatically set to "website_contact_form")

### 2. Newsletter Subscription (`src/sections/Newsletter.tsx`)
- **API Endpoint:** `POST /api/crm/communications`
- **Function:** `subscribeToNewsletter()`
- **What it does:**
  - Creates communication record for newsletter subscription
  - Tracks email subscriptions
  - Source automatically set to "website_newsletter"
- **Data captured:**
  - Email
  - Source

---

## 📁 New Files Created

### Configuration Files
1. **`src/config/api.ts`** - Updated with full API endpoint configuration
2. **`src/lib/api.ts`** - API utility functions for all CRM operations
3. **`.env.example`** - Template for environment variables
4. **`API-INTEGRATION.md`** - Complete API documentation

### Updated Files
1. **`src/pages/Contact.tsx`** - Now uses real API
2. **`src/sections/Newsletter.tsx`** - Now uses real API  
3. **`DEPLOYMENT.md`** - Added environment variable instructions

---

## 🛠️ Available API Functions

All located in `src/lib/api.ts`:

### Inquiries
- `createInquiry(data)` - Create inquiry (used by contact form)
- `getInquiries(params)` - List all inquiries
- `getInquiry(id)` - Get single inquiry
- `updateInquiryStatus(id, status)` - Update inquiry status

### Feedback
- `createFeedback(data)` - Submit feedback
- `getFeedback(params)` - List feedback

### Support Tickets
- `createSupportTicket(data)` - Create support ticket
- `getSupportTickets(params)` - List tickets
- `getSupportTicket(id)` - Get single ticket
- `updateSupportTicketStatus(id, status)` - Update ticket status

### Communications
- `createCommunication(data)` - Create communication record
- `getCommunications(params)` - List communications
- `updateCommunicationStatus(id, status)` - Update status

### Contacts
- `getContacts(params)` - List contacts
- `getContact(id)` - Get single contact

### Newsletter
- `subscribeToNewsletter(data)` - Newsletter subscription (uses communications API)

---

## 🌐 API Base URL

**Production:** `https://api.manuvoo.com`

The API URL is configured in:
- `src/config/api.ts`
- Environment variable: `VITE_API_BASE_URL`

---

## 🔐 Environment Variables

### Local Development (`.env`)
```env
VITE_API_BASE_URL=https://api.manuvoo.com
VITE_USE_MOCK_API=false
```

### Netlify Production
Set in Netlify dashboard → Site settings → Environment variables:
- `VITE_API_BASE_URL` = `https://api.manuvoo.com`

**Note:** If not set, defaults to `https://api.manuvoo.com`

---

## 📊 Data Flow

### Contact Form Submission
```
User fills form → Submit button clicked → createInquiry() called
→ POST /api/crm/inquiries → Backend creates contact & inquiry
→ Success toast shown → Form reset after 3 seconds
```

### Newsletter Subscription
```
User enters email → Subscribe clicked → subscribeToNewsletter() called
→ POST /api/crm/communications → Backend records subscription
→ Success toast shown → Email cleared after 3 seconds
```

---

## ✨ Features

### Error Handling
- All API calls wrapped in try-catch
- User-friendly error messages via toast notifications
- Console logging for debugging

### Loading States
- Submit buttons show loading text while processing
- Buttons disabled during submission
- Visual feedback with spinners/icons

### Success States
- Success messages with checkmark icons
- Auto-reset forms after successful submission
- Toast notifications with custom messages

---

## 🧪 Testing

### Test Contact Form
1. Go to `/contact` page
2. Fill out the form
3. Submit
4. Check browser console for API call
5. Verify success toast appears
6. Verify form resets after 3 seconds

### Test Newsletter
1. Scroll to newsletter section (on Home or Contact page)
2. Enter email address
3. Click Subscribe
4. Check browser console for API call
5. Verify success toast appears
6. Verify email field clears after 3 seconds

### Test API Directly
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

## 🔍 Debugging

### Browser Console
Open DevTools (F12) and check:
- **Console tab:** For error messages and logs
- **Network tab:** For API requests/responses
- **Filter by:** `api.manuvoo.com` to see API calls

### Common Issues

**Issue:** API calls failing with CORS error
- **Solution:** Backend needs to allow your domain in CORS settings

**Issue:** 404 Not Found
- **Solution:** Check API endpoint URL in `src/config/api.ts`

**Issue:** 500 Server Error
- **Solution:** Check backend server status and logs

**Issue:** Form submits but no data saved
- **Solution:** Verify backend is receiving correct data format

---

## 📈 Next Steps

### Recommended Enhancements

1. **Add Phone Number Field**
   - Update contact form to include phone number
   - Add to API request

2. **Add Validation**
   - Client-side validation for all fields
   - Custom error messages per field

3. **Add Analytics**
   - Track form submission rates
   - Monitor API response times
   - Log conversion metrics

4. **Add Honeypot Fields**
   - Spam prevention
   - Bot detection

5. **Add Webhook Integration**
   - Real-time notifications
   - Slack/Discord integration

6. **Add Thank You Page**
   - Redirect after successful submission
   - Custom thank you message

---

## 📚 Documentation

- **Full API Docs:** See `API-INTEGRATION.md`
- **Deployment Guide:** See `DEPLOYMENT.md`
- **Quick Start:** See `DEPLOY-SUMMARY.md`
- **Checklist:** See `CHECKLIST.md`

---

## ✅ Deployment Checklist

Before deploying:
- [ ] Verify `.env` has correct API URL
- [ ] Test contact form locally
- [ ] Test newsletter subscription locally
- [ ] Check browser console for errors
- [ ] Verify API endpoints are accessible
- [ ] Set environment variables in Netlify
- [ ] Deploy and test on live site

---

## 🎉 Summary

You now have:
- ✅ Fully integrated contact form with CRM
- ✅ Newsletter subscription system
- ✅ Comprehensive API utility functions
- ✅ Error handling and user feedback
- ✅ Production-ready backend integration

**Backend API:** https://api.manuvoo.com  
**Frontend integrations:** Contact form + Newsletter

Ready to deploy! 🚀
