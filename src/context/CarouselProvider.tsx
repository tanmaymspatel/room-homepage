import React, { useState } from "react";
import { CarouselContext } from "./carouselContext";

interface ICarouselProvider {
    children: React.ReactNode
}
/**
 * @returns component for providing context values
 */
function CarouselProvider({ children }: ICarouselProvider) {
    // state for slide value
    const [slideNo, setSlideNo] = useState(1);
    /**
     * @name prev
     * @description to go to previous slide
     */
    const prev = () => {
        setSlideNo(prev => prev <= 1 ? 3 : prev - 1);
    }
    /**
     * @name next
     * @description to go to next slide
     */
    const next = () => {
        setSlideNo(prev => prev >= 3 ? 1 : prev + 1)
    }
    // values to be provided by the context
    const ctx = {
        slideNo,
        prev,
        next
    }
    return (
        <CarouselContext.Provider value={ctx}>
            {children}
        </CarouselContext.Provider>
    )
};

export default CarouselProvider;
