import React, { useState } from "react";
import { CarouselContext } from "./carouselContext";

interface ICarouselProvider {
    children: React.ReactNode
}

function CarouselProvider({ children }: ICarouselProvider) {

    const [slideNo, setSlideNo] = useState(1);

    const prev = () => {
        setSlideNo(prev => prev <= 1 ? 3 : prev - 1);
    }
    const next = () => {
        setSlideNo(prev => prev >= 3 ? 1 : prev + 1)
    }

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
