import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import RSVP from "@/components/RSVP";
import Gifts from "@/components/Gifts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <Promo />
      <Gifts />
      <RSVP />
      <Footer />
    </main>
  );
};

export default Index;