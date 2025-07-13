# MANUVOO LANDING PAGE - DESIGN SPECIFICATION & IMPLEMENTATION PLAN

## **IMPORTANT: UI COMPONENT REQUIREMENTS**

### **Component Library Stack**
**CRITICAL INSTRUCTION**: This project uses a combination of component libraries for optimal UI/UX. 

#### **Primary Component Libraries:**
1. **Shadcn/ui** - For standard UI components and forms
2. **Aceternity UI** (https://ui.aceternity.com/) - For advanced animations and modern UI effects

#### **Before Creating Any Components:**
1. **Check Shadcn/ui First**: Look in `/components/ui/` folder for standard components (buttons, forms, cards)
2. **Check Aceternity UI**: Browse https://ui.aceternity.com/ for advanced animations and modern effects
3. **Use Existing Components**: Never build from scratch if a suitable component exists
4. **Extend, Don't Recreate**: Customize existing components with DineUp theme styling

#### **Shadcn/ui Components for Standard Elements:**
- `Button` - For all CTA buttons and interactive elements
- `Card` - For basic content containers
- `Input` - For search fields and form inputs
- `Badge` - For cuisine types, status indicators, and tags
- `Dialog` - For modals and authentication forms
- `Tabs` - For the dual-hero view switcher
- `Form` - For reservation and authentication forms
- `Avatar` - For user profiles and testimonials
- `Progress` - For loading states and availability indicators
- `Separator` - For section dividers
- `Toast` - For notifications and confirmations
- `Skeleton` - For loading placeholders
- `Select` - For dropdown menus and filters
- `Calendar` - For date selection in reservations

#### **Aceternity UI Components for Enhanced UX:**
- **Hero Sections** - Advanced hero components with parallax and animations
- **Spotlight Effect** - For highlighting featured restaurants
- **Floating Navbar** - For sticky navigation with glass morphism
- **3D Card Effect** - For restaurant cards with hover animations
- **Typewriter Effect** - For the dual-hero text animations
- **Infinite Moving Cards** - For testimonials and social proof
- **Background Beams** - For subtle background animations
- **Glowing Stars** - For background ambiance
- **Meteors** - For dynamic background effects
- **Grid and Dot Patterns** - For section backgrounds
- **Animated Tabs** - Enhanced version of tabs with smooth transitions
- **Timeline** - For "How it Works" customer journey
- **Feature Cards** - For platform features showcase
- **Testimonials** - Animated testimonial components
- **Pricing Cards** - For restaurant pricing display (if needed)

#### **Component Selection Strategy:**
- **Standard Functionality**: Use Shadcn/ui (forms, buttons, basic layouts)
- **Visual Enhancement**: Use Aceternity UI (animations, effects, advanced layouts)
- **Custom Styling**: Apply DineUp theme colors and effects to both libraries
- **Performance First**: Choose components that don't compromise loading speed

#### **Installation Process:**
1. **Install Shadcn components**: `npx shadcn-ui@latest add button card input badge dialog tabs form avatar progress separator toast skeleton select calendar`
2. **Browse Aceternity UI**: Visit https://ui.aceternity.com/ and copy components as needed
3. **Verify Installation**: Check components are in `/components/ui/` folder
4. **Apply Theme**: Use Tailwind classes to match DineUp styling

#### **Integration Guidelines:**
- **Aceternity components** should be placed in `/components/aceternity/` folder
- **Shadcn components** remain in `/components/ui/` folder
- **Custom components** that combine both libraries go in `/components/landing/` or relevant feature folders
- **Always apply DineUp theme** (dark gradients, blue/purple accents) to maintain consistency

#### **Recommended Aceternity Components for Manuvoo:**
- **Spotlight** - Hero section background effect
- **3D Card** - Restaurant discovery cards
- **Typewriter** - Dual-hero text animation
- **Infinite Moving Cards** - Customer testimonials
- **Animated Tabs** - Enhanced view switcher
- **Timeline** - Customer journey steps
- **Background Beams** - Section dividers and ambiance

---

## **Project Overview**

### **Technology Stack Requirements**
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS (using existing DineUp theme)
- **Authentication**: Supabase Auth integration
- **Database**: PostgreSQL (extend existing Manuvoo schema)
- **UI Components**: Shadcn/ui (customized with DineUp styling)

---

## **DESIGN SYSTEM SPECIFICATIONS**

### **Color Palette** (Based on DineUp Theme)

#### **Primary Colors**
- **Background Gradient**: 
  - Start: `#0e1420` (Very dark blue-gray)
  - End: `#121824` (Slightly lighter dark blue-gray)
- **Text Colors**:
  - Primary: `#ffffff` (Pure white)
  - Secondary: `rgba(255, 255, 255, 0.7)` (70% white opacity)
  - Tertiary: `rgba(255, 255, 255, 0.5)` (50% white opacity)

#### **Accent Colors**
- **Primary Blue Gradient**:
  - Start: `#1d4ed8` (Blue-700)
  - End: `#2563eb` (Blue-600)
  - Hover Start: `#2563eb` (Blue-600)
  - Hover End: `#3b82f6` (Blue-500)
- **Secondary Purple Gradient**:
  - Start: `#7c3aed` (Purple-700)
  - End: `#9333ea` (Purple-600)
  - Hover Start: `#9333ea` (Purple-600)
  - Hover End: `#a855f7` (Purple-500)

#### **UI Element Colors**
- **Card Background**: `rgba(255, 255, 255, 0.05)` with backdrop blur
- **Border Color**: `rgba(255, 255, 255, 0.2)` for glass effect
- **Input Background**: `rgba(255, 255, 255, 0.1)`
- **Input Border**: `rgba(255, 255, 255, 0.2)`

### **Typography System**

#### **Font Family**
- **Primary**: Inter (Google Fonts)
- **Fallback**: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

#### **Font Weights & Sizes**
- **Hero Headline**: 
  - Desktop: 56px (3.5rem), Font Weight: 800 (Extra Bold)
  - Mobile: 36px (2.25rem), Font Weight: 800
- **Section Headlines**: 
  - Desktop: 42px (2.625rem), Font Weight: 700 (Bold)
  - Mobile: 32px (2rem), Font Weight: 700
- **Subheadings**: 
  - Desktop: 24px (1.5rem), Font Weight: 600 (Semi Bold)
  - Mobile: 20px (1.25rem), Font Weight: 600
- **Body Text**: 
  - Desktop: 18px (1.125rem), Font Weight: 400 (Regular)
  - Mobile: 16px (1rem), Font Weight: 400
- **Button Text**: 16px (1rem), Font Weight: 600 (Semi Bold)
- **Small Text**: 14px (0.875rem), Font Weight: 400

### **Button Specifications**

#### **Primary Button (Consumer CTA)**
- **Background**: Blue gradient (`#1d4ed8` to `#2563eb`)
- **Text Color**: White (`#ffffff`)
- **Border**: None
- **Border Radius**: 8px
- **Padding**: 12px 24px (0.75rem 1.5rem)
- **Font Weight**: 600 (Semi Bold)
- **Shadow**: `0 4px 6px rgba(0, 0, 0, 0.1)`
- **Hover State**: 
  - Background: Blue gradient (`#2563eb` to `#3b82f6`)
  - Transform: `translateY(-2px)`
  - Shadow: `0 10px 20px rgba(0, 0, 0, 0.2)`
  - Transition: All 300ms ease

#### **Secondary Button (Restaurant CTA)**
- **Background**: Purple gradient (`#7c3aed` to `#9333ea`)
- **Text Color**: White (`#ffffff`)
- **Border**: None
- **Border Radius**: 8px
- **Padding**: 12px 24px (0.75rem 1.5rem)
- **Font Weight**: 600 (Semi Bold)
- **Shadow**: `0 4px 6px rgba(0, 0, 0, 0.1)`
- **Hover State**: 
  - Background: Purple gradient (`#9333ea` to `#a855f7`)
  - Transform: `translateY(-2px)`
  - Shadow: `0 10px 20px rgba(0, 0, 0, 0.2)`
  - Transition: All 300ms ease

#### **Outline Button (Secondary Actions)**
- **Background**: Transparent
- **Text Color**: White (`#ffffff`)
- **Border**: 2px solid `rgba(255, 255, 255, 0.3)`
- **Border Radius**: 8px
- **Padding**: 10px 22px (to account for border)
- **Font Weight**: 600 (Semi Bold)
- **Hover State**: 
  - Background: `rgba(255, 255, 255, 0.1)`
  - Border Color: `rgba(255, 255, 255, 0.6)`
  - Transition: All 300ms ease

### **Card & Component Specifications**

#### **Glass Effect Cards**
- **Background**: `rgba(255, 255, 255, 0.05)`
- **Backdrop Filter**: `blur(10px)`
- **Border**: 1px solid `rgba(255, 255, 255, 0.2)`
- **Border Radius**: 12px
- **Box Shadow**: `0 8px 32px rgba(0, 0, 0, 0.3)`
- **Hover State**: 
  - Transform: `scale(1.02)`
  - Shadow: `0 12px 48px rgba(0, 0, 0, 0.4)`
  - Transition: All 300ms ease

#### **Restaurant Cards**
- **Background**: Glass effect (as above)
- **Padding**: 20px (1.25rem)
- **Image Border Radius**: 8px
- **Hover Animation**: Lift effect with enhanced shadow

#### **Navigation Tabs (View Switcher)**
- **Container**: Glass effect background with 4px padding
- **Border Radius**: 12px
- **Active Tab**: 
  - Background: Blue gradient (matching primary button)
  - Text Color: White
  - Border Radius: 8px
- **Inactive Tab**: 
  - Background: Transparent
  - Text Color: `rgba(255, 255, 255, 0.7)`
  - Hover: `rgba(255, 255, 255, 0.1)` background

---

## **LAYOUT & SPACING SYSTEM**

### **Container Specifications**
- **Max Width**: 1200px
- **Horizontal Padding**: 20px (mobile), 40px (tablet), 80px (desktop)
- **Section Spacing**: 80px (mobile), 120px (desktop)

### **Grid System**
- **Hero Section**: 2-column grid (1 column on mobile)
- **Feature Sections**: 3-column grid (1 column on mobile, 2 on tablet)
- **Restaurant Cards**: 3-column grid (1 column on mobile, 2 on tablet)

### **Spacing Scale**
- **4px**: `0.25rem` - Fine details
- **8px**: `0.5rem` - Small gaps
- **16px**: `1rem` - Standard spacing
- **24px**: `1.5rem` - Medium spacing
- **32px**: `2rem` - Large spacing
- **48px**: `3rem` - Section spacing
- **64px**: `4rem` - Major section spacing

---

## **CONTENT STRATEGY & TIMING**

---

## **CONTENT STRATEGY & MESSAGING**

### **Brand Story & Value Proposition**

#### **Why Manuvoo Exists**
Manuvoo was created to solve the biggest operational challenges in South Africa's hospitality industry. We witnessed restaurants losing money to theft, struggling with manual processes, and paying for multiple expensive systems that don't talk to each other. Meanwhile, diners struggled to discover great restaurants and often faced long waits for tables.

Our mission is simple: transform restaurant operations while creating unforgettable dining experiences for customers.

#### **Core Problems We Solve**

**For Restaurants:**
- **Stop Revenue Loss**: Eliminate theft through digital accountability and real-time tracking
- **End Manual Chaos**: Automate inventory, orders, and payments to reduce human error by 80%
- **Cut Operational Costs**: Replace 7+ expensive systems with one comprehensive platform
- **Fill Empty Tables**: Get discovered by thousands of potential customers actively looking for restaurants
- **Increase Efficiency**: Reduce service time by 35% through streamlined digital processes

**For Diners:**
- **Discover Hidden Gems**: Find amazing restaurants before they become overcrowded
- **No More Waiting**: Book tables instantly and see real-time availability
- **Know Before You Go**: Preview menus and read authentic reviews
- **Seamless Experience**: From discovery to payment, everything just works

#### **What Makes Manuvoo Different**
- **Only True Vertical Integration**: Complete restaurant solution, not just point-of-sale
- **Customer Discovery Built-In**: Restaurants get new customers, not just management tools
- **Fair Pricing**: Small transaction fee instead of expensive monthly subscriptions
- **South African Focus**: Built for local restaurants, understanding unique challenges
- **Proven Results**: 35% average increase in revenue for partner restaurants

### **Hero Section Content**

#### **Customer View Content**
- **Badge**: "🍽️ For Food Lovers"
- **Headline**: "Discover & Book South Africa's Best Restaurants"
- **Subtext**: "From hidden gems to favorite spots - find your perfect dining experience with instant table reservations. No more waiting, no more disappointment."
- **Primary CTA**: "Find Restaurants Near Me"
- **Secondary CTA**: "How It Works"
- **Stats**: 
  - "500+ Partner Restaurants"
  - "50K+ Happy Diners" 
  - "15+ Major Cities"

#### **Restaurant View Content**
- **Badge**: "📈 For Restaurant Owners"
- **Headline**: "Get Discovered by More Customers"
- **Subtext**: "Join 500+ restaurants growing their business through our discovery platform. Complete restaurant management system included - pay only when you succeed."
- **Primary CTA**: "Grow My Restaurant"
- **Secondary CTA**: "Watch Demo"
- **Stats**: 
  - "35% Average Revenue Increase"
  - "Same-Day Setup"
  - "Zero Monthly Fees"

### **Section Content Breakdown**

#### **"How It Works" - Customer Journey**
**Section Headline**: "Book Your Perfect Table in 3 Simple Steps"

**Step 1: Discover**
- **Icon**: Search/Map pin
- **Title**: "Find Amazing Restaurants"
- **Description**: "Search by location, cuisine, or mood. Discover hidden gems and local favorites with real reviews from verified diners."

**Step 2: Explore**
- **Icon**: Menu/Eye
- **Title**: "Preview & Choose"
- **Description**: "See real menus, photo galleries, and authentic reviews. Check real-time availability and choose your perfect time slot."

**Step 3: Book**
- **Icon**: Calendar/Checkmark
- **Title**: "Instant Confirmation"
- **Description**: "Secure your table instantly. Get confirmation via SMS and email. Arrive and enjoy - everything's ready for you."

#### **"Why Restaurants Choose Manuvoo" - Restaurant Value**
**Section Headline**: "More Than Just Bookings - Complete Restaurant Success"

**Benefit 1: Customer Discovery**
- **Icon**: Users/Growth
- **Title**: "Get Found by More Customers"
- **Description**: "Thousands of diners search our platform daily. Featured listings put your restaurant in front of hungry customers actively looking for their next meal."
- **Proof Point**: "Average 40% increase in new customer visits"

**Benefit 2: Operational Excellence**
- **Icon**: Settings/Efficiency
- **Title**: "Complete Restaurant Management"
- **Description**: "Full POS system, inventory tracking, staff management, and financial analytics. Everything you need to run a modern restaurant efficiently."
- **Proof Point**: "Replace 7+ systems with one platform"

**Benefit 3: Revenue Growth**
- **Icon**: TrendingUp/DollarSign
- **Title**: "Proven Revenue Increase"
- **Description**: "Our partners see average 35% revenue growth through better efficiency, reduced theft, and more customers. Pay only when you succeed."
- **Proof Point**: "Only 1% transaction fee - no monthly charges"

#### **Platform Features Comparison**

**For Customers**:
- **Restaurant Discovery**: Smart search with filters for cuisine, location, and price
- **Real-Time Availability**: See exact table availability and book instantly
- **Menu Previews**: Browse full menus with photos before you visit
- **Verified Reviews**: Read authentic reviews from confirmed diners
- **Instant Booking**: Secure tables with immediate confirmation
- **Reservation Management**: Easy cancellation and modification

**For Restaurants**:
- **Complete POS System**: Full point-of-sale with inventory integration
- **Table Management**: Real-time table status and reservation handling
- **Customer Discovery**: Featured listings on our discovery platform
- **Inventory Tracking**: Automated stock management with theft prevention
- **Staff Management**: Scheduling, performance tracking, and payroll
- **Financial Analytics**: Real-time reporting and profit optimization
- **QR Code Ordering**: Contactless menu and payment processing
- **Marketing Tools**: Customer retention and promotional campaigns

### **Social Proof Content**

#### **Customer Testimonials**
- **Sarah M., Cape Town**: "Found the most amazing hidden gem through Manuvoo! The booking was instant and the restaurant knew we were coming. Perfect evening!"
- **David K., Johannesburg**: "No more calling restaurants and waiting on hold. I can see availability and book instantly. Game changer for date nights."
- **Lisa P., Durban**: "Love discovering new places through the app. The reviews are always accurate because they're from real diners."

#### **Restaurant Success Stories**
- **The Local Bistro, Stellenbosch**: "Since joining Manuvoo, we've seen 45% more new customers. The platform pays for itself and the management tools are incredible."
- **Spice Route, Cape Town**: "Finally replaced our expensive POS system. Manuvoo costs a fraction and does everything better. Our staff loves it."
- **Ocean View Restaurant, Durban**: "The discovery feature brings us customers we never would have reached. Best investment we've made."

### **About Manuvoo Section**

#### **Our Story**
"Born from the frustration of South African restaurant owners struggling with outdated, expensive systems, Manuvoo represents a new generation of hospitality technology. We believe great restaurants deserve great technology - without the great expense.

Founded by restaurant industry veterans who understood the daily challenges firsthand, we built Manuvoo to solve real problems with practical solutions. Every feature exists because a restaurant owner asked for it. Every improvement comes from listening to both diners and restaurant staff.

Today, we're proud to support over 500 restaurants across South Africa, helping them thrive in an increasingly digital world while connecting food lovers with their next favorite meal."

#### **Our Mission**
"To empower every restaurant with world-class technology while creating unforgettable dining experiences for every customer."

#### **Our Values**
- **Customer Success First**: We succeed only when our restaurants and diners succeed
- **Fairness**: Transparent pricing with no hidden fees or surprise charges
- **Innovation**: Constantly improving based on real user feedback
- **Local Focus**: Built for South African restaurants by people who understand the market
- **Reliability**: Your business depends on us - we take that responsibility seriously

### **Frequently Asked Questions**

#### **For Customers**
- **Q**: Is booking through Manuvoo free?
- **A**: Yes! Discovering and booking restaurants is completely free for diners.

- **Q**: Can I modify or cancel my reservation?
- **A**: Absolutely. You can modify or cancel through the app or by calling the restaurant directly.

- **Q**: How do I know if a restaurant is good?
- **A**: All reviews are from verified diners who actually visited the restaurant. No fake reviews.

#### **For Restaurants**
- **Q**: How much does Manuvoo cost?
- **A**: No monthly fees! We charge only a small 1% transaction fee when customers pay through our system.

- **Q**: How quickly can we get started?
- **A**: Most restaurants are live on the same day. Our team handles the entire setup process.

- **Q**: Do we need new hardware?
- **A**: Manuvoo works on any tablet or smartphone. No expensive terminals required.

### **Call-to-Action Content**

#### **Final Dual CTA Section**
**Overall Headline**: "Ready to Transform Your Dining Experience?"

**Customer Side**:
- **Headline**: "Start Discovering Amazing Restaurants"
- **Subtext**: "Join thousands of food lovers finding their next favorite meal"
- **Primary CTA**: "Explore Restaurants"
- **Secondary CTA**: "Download App"

**Restaurant Side**:
- **Headline**: "Grow Your Restaurant Business"
- **Subtext**: "Join successful restaurants already thriving with Manuvoo"
- **Primary CTA**: "Book a Demo"
- **Secondary CTA**: "Learn More"

---
- **Reading Time Per View**: 5 seconds (based on average reading speed)
- **Transition Duration**: 1 second
- **Total Interval**: 8 seconds per view
- **Pause on Hover**: Yes
- **Manual Override**: Available via tab buttons

### **Dual-Hero Auto-Rotation Settings**

### **Content Structure & Technical Settings**

---

## **VISUAL MOCKUP SPECIFICATIONS**

### **Device Mockup Requirements**
Using placeholder images from CDN (Unsplash) with device frames:

#### **Customer View Mockups**
- **Laptop Display**: Restaurant discovery interface (1440x900px)
  - Show restaurant grid layout
  - Search filters visible
  - Modern, clean interface
- **Mobile Display**: Mobile app interface (375x667px)
  - Restaurant listing view
  - Touch-friendly design
  - Floating as secondary element

#### **Restaurant View Mockups**
- **Laptop Display**: Restaurant dashboard interface (1440x900px)
  - Analytics dashboard
  - Order management
  - Professional admin interface
- **Mobile Display**: Kitchen/staff app (375x667px)
  - Order processing interface
  - Real-time updates
  - Staff-focused design

#### **Mockup Styling**
- **Device Frames**: Dark gray (`#374151`)
- **Screen Bezels**: Realistic with proper proportions
- **Hover Effects**: 
  - Laptop: Rotate from -5° to 0° on hover
  - Mobile: Rotate from -12° to 0° on hover
- **Shadows**: Deep, realistic shadows to create depth

---

## **ANIMATION & INTERACTION SPECIFICATIONS**

### **Typewriter Effect for Headlines**
- **Character Speed**: 50ms per character
- **Cursor Blink**: 500ms interval
- **Trigger**: On view change (auto or manual)
- **Completion**: Hold for 3 seconds before next rotation

### **Card Hover Animations**
- **Scale**: 1.02x on hover
- **Shadow Enhancement**: Increase blur and offset
- **Duration**: 300ms
- **Easing**: Cubic-bezier(0.4, 0, 0.2, 1)

### **Button Interactions**
- **Hover**: 2px upward translate + shadow enhancement
- **Active**: 1px downward translate
- **Focus**: Outline ring with brand color
- **Loading**: Spinner inside button with disabled state

### **Background Elements**
- **Gradient Orbs**: Subtle floating animation
- **Parallax**: Minimal effect on scroll (1.2x speed difference)
- **Fade Transitions**: 300ms ease for all state changes

---

## **SOUTH AFRICAN LOCALIZATION ELEMENTS**

### **Geographic Elements**
- **Major Cities**: Johannesburg, Cape Town, Durban, Pretoria, Port Elizabeth
- **Cuisine Types**: South African, Braai & Grill, Cape Malay, Indian, Portuguese
- **Currency**: South African Rand (R) symbol and formatting
- **Time Zone**: SAST (GMT+2) for operational hours

### **Cultural Considerations**
- **Price Ranges**: 
  - Budget: "Under R150 per person"
  - Mid-range: "R150 - R300 per person"
  - Fine dining: "R300+ per person"
- **Local Language**: English primary, accommodate local terms
- **Operating Hours**: Standard SA restaurant hours (7 AM - 11 PM)

---

## **PAGE STRUCTURE & NAVIGATION**

### **Header Navigation**
- **Logo**: Manuvoo brand mark (left)
- **Navigation Links**: How It Works, For Restaurants, About
- **Auth Buttons**: Login (outline), Sign Up (primary blue)
- **Sticky Behavior**: Glass effect background on scroll

### **Main Sections Order**
1. **Dual-Hero Section** (Full viewport height)
2. **Customer Journey** (How it works for diners)
3. **Restaurant Value Proposition** (Why restaurants join)
4. **Platform Features Grid** (Split comparison)
5. **Social Proof** (Testimonials + featured restaurants)
6. **Final Dual CTA** (Both audience paths)
7. **Footer** (Links, contact, legal)

### **Footer Specifications**
- **Background**: Darker gradient (`#0a0f1a` to `#0e1420`)
- **Content**: Three columns (Company, Product, Support)
- **Social Links**: Subtle icons with hover states
- **Legal**: Privacy, Terms, POPIA compliance

---

## **RESPONSIVE DESIGN BREAKPOINTS**

### **Mobile** (320px - 768px)
- **Hero**: Single column, larger text sizing
- **Cards**: Single column grid
- **Buttons**: Full width on mobile
- **Navigation**: Hamburger menu

### **Tablet** (768px - 1024px)
- **Hero**: Two column maintained
- **Cards**: Two column grid
- **Reduced spacing**: 80% of desktop values

### **Desktop** (1024px+)
- **Full Layout**: All specifications as above
- **Max Width**: 1200px container
- **Hover States**: All interactive elements

---

## **AUTHENTICATION FLOW DESIGN**

### **Login/Signup Modals**
- **Background**: Glass effect card
- **Size**: 400px width, auto height
- **Form Fields**: 
  - Background: `rgba(255, 255, 255, 0.1)`
  - Border: `rgba(255, 255, 255, 0.2)`
  - Focus: Blue accent border
- **Submit Button**: Primary blue gradient
- **Links**: Blue accent color (`#3b82f6`)

### **Protected Route States**
- **Loading**: Spinner with brand colors
- **Unauthenticated**: Redirect to login with return URL
- **Success**: Toast notification with green accent

---

## **RESTAURANT DISCOVERY INTERFACE**

### **Search Filters Design**
- **Container**: Horizontal glass effect bar
- **Filter Buttons**: Chip-style with active states
- **Dropdown Menus**: Glass effect with proper shadows
- **Clear All**: Text link with hover underline

### **Restaurant Card Layout**
- **Image**: 280x200px with 8px border radius
- **Content Padding**: 20px all sides
- **Rating Display**: Stars with numeric (4.5/5)
- **Cuisine Badge**: Small pill with accent background
- **Price Range**: R symbols with explanation on hover

### **Restaurant Detail Page**
- **Hero Image**: Full width, 400px height
- **Info Sidebar**: Sticky positioning
- **Menu Preview**: Grid layout, no prices shown
- **Reviews Section**: Card-based layout with user avatars

---

## **RESERVATION SYSTEM DESIGN**

### **Time Slot Selection**
- **Layout**: Grid of time chips
- **Available Slots**: Green accent background
- **Unavailable**: Disabled gray state
- **Selected**: Blue accent background
- **Hover**: Scale effect on available slots

### **Booking Form**
- **Layout**: Two-column on desktop
- **Required Fields**: Visual asterisk indicators
- **Date Picker**: Custom styled calendar
- **Party Size**: Dropdown with icons
- **Special Requests**: Text area with character limit

### **Confirmation State**
- **Success Modal**: Green accent with checkmark
- **Confirmation Code**: Large, copyable text
- **Details Summary**: Clean list format
- **Actions**: Calendar add, share buttons

---

## **IMPLEMENTATION PHASES**

### **Phase 1: Foundation Setup**
- Set up Next.js project structure
- Configure Tailwind with DineUp theme
- Implement design system components
- Create basic routing structure

### **Phase 2: Core Landing Page**
- Build dual-hero section with auto-rotation
- Implement customer journey section
- Create restaurant value proposition
- Add platform features grid

### **Phase 3: Discovery Features**
- Build restaurant search interface
- Implement filtering system
- Create restaurant cards and grid
- Add restaurant detail pages

### **Phase 4: Reservation System**
- Build time slot selection
- Implement booking form
- Add confirmation flow
- Create user dashboard

### **Phase 5: Authentication & Polish**
- Implement auth flows
- Add loading states and animations
- Optimize for mobile
- Final testing and deployment

---

## **ACCESSIBILITY REQUIREMENTS**

### **Color Contrast**
- **Text on Background**: Minimum 4.5:1 ratio
- **Button Text**: Minimum 4.5:1 ratio
- **Interactive Elements**: Clear focus indicators

### **Keyboard Navigation**
- **Tab Order**: Logical flow through page
- **Focus States**: Visible ring indicators
- **Skip Links**: Jump to main content

### **Screen Reader Support**
- **Alt Text**: All images and icons
- **ARIA Labels**: Interactive elements
- **Semantic HTML**: Proper heading hierarchy

---

## **PERFORMANCE TARGETS**

### **Loading Metrics**
- **First Contentful Paint**: < 1.5 seconds
- **Largest Contentful Paint**: < 2.5 seconds
- **Time to Interactive**: < 3.5 seconds
- **Cumulative Layout Shift**: < 0.1

### **Optimization Strategies**
- **Image Optimization**: WebP format, lazy loading
- **Code Splitting**: Route-based chunks
- **Caching**: Static assets and API responses
- **CDN**: Global content delivery

---

This design specification provides comprehensive guidance for implementing the Manuvoo landing page while maintaining consistency with your existing DineUp theme and ensuring a professional, conversion-focused user experience.