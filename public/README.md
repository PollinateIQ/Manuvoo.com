# CRM Service Documentation

This folder contains documentation for the standalone CRM Service API.

## Contents

- [CRM_SERVICE_GUIDE.md](CRM_SERVICE_GUIDE.md) - Complete API guide with endpoints, request/response examples, and data models

## Overview

The CRM Service is a **standalone** service with:
- No dependencies on other schemas (tenant_service, user_service, etc.)
- All endpoints are **public** (no authentication required)
- Uses its own `crm_service` schema in PostgreSQL

## Endpoints Summary

| Resource | Endpoint | Description |
|----------|----------|-------------|
| Inquiries | `POST /api/crm/inquiries` | Create new inquiry/lead |
| Inquiries | `GET /api/crm/inquiries` | List inquiries |
| Inquiries | `GET /api/crm/inquiries/:id` | Get inquiry by ID |
| Inquiries | `PATCH /api/crm/inquiries/:id/status` | Update inquiry status |
| Feedback | `POST /api/crm/feedback` | Submit feedback |
| Feedback | `GET /api/crm/feedback` | List feedback |
| Support Tickets | `POST /api/crm/support-tickets` | Create support ticket |
| Support Tickets | `GET /api/crm/support-tickets` | List support tickets |
| Support Tickets | `GET /api/crm/support-tickets/:id` | Get ticket by ID |
| Support Tickets | `PATCH /api/crm/support-tickets/:id/status` | Update ticket status |
| Communications | `POST /api/crm/communications` | Create communication record |
| Communications | `GET /api/crm/communications` | List communications |
| Communications | `PATCH /api/crm/communications/:id/status` | Update communication status |
| Contacts | `GET /api/crm/contacts` | List contacts |
| Contacts | `GET /api/crm/contacts/:id` | Get contact by ID |

## Related Files

- **SQL Migration**: `scripts/migrations/create-crm-service.sql`
- **RPC Functions**: `scripts/rpcs/crm-services/rpc-crm-service.sql`
- **Test Script**: `test/crm-service-test.sh`
- **Postman Collection**: `postman/crm_service_collection.json`
