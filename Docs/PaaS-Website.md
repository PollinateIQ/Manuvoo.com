# ManuvooOMS (Manvoo OMS)

## What is it?
ManuvooOMS is a **cloud Order & Operations Management System (PaaS)** for multi-location businesses. It’s designed to run your daily operations in real time:
- **Tables + service operations** (dine-in)
- **Order management** (pickup / delivery / counter)
- **Station workflows** (kitchen / bar / beverage / etc.)
- **Bills & payments tracking** (restaurant bill flow + direct pay flow)
- **Schedules + time clock** (clock-in/out with PIN)
- **Multi-user + multi-tenant sign-in** (one staff member can work across multiple tenants)

**Core idea:** ManuvooOMS is an OMS. **Staff don’t create orders**—orders arrive from customer ordering channels and are fulfilled by staff with station routing and live status.

---

## Why this exists (traditional POS vs modern operations)
Traditional POS systems are built around **manual order entry** and “receipt printing”. That creates pain in busy operations:
- **Slow + error-prone order entry** during rush periods
- **Paper tickets** and verbal handoffs between kitchen/bar/floor
- **No true station routing** (everything is “one queue”) 
- **Limited real-time visibility** into what’s cooking, what’s ready, and what’s stuck
- **Disconnected workflows** (tables, bills, staff schedule, delivery, pickup)

ManuvooOMS is built around **real-time fulfillment**: orders arrive digitally, items are routed automatically, statuses update live, and the floor team gets clear “what to do next” signals.

---

## How it works (high level)
```text
Customer Order (QR / web / mobile)
  -> Backend validates and creates order (and bill for dine-in)
  -> Items auto-route by preparation area (kitchen/bar/beverage/etc.)
  -> Stations update item status (queued -> in progress -> ready)
  -> Tables/Front-of-house gets alerts and serves/hands off
  -> Payments recorded (bill-based for dine-in, direct-pay for pickup/delivery)
```

**Real-time operations:** Workflows are designed around live updates (for example: new orders, item-ready events, and table alerts) so everyone works from the same status view.

---

## Feature: Table management
Designed for dine-in venues where table status is the heartbeat of service.

**What it does**
- **Real-time table states**: available, reserved, occupied, order_ready, wants_payment, cleaning, unavailable
- **Table alerts/tags**: new order, needs attention, order ready, wants payment
- **Waiter assignment**: auto-assign by section or manager reassignment
- **Table session linking**: tables link to the active bill + all orders for that table session

**How it adds value**
- **Faster service**: staff sees what tables need next (serve, help, bill)
- **Less chaos**: fewer verbal check-ins and fewer missed “ready” items
- **Better guest experience**: consistent service timing and fewer delays

---

## Feature: Order management (OMS-first)
ManuvooOMS is built for operations where orders come from customers (not from staff typing on a terminal).

**What it does**
- Supports multiple order types:
  - **Dine-in** (QR at table)
  - **Pickup** (including scheduled pickup)
  - **Delivery** (including scheduled delivery)
  - **Counter** (quick-service flow)
- Tracks clear **order statuses** (pending → confirmed → preparing → ready → completed/collected/delivered)
- Tracks **item-level statuses** per station (pending/queued → preparing/in_progress → ready → served)
- Enables **rush/priority** handling (operationally important during peaks)

**How it adds value**
- **Fewer mistakes**: no re-keying customer orders at a POS terminal
- **Operational clarity**: everyone sees the same truth in real time
- **Faster throughput**: stations work in parallel, not sequentially

---

## Feature: Stations (Kitchen Display System / Bar Display / etc.)
Stations are how you scale output without scaling confusion.

**What it does**
- Routes order items by **preparation area** (kitchen, bar, beverage, dessert, grill, pizza, cold station, etc.)
- Each station sees **only the items they must prepare**
- Stations update item status to drive the rest of the system (e.g., “item ready” triggers table alerts)
- Role-based station access (server → tables, cook → kitchen, bartender → bar, manager → all)

**How it adds value**
- **Parallel fulfillment**: kitchen and bar can work simultaneously on the same order
- **Less shouting / fewer slips**: the system becomes the “runner” of information
- **Cleaner handoffs**: front-of-house is notified when items are ready

---

## Feature: Menu & item routing (configuration-driven)
Routing only works if items are configured correctly.

**What it does**
- Menu items have a defined **preparation area** used for station routing
- Support for item **modifiers** (customizations) and special instructions
- **86 / availability management** (mark items unavailable)
- Optional inventory linkage concepts (recipes/ingredients) to support auto-86 patterns

**How it adds value**
- **Consistent station queues** (items always go to the right team)
- **Fewer remakes** (customizations are visible where food is prepared)
- **Less disappointment** (sold-out items can be blocked from ordering)

---

## Feature: Bill management & payments
Payment handling differs by business type.

### Restaurant (bill system)
**What it does**
- Backend auto-creates/updates a **bill** for a dine-in table session
- Multiple orders can be added to the same bill (guests can order more over time)
- Supports payment tracking (amount paid / balance due) and close-out flows
- Supports documented concepts like **tips** and **discounts**, and a **split-billing workflow** (UI/automation may be phased depending on rollout)

**How it adds value**
- **Accurate end-of-meal billing** with all orders included
- **Faster close-out**: totals are already calculated; staff just take payment and close

### Pickup / delivery / counter (direct pay)
**What it does**
- Supports “order-and-pay” flows for non-dine-in scenarios
- Supports **cash-on-pickup / cash-on-delivery** tracking concepts

**How it adds value**
- **Simple checkout** for fast-service operations
- **Operational tracking** even when payment is collected later

> Note: Cash payment flows are documented and implemented for OMS-side processing. Card / payment-gateway automation is described as planned/roadmap in the workflows.

---

## Feature: Calendar, schedules & time clock (clock-in/out)
Built for managing real shifts, not spreadsheets.

**What it does**
- Manager scheduling: shifts with scheduled start/end, notes, and status
- Staff views: “my schedule”, daily/weekly visibility
- Time clock: **clock-in / clock-out using PIN**, break tracking, actual hours calculations
- “Who’s working now” view (active shifts)

**How it adds value**
- **Faster staff onboarding**: PIN sign-in + station selection
- **Better accountability**: scheduled vs actual hours and shift status tracking
- **Cleaner operations**: staffing aligns to station needs

---

## Feature: Multi-user sign-in (Email + PIN) and multi-tenant support
Designed for real venues where staff rotate roles and some staff work across locations/brands.

**What it does**
- **Email/password** for managers/admins (full access)
- **PIN authentication** for floor staff (fast login + quick switching)
- **Tenant selection** for users with access to multiple tenants
- **Station selection** after sign-in (based on role/permissions)

**How it adds value**
- **Speed**: reduce login friction during shift changes
- **Control**: permissions limit what each role can do
- **Scale**: one platform supports many tenants/locations

---

## Traditional POS vs ManuvooOMS PaaS (comparison)
| Capability | Traditional_POS | ManuvooOMS_PaaS |
|---|---|---|
| Order entry | Staff types orders in a terminal | Orders arrive from customer ordering channels; staff fulfills |
| Station routing | Often manual / paper tickets | Auto-routes by preparation area (kitchen/bar/beverage/etc.) |
| Real-time status | Limited | Item + order statuses update live across views |
| Table operations | Basic table map | Table states + alerts + waiter assignment + “wants payment” flow |
| Pickup & delivery ops | Add-on or separate app | First-class workflows (pickup codes, driver assignment concepts) |
| Staff scheduling | Separate system/spreadsheet | Built-in schedule + PIN time clock |
| Multi-tenant | Often complex | Built in tenant selection + role-based station access |
| Deployments | On-prem or device-bound | PWA-ready web build (deployable via Netlify) |

---

## Fit by business type (multi-vertical)
**Restaurant / dine-in**
- Tables view + waiter assignment + bill system + kitchen/bar station routing

**Cafe / quick-service**
- Pickup/counter flows + simplified station setup (kitchen + beverage)

**Delivery-first kitchens**
- Delivery queue + driver assignment concepts + cash-on-delivery tracking concepts

**Multi-location operators**
- Tenant selection + consistent workflows across sites

---

## Security & reliability (practical)
- Role-based station access and permissions (manager vs staff)
- PIN sessions designed for shift-based usage
- PWA deployment model supports modern web operations (installable + deployable)

---

## Roadmap / phased items (based on current workflow docs)
- **Payment gateway integrations** (e.g., Stripe/Square) for in-app card payments (planned)\n+- **Card payment flow in OMS** for dine-in bills (currently documented; integration marked as TODO in implementation docs)\n+- **Split billing UI** (workflow/data model documented; UI may be phased)\n+- **Live driver location tracking** for delivery (explicitly marked as future)\n+- **Auto-86 from inventory** (inventory-linked availability is described as optional)\n+
---

## Call to action (placeholders)
- **Book a demo**: (link)
- **Start a free trial**: (link)
- **Contact sales**: (email)

---

## Short “upsell” pitch (for your landing page hero)
**Run tables, stations, pickup, delivery, schedules, and payments tracking in one real-time operations system.**
ManuvooOMS replaces manual POS entry and paper tickets with automatic order routing, station-ready workflows, and live service visibility.
