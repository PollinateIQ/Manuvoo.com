## Manuvoo — Hospitality Operations Platform

### Hero (website-ready copy)
**Run smarter hospitality operations — from table to cash-up.**  
Manuvoo connects your **QR table experience**, **orders & payments**, **menu management**, **inventory control**, and **staff operations** into one platform built for modern hospitality.

- Reduce ordering friction and speed up service
- Improve operational visibility (orders, bills, payments)
- Protect margins with stock control (receiving + waste)
- **Primary CTA**: Book a demo
- **Secondary CTA**: Start a free trial
- **Alt CTA**: Talk to sales

---

## Who Manuvoo is for (target audience)
Manuvoo is built for **hospitality businesses**, including:
- **Restaurants & cafes** (dine-in, takeaway, multi-station kitchens)
- **Bars & lounges** (high volume, fast table turnover)
- **Food courts & venues** (multiple locations/areas)
- **Events & pop-ups** (rapid setup, QR-first experiences)

### Typical users inside a business
- **Owner / General Manager**: visibility, control, configuration, reporting
- **Floor manager / Host**: table operations, live order flow
- **Cashier**: payments, bills, reconciliation
- **Kitchen / Expo**: order status progression (pending → preparing → ready)
- **Back-office**: inventory, purchasing/suppliers (roadmap), cost control

---

## What it is (plain-English positioning)
Manuvoo is a **platform** made of:
- **Tenant Admin Portal (this application)**: where owners/managers run the business operations.
- **Customer/table experience (your customer app/site)**: Manuvoo generates and manages **table QR codes** and the operational workflow behind them. The customer ordering experience is delivered via your connected customer-facing app/site (part of the overall platform rollout).
- **OMS (Owner Management & Sales)**: the operational layer that unifies orders, bills, payments, menu, inventory, staff, and tenant configuration.

---

## The big outcomes (benefits that sell)
### Increase revenue
- **Faster ordering** and smoother table turnover.
- **Fewer errors** from manual order taking.

### Reduce operational friction
- Central place to manage **menu, tables, orders, bills, payments**, and **inventory**.
- Multi-tenant access model supports teams that work across multiple venues.

### Improve control and accountability
- Track operational KPIs and activity.
- Stock movements (receiving + waste) support cost control.

---

## How it works (website section)
1) **Set up your business (Tenant)**
- Add your business profile, locations, branding, and settings.

2) **Create your menu**
- Categories, menu items, images, and recipes/ingredients.

3) **Run service**
- Manage tables (including **QR codes**), receive orders, and track bills & payments.

4) **Control stock**
- Maintain inventory items, refill stock, record waste, export data.

5) **Manage your team**
- Add staff, manage activation, and view schedules.

---

## Product modules (what exists today)
Below is a **truthful** feature catalogue based on the current tenant portal implementation.

### Status legend
- **Implemented**: available in the tenant portal UI today
- **Service-ready**: API/service layer exists; UI can be added
- **Coming soon**: UI placeholder exists (or planned), not yet implemented

---

## Implemented modules (available now)

### 1) Multi-tenant access + tenant switching (Implemented)
- **What it does**: Supports staff assigned to one or multiple tenants; forces tenant selection when needed.
- **Who uses it**: multi-venue owners, managers, staff who work across venues.
- **Value**: correct data separation, fewer mistakes, scalable operations.

### 2) Dashboard (Implemented)
- **What it does**: Operational KPI dashboard including orders/bills/payments trends, recent orders, activity feed, top products.
- **Who uses it**: owner/GM, floor manager.
- **Value**: instant visibility into what’s happening today and this month.

### 3) Orders & Transactions hub: Orders + Bills + Payments (Implemented)
- **What it does**:
  - View orders, bills, and payments in one workspace.
  - Search/filter/sort, drill into details.
  - Cancel orders from the admin portal.
- **Who uses it**: floor manager, cashier, owner/GM.
- **Value**: faster issue resolution, smoother close-out, fewer disputes.

### 4) Menu Builder: Categories, Menu Items, Recipes (Implemented)
- **What it does**:
  - Create/edit/delete **categories** and **menu items**.
  - Upload menu item images.
  - Manage **recipes/ingredients** per item (for operational readiness + costing workflows).
- **Who uses it**: owner/GM, chef/operations.
- **Value**: keep menu updated, enable future costing + stock linkage.

### 5) Tables + QR (Implemented)
- **What it does**:
  - Manage tables (number, section/area, capacity, status).
  - View table stats (occupancy, capacity).
  - View **table QR codes** (foundation for QR-first customer/table experiences delivered via a connected customer app/site).
- **Who uses it**: host/floor manager, owner/GM.
- **Value**: better table control, scalable QR-first ordering flow.

### 6) Inventory Management (Implemented)
- **What it does**:
  - Create/edit/delete inventory items.
  - Track stock levels and value.
  - Record stock movements: **receiving/refill** and **waste**.
  - Export inventory data to CSV.
- **Who uses it**: back-office, owner/GM.
- **Value**: reduce stock-outs and waste, protect margins.

### 7) Staff Management + Schedules (Implemented)
- **What it does**:
  - Staff directory, add staff (rich HR fields), activate/deactivate.
  - Schedule view (aggregates schedules per staff).
- **Who uses it**: owner/GM, operations manager.
- **Value**: staffing visibility and better operational continuity.

### 8) Tenant profile: Business info, Locations, Branding, Gallery, Settings (Implemented)
- **What it does**:
  - Edit tenant info and settings.
  - Manage locations.
  - Upload branding assets (logo/banner) and manage gallery images.
  - Feature toggles (UI-level toggles today).
- **Who uses it**: owner/GM.
- **Value**: consistent brand + scalable multi-location setup.

### 9) Authentication (Implemented)
- **What it does**: Email/password login + signup, password reset, Google OAuth callback handling.
- **Who uses it**: all users.
- **Value**: secure access and smoother onboarding.

---

## Coming Soon modules (UI placeholders exist)
These modules appear in the portal navigation but are not implemented yet (currently placeholder screens):

- **Sales** (Coming soon): sales dashboard and reporting
- **Analytics** (Coming soon): performance metrics, trends, charts
- **Suppliers** (Coming soon): supplier management, purchasing workflows
- **Billing** (Coming soon): subscription plans, invoices, payment history
- **Settings** (Coming soon): app preferences, security, notifications
- **Payment Verification** (Coming soon): reconciliation + verification workflows

---

## Service-ready capabilities (API exists; UI can be built next)
These features already have service-layer endpoints defined in the codebase and can be productized with UI:

### Payments (Service-ready)
- Refund requests + approval/process flow
- Split payments
- Payment verification requests + approve/reject
- Payment audit history

### Bills (Service-ready)
- Bill splits
- Discounts + discount approvals
- Bill status history
- Link/unlink orders to a bill

### Inventory (Service-ready)
- Supplier CRUD
- Supplier-item linking + pricing
- Inventory alerts
- Inventory counts (stock take)
- Movement approval/void

### Customers (Service-ready)
- Customer profiles
- Loyalty points
- Referral codes
- Visit/customer stats (for dashboards)

### Users & roles (Service-ready)
- User role assignments
- Ban/unban
- Activate/deactivate

---

## Why this wins (differentiators)
- **Hospitality-first workflow**: tables, QR, orders, bills, and payments are treated as one flow.
- **Operational + back-office together**: menu, inventory, staff, tenant configuration in one place.
- **Multi-tenant readiness**: built for teams and operators across multiple venues.
- **Modern UI/UX**: fast dashboarding, clear status-driven operations, strong admin ergonomics.

---

## Security, separation, and reliability (website section)
- **Tenant separation**: the portal enforces tenant selection and scopes operational data by tenant.
- **Authenticated API access**: token-based authentication with refresh flows.
- **Role/permission growth path**: role management endpoints exist (UI can be layered on).

---

## Integrations (positioning for the website)
Manuvoo is **API-driven** and designed to integrate with:
- **Payment providers** (card/mobile money), with refund/verification workflows supported in the platform services.
- **Storage/CDN** for business and menu media (logo/banner/gallery/menu images).
- **Future POS/accounting** connectors (planned as part of the roadmap).

---

## Important clarity (so your website stays truthful)
- The **Tenant Admin Portal** and its operational modules listed as **Implemented** are available in this codebase.
- The **customer-facing ordering experience** is described as part of the platform ecosystem, but is **not implemented in this repo**. This portal supports the QR/table foundation and the operations side (orders, bills, payments, menu, tables).

---

## Roadmap (phased plan)

### Phase 1 — Now (Implemented)
- Tenant switching + tenant access gating
- Dashboard KPIs + operational widgets
- Orders & Transactions hub (orders, bills, payments)
- Menu builder + recipes + image uploads
- Tables + QR code dialog
- Inventory items + movements (receiving + waste) + export
- Staff management + schedules
- Tenant profile + locations + branding + gallery
- Authentication (email/password + Google OAuth)

### Phase 2 — Next (Coming soon screens)
- Sales dashboard
- Analytics dashboards
- Supplier module (UI)
- Billing/subscription UI
- Settings UI
- Payment verification UI

### Phase 3 — Soon (Convert service-ready into full product features)
- Bill splits + discount approvals UI
- Payment refunds + split payments UI
- Payment verification workflows + reconciliation
- Inventory suppliers UI + supplier-item pricing
- Inventory alerts + stock take (counts)
- Customers UI: loyalty + referrals + customer insights
- Roles/permissions UI + role-based navigation

---

## Suggested website page layout (copy blocks you can paste)

### Section: “All-in-one for hospitality”
**Orders. Tables. Payments. Menu. Inventory. Staff.**  
Manuvoo helps hospitality teams reduce chaos and increase speed — without sacrificing control.

### Section: “Run service in real time”
- Track orders and transaction statuses
- Keep tables organized with sections and QR codes
- Resolve billing and payment issues faster

### Section: “Control costs behind the scenes”
- Track stock levels
- Record receiving and waste
- Export inventory instantly

### Section: “Scale across locations”
- Multi-tenant access supports staff operating across venues
- Centralized tenant setup, branding, and locations

### FAQ (starter)
- **How long does setup take?** Typically minutes to create your tenant, menu, and tables.
- **Do I need special hardware?** No—QR-first experiences work with standard smartphones.
- **Can I run multiple venues?** Yes—multi-tenant access is built into the platform.
- **Do you support refunds/splits?** Supported at the platform/service layer; rolling into UI in the roadmap.

### Final CTA
**Ready to modernize your hospitality operations?**  
Book a demo or start your trial and see Manuvoo in action.

---

## Notes for internal use (accuracy & positioning)
- Some modules are intentionally labeled **Coming soon** (Sales/Analytics/Suppliers/Billing/Settings/Payment Verification) to avoid over-promising.
- Several advanced workflows already exist at the **service layer** and are strong candidates for next product increments.
