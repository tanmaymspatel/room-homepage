import imgSlider1 from '../assets/images/desktop-image-hero-1.jpg'
import mobileImgSlider1 from '../assets/images/mobile-image-hero-1.jpg'
import shopArrow from '../assets/images/icon-arrow.svg'

function Slide1() {
    return (
        <div className="row g-0 h-100">
            <div className="col-lg-7">
                <img src={imgSlider1} alt="hero-1" className='w-100 h-100 d-none d-sm-block' />
                <img src={mobileImgSlider1} alt="hero-1" className='w-100 h-100 d-sm-none' />
            </div>
            <div className="col-lg-5">
                <div className='hero-content d-flex flex-column justify-content-center'>
                    <h1 className='hero-heading'>Discover innovative ways to decorate</h1>
                    <p className='text-primary hero-text'>We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.</p>
                    <p className='pt-3 cursor-pointer mb-0'>
                        <span className='text-uppercase me-3 shop-text transition'>shop now</span>
                        <img className='shop-arrow' src={shopArrow} alt="shop-now" />
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Slide1;
