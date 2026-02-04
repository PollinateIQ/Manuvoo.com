/**
 * WhatsApp Business Cloud API Integration
 * 
 * Setup Instructions:
 * 1. Go to https://developers.facebook.com/
 * 2. Create a Meta App and enable WhatsApp Business API
 * 3. Get your Phone Number ID and Access Token
 * 4. Add them to your environment variables
 * 
 * Environment Variables needed:
 * - WHATSAPP_PHONE_NUMBER_ID: Your WhatsApp Business phone number ID
 * - WHATSAPP_ACCESS_TOKEN: Your permanent access token
 * - WHATSAPP_RECIPIENT_NUMBER: Your WhatsApp number to receive messages (format: 27696848796)
 */

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  venue: string;
  message: string;
}

export default async function handler(req: Request): Promise<Response> {
  // Handle CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers });
  }

  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { status: 405, headers }
    );
  }

  try {
    const formData: ContactFormData = await req.json();

    // Validate form data
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers }
      );
    }

    // WhatsApp API Configuration
    const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
    const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
    const recipientNumber = process.env.WHATSAPP_RECIPIENT_NUMBER;

    if (!phoneNumberId || !accessToken || !recipientNumber) {
      console.error('Missing WhatsApp configuration');
      return new Response(
        JSON.stringify({ 
          error: 'Server configuration error',
          details: 'WhatsApp API credentials not configured'
        }),
        { status: 500, headers }
      );
    }

    // Format message
    const messageText = `*New Contact Form Submission - Manuvoo*\n\n` +
      `*Name:* ${formData.firstName} ${formData.lastName}\n` +
      `*Email:* ${formData.email}\n` +
      `*Venue Type:* ${formData.venue || 'Not specified'}\n\n` +
      `*Message:*\n${formData.message}`;

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
      console.error('WhatsApp API Error:', errorData);
      return new Response(
        JSON.stringify({ 
          error: 'Failed to send WhatsApp message',
          details: errorData
        }),
        { status: 500, headers }
      );
    }

    const result = await whatsappResponse.json();

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Form submitted successfully!',
        whatsappMessageId: result.messages?.[0]?.id
      }),
      { status: 200, headers }
    );

  } catch (error) {
    console.error('Error processing request:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      { status: 500, headers }
    );
  }
}
