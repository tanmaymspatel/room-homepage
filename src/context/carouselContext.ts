import { createContext } from "react";
import { ICarouselContext } from "./intefaces";

export const CarouselContext = createContext<ICarouselContext>({
    slideNo: 1,
    prev: () => { },
    next: () => { }
})