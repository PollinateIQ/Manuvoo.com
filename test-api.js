/**
 * Test script to verify API integration
 * Run with: node test-api.js
 */

const API_BASE_URL = 'https://api.manuvoo.com';

// Test data
const testInquiry = {
  full_name: 'John Doe',
  email: 'john.doe@example.com',
  phone_number: '+27821234567',
  venue_type: 'restaurant',
  tenant_type: 'independent',
  description: 'Looking for a POS system',
  message: 'This is a test inquiry from the website contact form',
  source: 'api_test_script',
  metadata: {},
};

const testNewsletter = {
  channel: 'email',
  direction: 'inbound',
  subject: 'Newsletter Subscription',
  payload_json: {
    email: 'newsletter@example.com',
    type: 'newsletter_subscription',
    message: 'Newsletter subscription from newsletter@example.com',
  },
  status: 'sent',
  metadata: {
    source: 'api_test_script',
  },
};

const testFeedback = {
  message: 'Great platform! Easy to use.',
  full_name: 'Happy Customer',
  email: 'happy@example.com',
  rating: 5,
  category: 'product',
  subject: 'Excellent Experience',
  is_public: true,
  metadata: {},
};

// Test contact form API
async function testContactForm() {
  console.log('\n🧪 Testing Contact Form API...');
  console.log('Endpoint: POST /api/crm/inquiries');
  console.log('Data:', JSON.stringify(testInquiry, null, 2));
  
  try {
    const response = await fetch(`${API_BASE_URL}/api/crm/inquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testInquiry),
    });

    console.log('Status:', response.status, response.statusText);
    
    const data = await response.json();
    
    if (response.ok) {
      console.log('✅ SUCCESS - Contact form API is working!');
      console.log('Response:', JSON.stringify(data, null, 2));
      return { success: true, data };
    } else {
      console.log('❌ FAILED - API returned an error');
      console.log('Error:', JSON.stringify(data, null, 2));
      return { success: false, error: data };
    }
  } catch (error) {
    console.log('❌ ERROR - Failed to connect to API');
    console.error('Error:', error.message);
    return { success: false, error: error.message };
  }
}

// Test newsletter API
async function testNewsletterAPI() {
  console.log('\n🧪 Testing Newsletter API...');
  console.log('Endpoint: POST /api/crm/communications');
  console.log('Data:', JSON.stringify(testNewsletter, null, 2));
  
  try {
    const response = await fetch(`${API_BASE_URL}/api/crm/communications`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testNewsletter),
    });

    console.log('Status:', response.status, response.statusText);
    
    const data = await response.json();
    
    if (response.ok) {
      console.log('✅ SUCCESS - Newsletter API is working!');
      console.log('Response:', JSON.stringify(data, null, 2));
      return { success: true, data };
    } else {
      console.log('❌ FAILED - API returned an error');
      console.log('Error:', JSON.stringify(data, null, 2));
      return { success: false, error: data };
    }
  } catch (error) {
    console.log('❌ ERROR - Failed to connect to API');
    console.error('Error:', error.message);
    return { success: false, error: error.message };
  }
}

// Test API health
async function testAPIHealth() {
  console.log('\n🧪 Testing API Health...');
  console.log('Endpoint: GET /api/health');
  
  try {
    const response = await fetch(`${API_BASE_URL}/api/health`);
    
    console.log('Status:', response.status, response.statusText);
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ API is healthy!');
      console.log('Response:', JSON.stringify(data, null, 2));
      return { success: true, data };
    } else {
      console.log('⚠️ API health check failed');
      return { success: false };
    }
  } catch (error) {
    console.log('❌ ERROR - Cannot reach API');
    console.error('Error:', error.message);
    return { success: false, error: error.message };
  }
}

// Test feedback API
async function testFeedbackAPI() {
  console.log('\n🧪 Testing Feedback API...');
  console.log('Endpoint: POST /api/crm/feedback');
  console.log('Data:', JSON.stringify(testFeedback, null, 2));
  
  try {
    const response = await fetch(`${API_BASE_URL}/api/crm/feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testFeedback),
    });

    console.log('Status:', response.status, response.statusText);
    
    const data = await response.json();
    
    if (response.ok) {
      console.log('✅ SUCCESS - Feedback API is working!');
      console.log('Response:', JSON.stringify(data, null, 2));
      return { success: true, data };
    } else {
      console.log('❌ FAILED - API returned an error');
      console.log('Error:', JSON.stringify(data, null, 2));
      return { success: false, error: data };
    }
  } catch (error) {
    console.log('❌ ERROR - Failed to connect to API');
    console.error('Error:', error.message);
    return { success: false, error: error.message };
  }
}

// Run all tests
async function runTests() {
  console.log('═══════════════════════════════════════════');
  console.log('   API Integration Test Suite');
  console.log('   Base URL:', API_BASE_URL);
  console.log('═══════════════════════════════════════════');

  const results = {
    health: await testAPIHealth(),
    contactForm: await testContactForm(),
    feedback: await testFeedbackAPI(),
    newsletter: await testNewsletterAPI(),
  };

  console.log('\n═══════════════════════════════════════════');
  console.log('   Test Results Summary');
  console.log('═══════════════════════════════════════════');
  console.log('API Health:      ', results.health.success ? '✅ PASS' : '❌ FAIL');
  console.log('Contact Form:    ', results.contactForm.success ? '✅ PASS' : '❌ FAIL');
  console.log('Feedback:        ', results.feedback.success ? '✅ PASS' : '❌ FAIL');
  console.log('Newsletter:      ', results.newsletter.success ? '✅ PASS' : '❌ FAIL');
  console.log('═══════════════════════════════════════════\n');

  const allPassed = results.health.success && results.contactForm.success && results.feedback.success && results.newsletter.success;
  
  if (allPassed) {
    console.log('🎉 All tests passed! Your API integration is working correctly.\n');
  } else {
    console.log('⚠️ Some tests failed. Please check the errors above.\n');
  }

  process.exit(allPassed ? 0 : 1);
}

// Run the tests
runTests();
