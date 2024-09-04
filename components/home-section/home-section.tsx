
import BestFoodMenu from "../best-food-menu/best-food-menu";
import BestFoodSection from "../best-food-section/best-food-section";
import Navbar from "../common/navbar";
import DiscoverArtSection from "../discover-art-section/discover-art-section";
import FutterSection from "../futter-section/futter-section";
import GetUpdateSecton from "../get-update-section/get-update-secton";
import OurServiceSection from "../our-service-section/our-service-section";
import WhatCustomerSection from "../what-customer-section/what-customer-section";
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
                < WhatCustomerSection/>
                <GetUpdateSecton/>
                <FutterSection/>
           </div>
        </div>
    )
}