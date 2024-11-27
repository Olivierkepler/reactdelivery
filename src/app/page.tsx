
import Services from './services/Services';
import Hero from "./components/Hero";
import Testimonials from './components/Testimonials';
import Features from './components/Features';


export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
    <Hero/>

      <Services />
      <Features/>
      <Testimonials/>
    
    

    </div>
  );
}
