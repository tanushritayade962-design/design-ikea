import React from "react";

import Navbar from "./components/Navbar";
import PreLoader from "./components/PreLoader";
import HeroSection from "./sections/HeroSection";
import MessageSection from "./sections/MessageSection";
import FlavorSection from "./sections/FlavorSection";
import NutritionSection from "./sections/NutritionSection";
import BenifitSection from "./sections/BenifitSection";
import TestimonialSection from "./sections/TestimonialSection";
import BottomBanner from "./sections/BottomBanner";
import FooterSection from "./sections/FooterSection";

const IKEAINDIALandingPage: React.FC = () => {
    return (
        <main className="relative min-h-screen w-full bg-surface-muted overflow-x-hidden">
            <PreLoader />
            <Navbar />
            <HeroSection />
            <MessageSection />
            <FlavorSection />
            <NutritionSection />
            <BenifitSection />
            <TestimonialSection />
            <BottomBanner />
            <FooterSection />
        </main>
    );
};

const App: React.FC = () => {
    return <IKEAINDIALandingPage />;
};

export default App;