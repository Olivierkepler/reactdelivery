
import Services from './services/Services';
import Hero from "./components/Hero";
import Testimonials from './components/Testimonials';
import Features from './components/Features';
import FAQ from './components/FAQ';
import DeliveryForm from './components/DeliveryForm';


export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
    <Hero/>
<DeliveryForm/>
      <Services />
      <Features/>
      <Testimonials/>
      <FAQ />
    
    

    </div>
  );
}
