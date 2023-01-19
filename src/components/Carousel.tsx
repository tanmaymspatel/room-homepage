import { useContext } from "react";
import { CarouselContext } from "../context/carouselContext";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";

function Carousel() {
    const { prev, next, slideNo } = useContext(CarouselContext);

    const randerSlide = (slideNo: number) => {
        switch (slideNo) {
            case 1:
                return <Slide1 />;
            case 2:
                return < Slide2 />;
            case 3:
                return <Slide3 />;
            default:
                return;
        }
    }

    return (
        <>
            {randerSlide(slideNo)}
            <div className="position-absolute bottom-0 btn-arrows">
                <button className="btn btn-primary" onClick={prev}>prev</button>
                <button className="btn btn-primary" onClick={next}>next</button>
            </div>
        </>
    )
};

export default Carousel;
