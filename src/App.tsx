import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/hooks/useTheme";
import { Navbar } from "@/components/Navbar";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { CookieConsent } from "@/components/CookieConsent";
import { Toaster } from "@/components/ui/sonner";
import { Footer } from "@/sections/Footer";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Services } from "@/pages/Services";
import { Features } from "@/pages/Features";
import { Pricing } from "@/pages/Pricing";
import { RoadmapPage } from "@/pages/Roadmap";
import { Contact } from "@/pages/Contact";
import { IntellectualProperty } from "@/pages/IntellectualProperty";
import { Terms } from "@/pages/Terms";
import { PrivacyPolicy } from "@/pages/PrivacyPolicy";
import { RefundPolicy } from "@/pages/RefundPolicy";
import { CancellationPolicy } from "@/pages/CancellationPolicy";
import { DeliveryPolicy } from "@/pages/DeliveryPolicy";

// Scroll to top on route change, or to the #anchor when the link has one
// (e.g. /privacy-policy#cookie-policy)
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Wait a tick so the new page (and any redirect) has settled before
    // measuring the anchor.
    const timer = setTimeout(() => {
      const target = hash ? document.getElementById(hash.slice(1)) : null;
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}

function AppContent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgressBar />
      <Navbar />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/contact" element={<Contact />} />
          {/* The Cookie Policy now lives inside the Privacy Policy page */}
          <Route
            path="/cookie-policy"
            element={<Navigate to="/privacy-policy#cookie-policy" replace />}
          />
          <Route
            path="/intellectual-property"
            element={<IntellectualProperty />}
          />

          {/* Legal & e-commerce policy pages (Visa / MasterCard requirements) */}
          <Route path="/terms" element={<Terms />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/return-policy" element={<RefundPolicy />} />
          <Route path="/cancellation-policy" element={<CancellationPolicy />} />
          <Route path="/delivery-policy" element={<DeliveryPolicy />} />
          <Route path="/shipping-policy" element={<DeliveryPolicy />} />
        </Routes>
      </main>
      <Footer />
      <CookieConsent />
      <Toaster />
    </div>
  );
}

function AppRouter() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
