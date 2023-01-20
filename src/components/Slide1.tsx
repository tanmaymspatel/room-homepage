import imgSlider1 from '../assets/images/desktop-image-hero-1.jpg'
import shopArrow from '../assets/images/icon-arrow.svg'

function Slide1() {
    return (
        <div className="row g-0 h-100">
            <div className="col-sm-7">
                <img src={imgSlider1} alt="hero-1" className='w-100 h-auto' />
                {/* <figure className="mb-0 w-100 h-100">
                </figure> */}
            </div>
            <div className="col-sm-5">
                <div className='hero-content h-100 d-flex flex-column justify-content-center'>
                    <h1 className='hero-heading'>Discover innovative ways to decorate</h1>
                    <p className='text-primary'>We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.</p>
                    <p className='cursor-pointer'>
                        <span className='text-uppercase me-3 shop-text transition'>shop now</span>
                        <img className='shop-arrow' src={shopArrow} alt="shop-now" />
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Slide1;
