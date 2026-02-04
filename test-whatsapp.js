/**
 * WhatsApp API Test Script
 * Run this to test your WhatsApp integration before deploying
 * 
 * Usage: npm run test:whatsapp
 */

// Load environment variables
import dotenv from 'dotenv';
dotenv.config();

const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
const recipientNumber = process.env.WHATSAPP_RECIPIENT_NUMBER;

console.log('🧪 Testing WhatsApp Business API Integration\n');
console.log('Configuration:');
console.log('✓ Phone Number ID:', phoneNumberId || '✗ Missing');
console.log('✓ Access Token:', accessToken ? `${accessToken.substring(0, 20)}...` : '✗ Missing');
console.log('✓ Recipient Number:', recipientNumber || '✗ Missing');
console.log('');

if (!phoneNumberId || !accessToken || !recipientNumber) {
  console.error('❌ Missing required environment variables!');
  console.error('Please check your .env file');
  process.exit(1);
}

// Test message
const testMessage = {
  messaging_product: 'whatsapp',
  recipient_type: 'individual',
  to: recipientNumber,
  type: 'text',
  text: {
    preview_url: false,
    body: `🧪 *Test Message from Manuvoo*\n\nThis is a test message to verify your WhatsApp integration is working correctly!\n\n✓ Configuration: Success\n✓ API Connection: Active\n✓ Message Delivery: Testing...\n\nTimestamp: ${new Date().toLocaleString()}`
  }
};

console.log('📤 Sending test message to WhatsApp...\n');

fetch(`https://graph.facebook.com/v21.0/${phoneNumberId}/messages`, {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(testMessage)
})
  .then(response => {
    if (!response.ok) {
      return response.json().then(err => {
        throw new Error(JSON.stringify(err, null, 2));
      });
    }
    return response.json();
  })
  .then(result => {
    console.log('✅ SUCCESS! Message sent to WhatsApp\n');
    console.log('Message Details:');
    console.log('  Message ID:', result.messages[0].id);
    console.log('  Status:', result.messages[0].message_status || 'sent');
    console.log('\n📱 Check your WhatsApp now!');
    console.log('   Number:', recipientNumber);
    console.log('\n✅ Your WhatsApp integration is working correctly!');
  })
  .catch(error => {
    console.error('❌ FAILED to send message\n');
    console.error('Error Details:');
    console.error(error.message);
    console.error('\n🔧 Troubleshooting:');
    console.error('  1. Verify your Phone Number ID is correct');
    console.error('  2. Check if your Access Token is valid (not expired)');
    console.error('  3. Ensure recipient number format is correct (no + or spaces)');
    console.error('  4. Verify your WhatsApp Business Account is active');
    console.error('\n📖 See WHATSAPP_SETUP_GUIDE.md for more help');
    process.exit(1);
  });
