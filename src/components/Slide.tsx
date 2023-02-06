import { SliderData } from "./Slider";
import shopArrow from '../assets/images/icon-arrow.svg'
interface ISlideProps {
    i: number
};
/**
 * @returns Slide according to slide number
 */
function Slide({ i }: ISlideProps) {

    return (
        <div className="row g-0 h-100">
            <div className="col-lg-7">
                <img src={SliderData[i].img} alt="slider" className='w-100 h-100 d-none d-sm-block' />
                <img src={SliderData[i].mobileImg} alt="hero-2" className='w-100 h-100 d-sm-none' />
            </div>
            <div className="col-lg-5">
                <div className='hero-content h-100 d-flex flex-column justify-content-center'>
                    <h1 className='hero-heading'>{SliderData[i].heading}</h1>
                    <p className='text-primary hero-text'>{SliderData[i].sliderText}</p>
                    <p className='pt-3 cursor-pointer mb-0'>
                        <span className='text-uppercase me-3 shop-text transition'>shop now</span>
                        <img className='shop-arrow' src={shopArrow} alt="shop-now" />
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Slide;
