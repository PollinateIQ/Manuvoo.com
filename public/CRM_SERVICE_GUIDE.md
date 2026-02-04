# CRM Service API Guide

## Overview

The CRM Service is a **standalone** service that handles:
- **Contacts**: Customer/lead contact information
- **Inquiries**: Sales leads and business inquiries
- **Feedback**: Customer feedback and reviews
- **Support Tickets**: Customer support requests
- **Communications**: Email/SMS/message logs

### Key Features

- **No Authentication Required**: All endpoints are public
- **Standalone Schema**: No foreign keys to other services
- **Auto Contact Upsert**: Creating inquiries/feedback/tickets automatically creates or updates contact records

## Database Schema

### Schema: `crm_service`

| Table | Description |
|-------|-------------|
| `crm_contacts` | Customer/lead contact information |
| `crm_inquiries` | Sales leads and business inquiries |
| `crm_feedback` | Customer feedback and reviews |
| `crm_support_tickets` | Support ticket records |
| `crm_communications` | Communication logs (email, SMS, etc.) |

### Enum Types

| Enum | Values |
|------|--------|
| `venue_type` | restaurant, cafe, bar, food_truck, catering, hotel, fast_food, fine_dining, casual_dining, bakery, other |
| `inquiry_status` | new, contacted, qualified, converted, closed, spam |
| `inquiry_source` | website, mobile_app, referral, social_media, advertisement, cold_call, event, partner, other |
| `feedback_category` | general, product, service, support, feature_request, bug_report, other |
| `ticket_status` | open, in_progress, waiting_on_customer, waiting_on_internal, resolved, closed |
| `ticket_priority` | low, medium, high, urgent |
| `communication_channel` | email, sms, whatsapp, phone, in_app, other |
| `communication_direction` | inbound, outbound |
| `communication_status` | draft, pending, sent, delivered, read, failed, bounced |

## API Endpoints

### Inquiries

#### Create Inquiry
```
POST /api/crm/inquiries
```

Creates a new inquiry and automatically creates/updates the contact.

**Request Body:**
```json
{
  "full_name": "John Doe",
  "email": "john.doe@example.com",
  "phone_number": "+27821234567",
  "username": "johnd",
  "venue_type": "restaurant",
  "tenant_type": "independent",
  "description": "Looking for a POS system",
  "message": "I have a small restaurant with 10 tables.",
  "source": "website",
  "metadata": {}
}
```

**Required Fields:** `full_name`, and either `email` or `phone_number`

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "contact_id": "uuid",
    "venue_type": "restaurant",
    "tenant_type": "independent",
    "description": "Looking for a POS system",
    "message": "...",
    "status": "new",
    "source": "website",
    "assigned_to": null,
    "metadata": {},
    "created_at": "2025-02-04T...",
    "updated_at": "2025-02-04T...",
    "contact": {
      "id": "uuid",
      "full_name": "John Doe",
      "email": "john.doe@example.com",
      "phone_number": "+27821234567",
      ...
    }
  },
  "message": "Inquiry created successfully"
}
```

#### List Inquiries
```
GET /api/crm/inquiries?page=1&limit=20&status=new&venue_type=restaurant
```

**Query Parameters:**
- `page` (optional, default: 1)
- `limit` (optional, default: 20)
- `status` (optional): Filter by status
- `venue_type` (optional): Filter by venue type

#### Get Inquiry by ID
```
GET /api/crm/inquiries/:id
```

#### Update Inquiry Status
```
PATCH /api/crm/inquiries/:id/status
```

**Request Body:**
```json
{
  "status": "contacted",
  "assigned_to": "sales@company.com"
}
```

**Status Values:** new, contacted, qualified, converted, closed, spam

### Feedback

#### Create Feedback
```
POST /api/crm/feedback
```

**Request Body:**
```json
{
  "message": "Great platform! Easy to use.",
  "full_name": "Happy Customer",
  "email": "happy@example.com",
  "rating": 5,
  "category": "product",
  "subject": "Excellent Experience",
  "is_public": true,
  "metadata": {}
}
```

**Required Fields:** `message`

**Note:** Contact info (`full_name`, `email`, `phone_number`) is optional. Anonymous feedback is supported.

#### List Feedback
```
GET /api/crm/feedback?page=1&limit=20&category=product&min_rating=4
```

**Query Parameters:**
- `page` (optional, default: 1)
- `limit` (optional, default: 20)
- `category` (optional): Filter by category
- `min_rating` (optional): Filter by minimum rating (1-5)

### Support Tickets

#### Create Support Ticket
```
POST /api/crm/support-tickets
```

**Request Body:**
```json
{
  "subject": "Cannot login to my account",
  "description": "I am getting an error when trying to login.",
  "full_name": "Bob Wilson",
  "email": "bob.wilson@example.com",
  "phone_number": "+27829876543",
  "priority": "high",
  "metadata": {}
}
```

**Required Fields:** `subject`, `description`

**Response:** Includes auto-generated `ticket_number` (e.g., "TKT20250001")

#### List Support Tickets
```
GET /api/crm/support-tickets?page=1&limit=20&status=open&priority=high
```

**Query Parameters:**
- `page` (optional, default: 1)
- `limit` (optional, default: 20)
- `status` (optional): Filter by status
- `priority` (optional): Filter by priority

#### Get Support Ticket by ID
```
GET /api/crm/support-tickets/:id
```

#### Update Support Ticket Status
```
PATCH /api/crm/support-tickets/:id/status
```

**Request Body:**
```json
{
  "status": "in_progress",
  "assigned_to": "support@company.com"
}
```

**Status Values:** open, in_progress, waiting_on_customer, waiting_on_internal, resolved, closed

### Communications

#### Create Communication
```
POST /api/crm/communications
```

**Request Body (Email):**
```json
{
  "channel": "email",
  "direction": "outbound",
  "subject": "Welcome to our platform",
  "payload_json": {
    "to": "john.doe@example.com",
    "from": "support@company.com",
    "body": "Thank you for your inquiry.",
    "html": "<p>Thank you for your inquiry.</p>"
  },
  "contact_id": "uuid",
  "inquiry_id": "uuid",
  "ticket_id": "uuid",
  "status": "sent",
  "metadata": {}
}
```

**Required Fields:** `channel`, `direction`, `payload_json`

**Note:** `contact_id`, `inquiry_id`, and `ticket_id` are optional and can be used to link the communication to existing records.

#### List Communications
```
GET /api/crm/communications?page=1&limit=20&channel=email&status=sent&contact_id=uuid
```

**Query Parameters:**
- `page` (optional, default: 1)
- `limit` (optional, default: 20)
- `channel` (optional): Filter by channel
- `status` (optional): Filter by status
- `contact_id` (optional): Filter by contact

#### Update Communication Status
```
PATCH /api/crm/communications/:id/status
```

**Request Body:**
```json
{
  "status": "delivered"
}
```

**Status Values:** draft, pending, sent, delivered, read, failed, bounced

### Contacts

#### List Contacts
```
GET /api/crm/contacts?page=1&limit=20&search=john
```

**Query Parameters:**
- `page` (optional, default: 1)
- `limit` (optional, default: 20)
- `search` (optional): Search by name, email, phone, or company

#### Get Contact by ID
```
GET /api/crm/contacts/:id
```

## Applying the Migration

To use the CRM Service, you must apply the database migration manually:

1. **Schema + Tables + Enums:**
   ```
   scripts/migrations/create-crm-service.sql
   ```

2. **RPC Functions:**
   ```
   scripts/rpcs/crm-services/rpc-crm-service.sql
   ```

Run these in your Supabase SQL editor or using psql.

## Testing

### Test Script
```bash
./test/crm-service-test.sh
```

### Postman Collection
Import `postman/crm_service_collection.json` into Postman.

Set the `baseUrl` variable to your API URL (default: `http://localhost:3000`).
