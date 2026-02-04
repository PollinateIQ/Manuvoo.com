import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@/hooks/useTheme';
import { Navbar } from '@/components/Navbar';
import { SplashScreen } from '@/components/SplashScreen';
import { CookieConsent } from '@/components/CookieConsent';
import { Toaster } from '@/components/ui/sonner';
import { Footer } from '@/sections/Footer';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Services } from '@/pages/Services';
import { Features } from '@/pages/Features';
import { Pricing } from '@/pages/Pricing';
import { RoadmapPage } from '@/pages/Roadmap';
import { Contact } from '@/pages/Contact';
import { CookiePolicy } from '@/pages/CookiePolicy';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  
  return null;
}

function AppContent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
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
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
      </main>
      <Footer />
      <CookieConsent />
      <Toaster />
    </div>
  );
}

function AppWithSplash() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <AppWithSplash />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
