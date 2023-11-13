import React from "react";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import NavigationButtons from "../NavigationButtons/NavigationButtons";
import ProductSection from "../ProductSection/ProductSection";

const Main = () => {
    return (
        <>
            <Navbar />
            <Slider />
            <NavigationButtons />
            <ProductSection/>
        </>
    )
}

export default Main