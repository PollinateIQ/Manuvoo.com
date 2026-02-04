# WhatsApp Business Cloud API Integration Guide

## Overview
Your contact form now sends submissions directly to your WhatsApp using Meta's official WhatsApp Business Cloud API. This is a professional, automated solution that doesn't require users to manually send messages.

## ✅ What's Been Implemented

1. **Backend API Endpoint** (`api/send-whatsapp.ts`)
   - Receives form submissions
   - Formats data for WhatsApp
   - Sends messages via WhatsApp Cloud API
   - Handles errors gracefully

2. **Updated Contact Form** (`src/pages/Contact.tsx`)
   - Sends data to API endpoint
   - Shows loading states
   - Displays success/error messages
   - Auto-resets form after submission

3. **Configuration Files**
   - `.env.example` - Template for environment variables
   - `src/config/api.ts` - API configuration

## 🚀 Setup Instructions

### Step 1: Create a Meta Developer Account

1. Go to https://developers.facebook.com/
2. Log in with your Facebook account (or create one)
3. Click "My Apps" → "Create App"
4. Choose "Business" as the app type
5. Fill in app details:
   - App Name: "Manuvoo Contact Form"
   - Contact Email: info@manuvoo.com

### Step 2: Enable WhatsApp Business API

1. In your app dashboard, click "Add Product"
2. Find "WhatsApp" and click "Set Up"
3. Follow the setup wizard:
   - Select or create a Business Portfolio
   - Add a phone number (you can use a test number initially)

### Step 3: Get Your Credentials

1. **Phone Number ID:**
   - Go to WhatsApp → Getting Started
   - Copy the "Phone number ID" (looks like: 123456789012345)

2. **Access Token:**
   - In the same page, you'll see a "Temporary access token"
   - Click "Generate permanent token" for production use
   - Copy and save this token securely

3. **Recipient Number:**
   - This is YOUR WhatsApp number: +27 69 684 8796
   - Format it as: 27696848796 (no spaces or +)

### Step 4: Configure Environment Variables

1. Create a `.env` file in your project root:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your credentials:
   ```env
   WHATSAPP_PHONE_NUMBER_ID=your_phone_number_id_here
   WHATSAPP_ACCESS_TOKEN=your_access_token_here
   WHATSAPP_RECIPIENT_NUMBER=27696848796
   ```

### Step 5: Deploy Your API Endpoint

You have several deployment options:

#### Option A: Vercel (Recommended - Free Tier)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Create `vercel.json` configuration:
   ```json
   {
     "functions": {
       "api/send-whatsapp.ts": {
         "runtime": "@vercel/node@3"
       }
     },
     "env": {
       "WHATSAPP_PHONE_NUMBER_ID": "@whatsapp-phone-number-id",
       "WHATSAPP_ACCESS_TOKEN": "@whatsapp-access-token",
       "WHATSAPP_RECIPIENT_NUMBER": "@whatsapp-recipient-number"
     }
   }
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Add environment variables in Vercel dashboard:
   - Go to your project → Settings → Environment Variables
   - Add all three variables from your `.env` file

#### Option B: Netlify Functions

1. Create `netlify.toml`:
   ```toml
   [build]
     functions = "api"

   [[redirects]]
     from = "/api/*"
     to = "/.netlify/functions/:splat"
     status = 200
   ```

2. Deploy to Netlify and add environment variables in dashboard

#### Option C: Custom Server (Node.js/Express)

If you prefer a custom backend, I can provide a full Express.js setup.

### Step 6: Update Frontend Configuration

Update `src/config/api.ts` with your deployed API URL:

```typescript
export const API_BASE_URL = 'https://your-app.vercel.app';
```

Or use environment variables:
```typescript
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';
```

## 🧪 Testing

### Test with Meta's Test Numbers (Sandbox)

1. In WhatsApp API dashboard, go to "API Setup"
2. Use the test phone number provided by Meta
3. Add your phone number to the "To" field
4. Click "Send Message" to verify it works
5. Now test your contact form

### Test Your Implementation

1. Fill out the contact form on your website
2. Submit the form
3. Check your WhatsApp for the message
4. You should receive a formatted message with all form details

## 📋 Message Format

Messages will appear in your WhatsApp like this:

```
*New Contact Form Submission - Manuvoo*

*Name:* John Doe
*Email:* john@example.com
*Venue Type:* Restaurant

*Message:*
I'm interested in learning more about Manuvoo for my restaurant.
```

## 🔒 Security Best Practices

1. **Never commit `.env` file** - It contains sensitive credentials
2. **Use environment variables** - Store secrets in deployment platform
3. **Rotate tokens regularly** - Generate new access tokens periodically
4. **Enable webhook verification** - For production apps
5. **Set up rate limiting** - Prevent API abuse

## 💰 Cost Considerations

- **Free tier:** 1,000 conversations per month
- **Paid tier:** $0.005 - $0.009 per conversation (varies by region)
- A "conversation" = 24-hour window of messages

For a contact form, this is essentially FREE for most businesses.

## 🐛 Troubleshooting

### Error: "Phone number not registered"
- Make sure you've registered your phone number in Meta Business Suite
- Verify the number in WhatsApp Business API settings

### Error: "Invalid access token"
- Generate a new permanent token
- Update your environment variables
- Redeploy your application

### Error: "Message not received"
- Check your recipient number format (no + or spaces)
- Verify your phone has WhatsApp installed
- Check Meta's status page for API issues

### Error: "CORS issues"
- Ensure your API endpoint has proper CORS headers
- Check that your frontend is making requests to the correct URL

## 📞 Support

If you need help with setup:
1. Check Meta's official documentation: https://developers.facebook.com/docs/whatsapp
2. Review error logs in your deployment platform
3. Test API endpoint directly with Postman/Thunder Client

## 🔄 Alternative: Quick Implementation (Without Cloud API)

If the Cloud API setup is too complex, I can also implement:

1. **Formspree + Zapier Integration:**
   - Formspree collects form data (free tier)
   - Zapier forwards to WhatsApp (5 free zaps)
   - Setup time: 10 minutes
   - No coding required

2. **Make.com (Integromat) Integration:**
   - Similar to Zapier
   - More free operations
   - Visual workflow builder

Would you like me to implement one of these alternatives instead?

## 📝 Next Steps

1. Complete Meta Developer account setup
2. Get your WhatsApp credentials
3. Choose deployment platform (Vercel recommended)
4. Deploy API endpoint
5. Test the integration
6. Go live!

Let me know if you need help with any of these steps!
