import { useContext } from "react";

import { CarouselContext } from "../context/carouselContext";
import leftArrow from "../assets/images/icon-angle-left.svg"
import rightArrow from "../assets/images/icon-angle-right.svg"
import Header from "./Header";
import Slide from "./Slide";
/**
 * @returns carousel for the page 
 */
function Carousel() {
    // consumption of the carousel context
    const { prev, next, slideNo } = useContext(CarouselContext);
    /**
     * @name randerSlide
     * @param slideNo no of slide 
     * @returns slider for respective slide number
     */
    const randerSlide = (slideNo: number) => {
        switch (slideNo) {
            case 1:
                return <Slide i={0} />;
            case 2:
                return <Slide i={1} />;
            case 3:
                return <Slide i={2} />;
            default:
                return;
        };
    };

    return (
        <>
            {randerSlide(slideNo)}
            <Header />
            <div className="d-flex position-absolute arrows-container">
                <p className=" mb-0 slider-btn cursor-pointer transition" onClick={prev}>
                    <img src={leftArrow} alt="left-arrow" />
                </p>
                <p className="mb-0 slider-btn cursor-pointer transition" onClick={next}>
                    <img src={rightArrow} alt="right-arrow" />
                </p>
            </div>
        </>
    )
};

export default Carousel;
