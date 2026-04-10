import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import USP from '@/components/USP';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';
import AIConcierge from '@/components/AIConcierge';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <USP />
      <BookingForm />
      <Footer />
      <AIConcierge />
    </main>
  );
}
