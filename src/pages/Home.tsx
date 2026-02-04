import { SEO } from '@/components/SEO';
import { seoConfig, organizationSchema } from '@/config/seo';
import { Hero } from '@/sections/Hero';
import { PlatformPreview } from '@/sections/PlatformPreview';
import { Benefits } from '@/sections/Benefits';
import { ProductSuite } from '@/sections/ProductSuite';
import { Architecture } from '@/sections/Architecture';
import { HowItWorks } from '@/sections/HowItWorks';
import { Industries } from '@/sections/Industries';
import { Testimonials } from '@/sections/Testimonials';
import { Newsletter } from '@/sections/Newsletter';
import { CTA } from '@/sections/CTA';

export function Home() {
  return (
    <>
      <SEO config={seoConfig.home} structuredData={organizationSchema} />
      <Hero />
      <PlatformPreview />
      <Benefits />
      <ProductSuite />
      <Architecture />
      <HowItWorks />
      <Industries />
      <Testimonials />
      <Newsletter />
      <CTA />
    </>
  );
}
