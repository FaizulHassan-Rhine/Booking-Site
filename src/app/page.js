import HeroSection from "../components/HeroSection";
import ExclusiveOffers from "../components/ExclusiveOffers";
import ExploreBangladesh from "../components/ExploreBangladesh";
import AirlinesSection from "../components/AirlinesSection";
import PopularDestinations from "../components/PopularDestinations";
import BestHotels from "../components/BestHotels";
import TourPackages from "../components/TourPackages";
import BusinessPartnership from "../components/BusinessPartnership";
import TopRoutes from "../components/TopRoutes";
import MobileApp from "../components/MobileApp";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ExclusiveOffers />
      <ExploreBangladesh />
      <AirlinesSection />
      <PopularDestinations />
      <BestHotels />
      <TourPackages />
      <BusinessPartnership />
      <TopRoutes />
      <MobileApp />
    </div>
  );
}
