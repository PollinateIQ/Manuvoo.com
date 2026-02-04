# WhatsApp Testing Guide

## Current Status

Your WhatsApp API is configured with:
- ✅ Phone Number ID: `996518726873498`
- ✅ Access Token: Configured
- ✅ Recipient Number: `27696848796`

## Issue: Invalid Parameter Error

The "Invalid parameter" error typically means one of these issues:

### 1. Recipient Number Not Registered (Most Common)

Before you can send messages to a number, you need to register it in Meta's system:

**Steps to Register Your Number:**

1. Go to your Meta App Dashboard: https://developers.facebook.com/apps/
2. Select your WhatsApp app
3. Navigate to: **WhatsApp → API Setup**
4. Find the **"Send and receive messages"** section
5. Look for **"To" field** - Add your number: `27696848796`
6. Click **"Manage phone number list"** or **"Add phone number"**
7. You'll receive a verification code via WhatsApp
8. Enter the code to verify

**Important:** During development/testing, you can only send messages to numbers that are:
- Registered in your test phone number list
- OR using a production WhatsApp Business Account

### 2. Access Token Issues

Your access token might be:
- Expired (temporary tokens expire in 24 hours)
- Missing required permissions
- Not associated with the correct WhatsApp Business Account

**To Get a Permanent Token:**
1. Go to your Meta App Dashboard
2. Navigate to: **WhatsApp → API Setup**
3. Under **"Access Token"**, click **"Generate Token"**
4. Select these permissions:
   - `whatsapp_business_messaging`
   - `whatsapp_business_management`
5. Copy the permanent token
6. Update your `.env` file with the new token

### 3. Phone Number ID Verification

Verify your Phone Number ID is correct:
1. Go to **WhatsApp → API Setup**
2. Find **"From"** dropdown
3. The number shown should match your Phone Number ID: `996518726873498`

## Testing Steps

### Option 1: Use Meta's Built-in Test Tool (Recommended)

1. Go to https://developers.facebook.com/apps/
2. Select your app → **WhatsApp → API Setup**
3. Scroll to **"Send and receive messages"**
4. Use their built-in test interface:
   - **From:** Your test number (should be pre-filled)
   - **To:** 27696848796 (add this to test numbers first)
   - **Message:** Any test message
5. Click **"Send Message"**
6. Check your WhatsApp for the test message

If this works, your API is configured correctly and the issue is with our code.

### Option 2: Register Multiple Test Numbers

You can add up to 5 test numbers:
1. Your own number: `27696848796`
2. Team members' numbers
3. Test device numbers

### Option 3: Upgrade to Production (For Live Testing)

If you want to send to any number without registration:
1. Go to **WhatsApp → Getting Started**
2. Click **"Request access"** or **"Go Live"**
3. Complete the Business Verification process
4. This allows sending to any WhatsApp number

**Note:** Business Verification can take 1-3 business days.

## Verification Checklist

Before running tests again:

- [ ] Add 27696848796 to test phone numbers in Meta dashboard
- [ ] Verify the number via the code sent to WhatsApp
- [ ] Confirm Phone Number ID is correct: `996518726873498`
- [ ] Check access token has required permissions
- [ ] Ensure access token is not expired
- [ ] Verify WhatsApp Business Account is active

## Alternative: Test with Meta's Test Number

Meta provides a test number you can message to verify setup:

1. In **WhatsApp → API Setup**, look for "Test number"
2. Send a test message TO that number instead
3. This confirms your API credentials work

To do this, temporarily change your `.env`:
```env
WHATSAPP_RECIPIENT_NUMBER=<meta_test_number>
```

Then run: `npm run test:whatsapp`

## Next Steps

1. **Register your number** (27696848796) in Meta's test phone list
2. **Verify with the code** sent to your WhatsApp
3. Run the test again: `npm run test:whatsapp`
4. Check your WhatsApp for the test message

## Success Indicators

Once working, you should see:
```
✅ SUCCESS! Message sent to WhatsApp

Message Details:
  Message ID: wamid.xxx...
  Status: sent

📱 Check your WhatsApp now!
```

## Need Help?

If you're still having issues:
1. Screenshot the Meta dashboard setup page
2. Check the error in Meta's App Dashboard → **Webhooks** or **Activity Log**
3. Verify your WhatsApp Business Account status
4. Ensure billing information is added (even for free tier)

**Common Meta Dashboard Locations:**
- Main setup: https://developers.facebook.com/apps/YOUR_APP_ID/whatsapp-business/wa-dev-console/
- API Setup: Apps → Your App → WhatsApp → API Setup
- Phone Numbers: Apps → Your App → WhatsApp → Phone Numbers
