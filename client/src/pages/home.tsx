import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProfessionalsSection from "@/components/ProfessionalsSection";
import GallerySection from "@/components/GallerySection";
import BookingSection from "@/components/BookingSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data: services } = useQuery({
    queryKey: ["/api/services"],
  });

  useEffect(() => {
    // Set up smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchorElement = target.closest('a');
      
      if (anchorElement && anchorElement.hash && anchorElement.hash.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(anchorElement.hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          // Update URL without scrolling
          window.history.pushState(null, '', anchorElement.hash);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-secondary">
      <Header />
      <HeroSection />
      <ServicesSection services={services || []} />
      <ProfessionalsSection />
      <GallerySection />
      <BookingSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
