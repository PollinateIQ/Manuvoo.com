/**
 * Development Server for WhatsApp API
 * This serves the API endpoint while you develop locally
 * 
 * Run: npm run server
 */

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// WhatsApp API endpoint
app.post('/api/send-whatsapp', async (req, res) => {
  try {
    const formData = req.body;

    // Validate form data
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // WhatsApp API Configuration
    const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
    const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
    const recipientNumber = process.env.WHATSAPP_RECIPIENT_NUMBER;

    if (!phoneNumberId || !accessToken || !recipientNumber) {
      console.error('Missing WhatsApp configuration');
      return res.status(500).json({ 
        error: 'Server configuration error',
        details: 'WhatsApp API credentials not configured'
      });
    }

    // Format message
    const messageText = `*New Contact Form Submission - Manuvoo*\n\n` +
      `*Name:* ${formData.firstName} ${formData.lastName}\n` +
      `*Email:* ${formData.email}\n` +
      `*Venue Type:* ${formData.venue || 'Not specified'}\n\n` +
      `*Message:*\n${formData.message}`;

    console.log('📤 Sending WhatsApp message...');
    console.log('To:', recipientNumber);

    // Send WhatsApp message using Cloud API
    const whatsappResponse = await fetch(
      `https://graph.facebook.com/v21.0/${phoneNumberId}/messages`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          recipient_type: 'individual',
          to: recipientNumber,
          type: 'text',
          text: {
            preview_url: false,
            body: messageText,
          },
        }),
      }
    );

    if (!whatsappResponse.ok) {
      const errorData = await whatsappResponse.json();
      console.error('❌ WhatsApp API Error:', errorData);
      return res.status(500).json({ 
        error: 'Failed to send WhatsApp message',
        details: errorData
      });
    }

    const result = await whatsappResponse.json();
    console.log('✅ Message sent successfully!');
    console.log('Message ID:', result.messages?.[0]?.id);

    res.json({ 
      success: true, 
      message: 'Form submitted successfully!',
      whatsappMessageId: result.messages?.[0]?.id
    });

  } catch (error) {
    console.error('❌ Error processing request:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok',
    message: 'WhatsApp API server is running',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log('\n🚀 WhatsApp API Server Started!\n');
  console.log(`📡 Server running at: http://localhost:${PORT}`);
  console.log(`📲 WhatsApp endpoint: http://localhost:${PORT}/api/send-whatsapp`);
  console.log(`💚 Health check: http://localhost:${PORT}/api/health\n`);
  console.log('Configuration:');
  console.log('  Phone Number ID:', process.env.WHATSAPP_PHONE_NUMBER_ID ? '✓ Set' : '✗ Missing');
  console.log('  Access Token:', process.env.WHATSAPP_ACCESS_TOKEN ? '✓ Set' : '✗ Missing');
  console.log('  Recipient Number:', process.env.WHATSAPP_RECIPIENT_NUMBER || '✗ Missing');
  console.log('\n🎯 Ready to receive form submissions!\n');
});
