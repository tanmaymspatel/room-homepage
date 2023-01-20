import imgSlider2 from '../assets/images/desktop-image-hero-2.jpg'
import shopArrow from '../assets/images/icon-arrow.svg'

function Slide2() {
    return (
        <div className="row g-0 h-100">
            <div className="col-sm-7">
                <img src={imgSlider2} alt="hero-2" className='w-100 h-100' />
            </div>
            <div className="col-sm-5">
                <div className='hero-content h-100 d-flex flex-column justify-content-center'>
                    <h1 className='hero-heading'>We are available all across the globe</h1>
                    <p className='text-primary'>With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.</p>
                    <p className='py-2 cursor-pointer'>
                        <span className='text-uppercase me-3 shop-text transition'>shop now</span>
                        <img className='shop-arrow' src={shopArrow} alt="shop-now" />
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Slide2;
