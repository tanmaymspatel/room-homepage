// interface for the carousel context
export interface ICarouselContext {
    slideNo: number;
    prev: () => void,
    next: () => void
}