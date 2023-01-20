import { Dispatch, SetStateAction } from "react";

export interface ICarouselContext {
    slideNo: number;
    prev: () => void,
    next: () => void
}