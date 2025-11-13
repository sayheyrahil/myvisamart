'use client';

import  Header from '@/components/layouts/header';
import Footer from '@/components/layouts/footer';
import Categories from '@/components/common/home/categories';
import HeroSection from '@/components/common/home/HeroSection';
import HowItWorks from '@/components/common/home/HowItWorks';
import PopularDestinations from '@/components/common/home/PopularDestinations';
import TopDestinations from '@/components/common/home/TopDestinations';
import WhyVisamart from '@/components/common/home/WhyVisamart';
import NewsletterSection from '@/components/common/home/NewsletterSection';

 

export default function Home() {
 

  return (
    
     <div className="min-h-screen bg-[#F6FBFF] ">
      <Header />
      <HeroSection  />
      <Categories />
      <HowItWorks />
      <PopularDestinations />
      <TopDestinations />
      <WhyVisamart />
      <NewsletterSection />
      <Footer />
     
    </div>
  );
}
