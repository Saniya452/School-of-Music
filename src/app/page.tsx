import FeaturesSection from "./components/FeaturesSection";
// import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Instructors from "./components/Instructors";
import MusicSchoolTestimonials from "./components/TestimonialCards";
import UpcomingWebinars from "./components/UpcomingWebinars";
// import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <HeroSection/>
    <FeaturesSection/>
    {/* <WhyChooseUs/> */}
    <MusicSchoolTestimonials/>
    <UpcomingWebinars/>
    <Instructors/> 
    {/* <Footer/> */}
    </main>
  )
};
