import { useContext } from "react";
import { CarouselContext } from "../context/carouselContext";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import leftArrow from "../assets/images/icon-angle-left.svg"
import rightArrow from "../assets/images/icon-angle-right.svg"

function Carousel() {
    const { prev, next, slideNo } = useContext(CarouselContext);

    const randerSlide = (slideNo: number) => {
        switch (slideNo) {
            case 1:
                return <Slide1 />;
            case 2:
                return <Slide2 />;
            case 3:
                return <Slide3 />;
            default:
                return;
        }
    }

    return (
        <>
            {randerSlide(slideNo)}
            <div className="d-flex position-absolute bottom-0 arrows-container">
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
