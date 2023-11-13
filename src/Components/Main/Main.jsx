import React from "react";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import NavigationButtons from "../NavigationButtons/NavigationButtons";
import ProductSection from "../ProductSection/ProductSection";
import Footer from "../Footer/Footer";

const Main = () => {
    return (
        <>
            <Navbar />
            <Slider />
            <NavigationButtons />
            <ProductSection />
            <Footer />
        </>
    )
}

export default Main