## Manuvoo Customer Ordering App

**The customer-facing ordering and payment experience that plugs into the Manuvo suite.**

Manuvoo Customer Ordering App is the guest experience layer of Manuvo: diners scan a table QR code (or select a restaurant + table), browse the menu, place orders, track progress, request payment, and keep invoices—while your Manuvo operations tools handle preparation, approvals, and back-of-house workflows.

---

## Who it’s for

### For diners (end users)
- **Scan, browse, and order** from their own phone
- **Track order status** in real-time
- **Request payment**, add a **tip**, and keep **invoices**
- Save **dietary preferences**, **allergens**, and **favorites**
- Earn **loyalty points** and use **referrals**

### For operators (restaurants)
- **Faster table turns**: fewer payment delays and order bottlenecks
- **Higher average order value (AOV)**: modifiers, add-ons, tips, and better upsell surfaces
- **Better order accuracy**: special instructions captured at source
- **Cleaner customer data**: preferences + loyalty + repeat visits
- **Suite integration**: orders/bills/payments flow into the Manuvo backend so your ops tools can act on them

---

## The customer journey (dine-in)

1. **Scan a table QR code** (or manually select restaurant + table)
2. **Join the table session** (seating) and open the restaurant menu
3. **Browse categories**, search, and customize items (modifiers + instructions)
4. **Add to cart** and **place the order**
5. **Track order progress** (pending → preparing → ready → served)
6. **Request payment**, pick a method (cash/card), add tip, optionally request discount
7. **View invoices**, share/download receipts, and keep history for next time

---

## How it connects to the Manuvo suite

```mermaid
flowchart LR
  Diner[Diner] -->|QR_link_or_table_entry| CustomerApp[CustomerApp(PWA/Mobile)]
  CustomerApp -->|Auth_Tenant_Table_context| ManuvoAPI[Manuvo_API]
  CustomerApp -->|Orders_Bills_Payments| ManuvoAPI
  ManuvoAPI --> OMSPOS[OMS_POS_TableMgmt]
  OMSPOS --> Kitchen[Kitchen_Prep]
  ManuvoAPI -->|Realtime_or_polling_updates| CustomerApp
  CustomerApp -->|Invoice_PDF_WhatsApp_share| Diner
```

**What this app does**: guest experience (browse → order → track → pay → invoices).

**What the ops apps do**: staff actions and workflows (confirm/prepare/serve, discounts approvals, payment completion, table operations). For technical reference in this repo, see:
- `[Frontend service layer/orderService.md](Frontend service layer/orderService.md)`
- `[Frontend service layer/tenantService.md](Frontend service layer/tenantService.md)`
- `[BILL_PAYMENTS_AND_RECEIPTS.md](BILL_PAYMENTS_AND_RECEIPTS.md)`

---

## What’s included today (implemented capabilities)

### Restaurant discovery and table entry
- **Restaurant selection**
  - Browse restaurants (Explore)
  - Search restaurants (Restaurant Select)
- **Table entry options**
  - Join a table using a **table QR link** route (`/table/{table_id}` or `/tenant/{tenant_id}/location/{location_id}/table/{table_id}`)
  - Manual table selection via **table entry modal** (tenant search + table grid + table number verification)
- **Seating sessions**
  - Seats the customer into a **table session** and maintains tenant/table context
  - Detects active seating / unpaid sessions (supports anti-dine-and-dash workflows)

### Menu browsing and upsell surfaces
- **Menu catalog**
  - Category tabs
  - Search
  - Favorites/featured carousel
- **Item customization**
  - Item detail modal
  - **Special instructions**
  - **Modifiers / modifier groups** support (when present on items)
- **Availability-aware ordering**
  - Blocks adding unavailable items

### Cart and ordering
- **Cart management**
  - Quantity changes (+/-)
  - Remove item
  - Clear cart
- **Place order flow**
  - Creates (or reuses) an **open bill** for the table
  - Creates an order with items + modifiers + notes
  - Links order to the bill

### Order tracking (customer-facing)
- **Live order tracking**
  - Progress view + status timeline
  - Multi-order viewing and refresh
- **Real-time refresh**
  - Uses tenant-scoped realtime subscriptions (with polling fallback)

### Bills and payments (request + tracking)
- **Bill discovery**
  - Finds the customer’s current active bill using table/customer matching
- **Tip support**
  - Tip selector and totals calculation
- **Discount requests (controlled)**
  - Discount request flow with authorization code, status tracking (pending/approved/rejected)
- **Payment request flow**
  - Choose **cash** or **card** in the customer app
  - App sets bill to **pending payment** and creates a payment record
  - App watches for backend status changes (paid/closed)

### Invoices and sharing
- **Invoice history**
  - Pending vs completed invoices
  - Payment details
- **Invoice export/sharing**
  - Generate PDF
  - Share invoice
  - **WhatsApp share** support

### Customer profile, loyalty, and retention
- **Customer profile**
  - Name, email, phone
  - Account status + email verified display
- **Dining preferences**
  - Dietary preferences
  - Allergens
  - Favorite items
- **Loyalty + referrals**
  - Loyalty points display
  - Referral code generation
- **Communication preferences**
  - Marketing opt-in toggle

### Platform & deployment
- **Expo Router app** with mobile + web support
- **PWA-friendly web experience** (manifest + installable web app scaffolding)
- **Recommended QR strategy**: generate table QR codes that open a web link like `/table/{table_id}` for the smoothest “scan → menu” experience. (The in-app QR scan screen exists; deeper scan→route automation is listed in the roadmap.)
- Session-based token storage strategy (web session storage; in-memory on mobile)

---

## Capability matrix (quick scan)

| Capability | Diner value | Operator value |
|---|---|---|
| QR/table entry + seating session | Instant start, no staff needed | Faster turns, better table control |
| Menu browse + search + categories | Find items faster | Higher conversion |
| Modifiers + special instructions | Correct order, personalized | Fewer remakes, higher AOV |
| Cart + place order | Simple checkout | Cleaner demand signal |
| Order tracking | Transparency, less anxiety | Fewer “where is my order?” interruptions |
| Payment request + tips | Faster checkout | More tips, less payment friction |
| Discount request w/ auth code | Fair discounts | Controlled comps/discounts |
| Invoices + WhatsApp/PDF | Receipts on demand | Better customer service + audit trail |
| Profile + preferences | Personalized dining | Retention + customer data |
| Loyalty + referrals | Rewards | Repeat visits + acquisition |

---

## Upsell packaging (how to sell it)

### Starter (QR dine-in ordering)
- Table QR codes + seating session
- Menu browsing + cart + order placement
- Live order tracking

### Growth (payments + invoices)
- Everything in Starter
- Payment request flow (cash/card) + tips
- Invoice history + PDF export
- WhatsApp invoice sharing

### Pro (retention + customer data)
- Everything in Growth
- Customer profiles + dining preferences (dietary/allergens/favorites)
- Loyalty points + referral codes

---

## Coming next (roadmap — clearly labeled)

These items are **not fully delivered in the current customer app** and should be marketed as upcoming:

- **Pickup ordering** flows (pre-order, scheduled pickup windows)
- **Delivery ordering** flows (address, delivery fees, driver dispatch/status)
- **Food truck mode** (dynamic locations, limited menus, rapid ordering)
- **Push notifications** (order ready, payment confirmed, promos)
- **Customer discovery map / geo browse** (nearby restaurants)
- **Points history UI** (full loyalty ledger)
- **In-app QR scan → deep-link routing polish** (scan inside the app and route directly into the `/table/...` flow)

---

## Suggested website CTAs

- **Book a demo**: see dine-in QR ordering + payments in action
- **Get onboarded**: create your tenant, locations, tables, and menus
- **Generate QR codes for tables**: unlock scan-to-order in minutes
- **Activate loyalty + referrals**: turn first-time diners into regulars
