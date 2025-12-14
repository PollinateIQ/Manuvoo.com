# Statia — Design System & Website Requirements (Manuvoo)

> **Purpose:** Statia is the single source of truth for how Manuvoo should *look, feel, and be built* on the public website (UI patterns + content rules + page requirements).  
> **Important:** Use the screenshots as *visual reference only*—do not copy layouts 1:1.

---

## Related source documents (content inputs)
- **Platform positioning + roadmap:** `Manuvoo-Platform-Website-and-Roadmap.md`
- **OMS (operations system):** `PaaS-Website.md`
- **Customer ordering experience:** `customer-ordering-app.md`


## 1) How to use the documents together (workflow)

### The 4 documents and what they control
1) **Statia (this document)**  
   - Controls: colors, typography, spacing, components, section patterns, page templates, and UI rules.

2) **Manuvoo Platform Website & Roadmap**  
   - Controls: the platform positioning, modules list, “what exists now vs coming soon”, and the phased roadmap.

3) **ManuvooOMS (PaaS Website)**  
   - Controls: OMS-first positioning (stations, tables, routing, live status), and operational benefits.

4) **Customer Ordering App**  
   - Controls: the customer journey (QR → menu → order → track → pay), what’s included today, and what’s coming next.

### Build order (recommended)
1) **Implement tokens** (colors / type / spacing) and the **core components** from Statia.  
2) Build the **page templates** (Home, About, Services, Roadmap, Contact).  
3) Fill each section using the correct source document (2–4).  
4) Only after that, add optional extras (testimonials, more FAQs, case studies).

---

## 2) Brand + experience rules

### Brand personality
- **Modern, confident, operationally serious**
- **Hospitality-first** (tables, service flow, stations, bills/payments)
- **Real-time, visibility, control** (status-driven operations)

### UI principles
- **Dark-first interface** with warm accent glow (premium + focused).
- **Minimal clutter**: fewer elements, stronger hierarchy.
- **Status-driven design**: where possible, communicate “state” clearly (active, pending, ready, completed).
- **Consistency over creativity**: repeat patterns so users learn the system quickly.

---

## 3) Visual design system

### Color tokens (keep the orange theme)
Use these as tokens (names can match your codebase style):

- **Base / Background**
  - `bg-0`: #070707 (true dark)
  - `bg-1`: #0B0B0B (page background)
  - `bg-2`: #121212 (section background)

- **Surface**
  - `surface-1`: #141414 (cards)
  - `surface-2`: #1A1A1A (hover / raised)
  - `surface-3`: #202020 (inputs)

- **Text**
  - `text-1`: #F4F4F4 (primary)
  - `text-2`: #CFCFCF (secondary)
  - `text-3`: #9A9A9A (muted)

- **Accent (primary)**
  - `accent-1`: #FF5A1F (orange)
  - `accent-2`: #FF7A45 (hover / brighter)
  - `accent-3`: #C63A12 (deep orange for shadows)

- **Borders**
  - `border-1`: rgba(255, 90, 31, 0.35) (accent outline)
  - `border-2`: rgba(255, 255, 255, 0.08) (neutral outline)

- **Glow**
  - `glow-accent`: rgba(255, 90, 31, 0.25)
  - `glow-soft`: rgba(255, 90, 31, 0.10)

> **Rule:** Use orange for emphasis and “primary actions” only. Most UI stays neutral.

### Gradients (subtle)
- Background wash: dark → slightly warm at edges (low opacity).
- Card glow: thin orange outline + soft inner shadow.

### Typography (simple hierarchy)
- **Font:** modern sans-serif (placeholder; choose one and use everywhere).
- **Heading weights:** 600–800 (bold for hero)
- **Body weights:** 400–500

Suggested scale:
- H1: 44–56px
- H2: 32–40px
- H3: 24–28px
- Body: 16–18px
- Small: 13–14px

### Radius, spacing, layout
- **Radius:** 16–24px on cards/sections (premium feel).
- **Spacing scale:** 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64
- **Max content width:** 1100–1200px
- **Grid:** 12-column (desktop), single column (mobile)

---

## 4) Component inventory (UI elements)

This is the list of UI elements to build once and reuse everywhere.

### Navigation
- Top navbar (sticky)
  - Brand (logo placeholder)
  - Links: Home, About, Services, Roadmap, Contact
  - Primary CTA button: “Book a demo” (or “Get Started”)
- Mobile: hamburger → slide-down menu

### Footer
- Brand block (logo + short mission sentence)
- “Company” links (About, Roadmap)
- “Support” links (Contact, Privacy Policy)
- Social icons (placeholders)
- Copyright line

### Core components
- **Buttons**
  - Primary (orange)
  - Secondary (outline)
  - Tertiary (text)
  - Disabled state
- **Badges**
  - “Implemented”, “Coming soon”, “Service-ready”
- **Cards**
  - Feature card
  - Module card
  - Testimonial card
- **Accordion** (FAQ)
  - Closed + open states
- **Form inputs**
  - Text input, select, textarea
  - Inline validation states (error/success)
- **Tabs**
  - Used for “Now / Next / Soon” (roadmap) and “Modules”
- **Section header pattern**
  - Eyebrow label (small)
  - Title
  - Short supporting text

### Reusable section patterns
- Hero with 2 CTAs
- “Outcomes” (3–4 value tiles)
- “How it works” (step list)
- “Modules” (grid of cards)
- Testimonials grid
- FAQ + CTA banner
- Contact form + alternative contact details

---

## 5) Website information architecture (pages)

### Required pages
1) **Home**
2) **About**
3) **Services**
4) **Roadmap**
5) **Contact**

> **Note:** Pricing is intentionally excluded for now. Add a menu slot later if needed, but keep it hidden/disabled.

---

## 6) Page requirements (content + sections)

## Home (primary marketing page)
**Goal:** explain what Manuvoo is, who it’s for, what it replaces, and why it wins.

### Required sections
1) **Hero**
   - Headline: “Run smarter hospitality operations — from table to cash-up.”
   - Subtext: one sentence that connects QR/table → orders → bills/payments → inventory → staff.
   - CTAs: “Book a demo” (primary) + “Start free trial” (secondary, optional label)

2) **Outcomes (benefits tiles)**
   - Faster ordering & table turnover
   - Less operational chaos (live statuses)
   - Better margin control (stock + waste)

3) **Product suite overview (3 cards)**
   - Tenant Admin Portal
   - ManuvooOMS (operations layer)
   - Customer Ordering App (guest experience)

4) **How it works (4–5 steps)**
   - Setup tenant → create menu → run service → control stock → manage team

5) **Modules highlight**
   - Show “Implemented now” modules as a clean grid.
   - Use badges for truthfulness.

6) **Testimonials (optional, placeholder-friendly)**
   - 3–6 cards, no fake logos required.

7) **FAQ**
   - Keep it short (4–6 items).

8) **Final CTA banner**
   - Strong statement + “Book a demo” button.

---

## About
**Goal:** story + mission + what Manuvoo stands for.

### Required sections
- Mission statement (1–2 lines)
- The problem: why traditional POS workflows break at scale
- The approach: real-time operations + station routing + visibility
- Trust: data separation + role-based access (simple, no deep tech)
- Team/Company (placeholder)

---

## Services
**Goal:** clarify what you deliver and how a customer gets onboarded.

### Required sections
1) **What we provide (service cards)**
   - Onboarding & setup (tenant, locations, tables, menus)
   - Operations rollout (stations, routing, table workflows)
   - Customer ordering rollout (QR strategy, guest flow enablement)
   - Training & support (managers + staff)

2) **What’s included (modules summary)**
   - Use the same modules list and badges (Implemented / Coming soon / Service-ready).

3) **CTA**
   - “Talk to sales” / “Book a demo”

---

## Roadmap
**Goal:** communicate direction without over-promising.

### Required sections
- “Now” (Implemented today)
- “Next” (Coming soon screens)
- “Soon” (Service-ready → full UI)
- Optional: customer app upcoming items (clearly marked)

> **Rule:** Roadmap must always keep the “truth labels” visible.

---

## Contact
**Goal:** convert interest into a demo/lead.

### Required sections
- Contact form fields:
  - Name, Email, Company/Restaurant, Number of locations, Message
- Alternative contact methods (placeholder)
- CTA: Book a demo

---

## 7) Content rules (uniform voice)
- Use short sentences. Avoid jargon.
- Prefer “tables, stations, bills, payments” over generic “workflow automation”.
- Always separate:
  - **What exists today**
  - **What is coming soon**
  - **What is planned**
- Never mention pricing or plan amounts in copy for now.

---

## 8) What to pull from each source (mapping)

### Pull from “Manuvoo Platform Website & Roadmap”
- Hero positioning, target audience, module list (Implemented vs Coming soon), roadmap phases, differentiators, and clarity rules.

### Pull from “ManuvooOMS (PaaS Website)”
- OMS-first story: stations, routing, item-level statuses, table alerts, fulfillment flow, and operational comparison points.

### Pull from “Customer Ordering App”
- Customer journey, dine-in flow, payment request flow, invoices, loyalty/referrals, and the “Coming next” list.

---

## 9) Asset checklist (placeholders)
- Logo (placeholder)
- Favicon + app icon
- Social share image (OG)
- Product screenshots (placeholder frames)
- Icons set (simple line icons)

---

## 10) Acceptance checklist (done = ready to build)
- Tokens applied consistently (colors/type/spacing)
- Core components built once and reused
- Pages match the required sections
- No pricing shown anywhere
- Roadmap sections labeled truthfully
- Mobile layout works (stacked sections, readable spacing)
