import { createContext } from "react";
import { ICarouselContext } from "./intefaces";
// carousel context initial values
export const CarouselContext = createContext<ICarouselContext>({
    slideNo: 1,
    prev: () => { },
    next: () => { }
})