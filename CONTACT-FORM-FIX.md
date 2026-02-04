# Contact Form - Temporary Fix Applied

## Issue
The backend API `/api/crm/inquiries` was returning a **500 Internal Server Error** when sending the full contact form data with optional fields like `venue_type`, `phone_number`, `tenant_type`, etc.

## Root Cause
Backend database or validation issue with the inquiries endpoint. The API works with minimal required fields but fails with optional fields.

## Temporary Fix Applied ✅

Modified `src/lib/api.ts` → `createInquiry()` function to:
- Send ONLY the required fields that work: `full_name`, `email`, `message`, `source`
- Include venue type information in the message body instead of as a separate field
- This ensures the form submits successfully without backend errors

### Before (Failing):
```json
{
  "full_name": "John Doe",
  "email": "john@example.com",
  "phone_number": "+27821234567",
  "venue_type": "restaurant",
  "tenant_type": "independent",
  "message": "I'm interested...",
  "source": "website"
}
```
❌ Result: 500 Internal Server Error

### After (Working):
```json
{
  "full_name": "John Doe",
  "email": "john@example.com",
  "message": "I'm interested...\n\nVenue Type: restaurant",
  "source": "website"
}
```
✅ Result: 201 Created - Success!

## Current Behavior

When a user fills out the contact form:
1. All form fields are collected (name, email, venue type, message)
2. The venue type is appended to the message
3. Only required fields are sent to the API
4. Form submits successfully ✅
5. Success toast is displayed
6. Form resets after 3 seconds

## Data Captured

The backend will receive:
- ✅ Full name
- ✅ Email address
- ✅ Message (including venue type in the text)
- ✅ Source (automatically set to "website")

**Missing from backend (temporarily):**
- ⚠️ Phone number (if we add it to the form)
- ⚠️ Venue type as separate field
- ⚠️ Tenant type
- ⚠️ Description field

## For Backend Team

**Action Required:**
Please investigate why the `/api/crm/inquiries` endpoint returns 500 error when these fields are included:
- `venue_type` (enum field)
- `tenant_type` (string field)
- `phone_number` (string field)  
- `description` (string field)
- `metadata` (JSON field)

**Working minimal example:**
```bash
curl -X POST https://api.manuvoo.com/api/crm/inquiries \
  -H "Content-Type: application/json" \
  -d '{
    "full_name": "Test User",
    "email": "test@example.com",
    "message": "Test message",
    "source": "website"
  }'
```

**Check:**
1. Enum validation for `venue_type`
2. Database constraints
3. Backend error logs for the 500 error
4. RPC function implementation

## Testing

The contact form now works! Test it:

1. Start dev server: `bun run dev`
2. Go to `/contact`
3. Fill out the form
4. Submit
5. Should see success message ✅

## Future Enhancement

Once backend team fixes the inquiries endpoint:
1. Update `src/lib/api.ts` → `createInquiry()` function
2. Send all fields properly
3. Remove the workaround that appends venue to message
4. Add phone number field to the form
5. Add more detailed metadata

## Summary

✅ **Contact form is now working**
✅ **Data is being saved to CRM**
✅ **Users can submit inquiries successfully**
⚠️ **Venue type is in message text instead of separate field (temporary)**
⚠️ **Backend team needs to fix 500 error for full field support**

---

**Status:** 🟢 **WORKING WITH WORKAROUND**

**Next Step:** Backend team to investigate and fix the 500 error
