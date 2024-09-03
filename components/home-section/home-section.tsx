
import BestFoodMenu from "../best-food-menu/best-food-menu";
import BestFoodSection from "../best-food-section/best-food-section";
import Navbar from "../common/navbar";
import DiscoverArtSection from "../discover-art-section/discover-art-section";
import OurServiceSection from "../our-service-section/our-service-section";
import HeroSection from "./hero-section";

export default function HomeSection(){
    return (
        <div>
           <div>
                <Navbar/>
                <HeroSection />
                <OurServiceSection/>
                <BestFoodSection/>
                <BestFoodMenu/>
                <DiscoverArtSection/>
           </div>
        </div>
    )
}