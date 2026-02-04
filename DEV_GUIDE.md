# Development Guide - Running Your App

## Quick Start

### Option 1: Run Everything Together (Recommended)

```bash
npm run dev:all
```

This starts **both** servers:
- **Frontend** (Vite): http://localhost:5173
- **Backend** (Express): http://localhost:3001

### Option 2: Run Separately

Open **2 terminal windows**:

**Terminal 1 - Backend API:**
```bash
npm run server
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

## What Each Server Does

### Backend Server (Port 3001)
- Handles WhatsApp API integration
- Processes contact form submissions
- Sends messages to your WhatsApp

**Endpoints:**
- `POST /api/send-whatsapp` - Submit contact form
- `GET /api/health` - Check server status

### Frontend Server (Port 5173)
- Your Manuvoo website
- React + Vite development server
- Hot reload for instant updates

## Testing the Integration

### Step 1: Start Servers

```bash
npm run dev:all
```

You should see:
```
🚀 WhatsApp API Server Started!
📡 Server running at: http://localhost:3001
🎯 Ready to receive form submissions!

VITE v7.x.x  ready in xxx ms
➜  Local:   http://localhost:5173/
```

### Step 2: Test the API

Open a new terminal and test the health endpoint:

```bash
curl http://localhost:3001/api/health
```

Should return:
```json
{
  "status": "ok",
  "message": "WhatsApp API server is running"
}
```

### Step 3: Test the Contact Form

1. Open your browser: http://localhost:5173
2. Navigate to the Contact page
3. Fill out the form:
   - First name: **Test**
   - Last name: **User**
   - Email: **test@example.com**
   - Venue: **Restaurant**
   - Message: **This is a test message**
4. Click **"Send message"**

### Step 4: Check Results

**In the backend terminal**, you should see:
```
📤 Sending WhatsApp message...
To: 27696848796
✅ Message sent successfully!
Message ID: wamid.xxx...
```

**In your WhatsApp**, you should receive:
```
*New Contact Form Submission - Manuvoo*

*Name:* Test User
*Email:* test@example.com
*Venue Type:* Restaurant

*Message:*
This is a test message
```

## Troubleshooting

### Error: "EADDRINUSE: address already in use"

Another process is using port 3001 or 5173.

**Solution 1 - Kill the process:**
```bash
# Windows
netstat -ano | findstr :3001
taskkill /PID <PID_NUMBER> /F

# Or use a different port in server.js
```

**Solution 2 - Use different ports:**
Edit `server.js` line 13:
```javascript
const PORT = 3002; // Changed from 3001
```

Then update `src/config/api.ts`:
```typescript
export const API_BASE_URL = 'http://localhost:3002';
```

### Error: "Failed to send WhatsApp message"

**Possible causes:**

1. **Phone number not registered**
   - Go to Meta dashboard
   - Add 27696848796 to test numbers
   - Verify with code sent to WhatsApp

2. **Invalid access token**
   - Token might be expired
   - Generate a permanent token in Meta dashboard
   - Update `.env` file

3. **Wrong Phone Number ID**
   - Verify in Meta dashboard: WhatsApp → API Setup
   - Should match: `996518726873498`

### Console shows: "Invalid parameter"

Your phone number needs to be registered in Meta's test environment:

1. Go to: https://developers.facebook.com/apps/
2. Select your app → **WhatsApp → API Setup**
3. Add `27696848796` to test numbers
4. Verify with code

### Form submits but no message received

**Check the backend logs** for specific errors:
```bash
npm run server
```

Look for:
- ✅ Configuration: All three values should be "✓ Set"
- ❌ Error messages with details

## Environment Variables

Make sure your `.env` file has:

```env
WHATSAPP_PHONE_NUMBER_ID=996518726873498
WHATSAPP_ACCESS_TOKEN=EAAUGkuWI2Lg... (your full token)
WHATSAPP_RECIPIENT_NUMBER=27696848796
```

**Verify configuration:**
```bash
npm run server
```

Should show:
```
Configuration:
  Phone Number ID: ✓ Set
  Access Token: ✓ Set
  Recipient Number: 27696848796
```

## Production Deployment

When ready to deploy:

### Deploy API (Vercel)

1. Create `vercel.json`:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/server.js"
    }
  ]
}
```

2. Deploy:
```bash
vercel
```

3. Add environment variables in Vercel dashboard

### Deploy Frontend (Vercel/Netlify)

1. Update `src/config/api.ts`:
```typescript
export const API_BASE_URL = 'https://your-api.vercel.app';
```

2. Deploy:
```bash
vercel deploy --prod
```

Or connect your GitHub repo to Vercel/Netlify for auto-deployment.

## Available Scripts

```bash
npm run dev          # Start frontend only (Vite)
npm run server       # Start backend only (Express API)
npm run dev:all      # Start both servers (Recommended)
npm run build        # Build for production
npm run preview      # Preview production build
npm run test:whatsapp # Test WhatsApp API directly
```

## Development Workflow

1. **Start servers:**
   ```bash
   npm run dev:all
   ```

2. **Make changes** to your code

3. **Test in browser:** http://localhost:5173

4. **Check backend logs** in terminal for API activity

5. **Submit test forms** to verify WhatsApp integration

## Need Help?

- Backend not starting → Check port 3001 is available
- Frontend errors → Check browser console
- WhatsApp errors → Check backend terminal logs
- Configuration → See `TESTING_GUIDE.md`

## Quick Commands Reference

```bash
# Start development
npm run dev:all

# Test WhatsApp API
npm run test:whatsapp
curl http://localhost:3001/api/health

# Build for production
npm run build

# Preview build
npm run preview
```

Happy coding! 🚀
