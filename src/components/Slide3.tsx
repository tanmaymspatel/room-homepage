import imgSlider3 from '../assets/images/desktop-image-hero-3.jpg'
import mobileImgSlider3 from '../assets/images/mobile-image-hero-3.jpg'
import shopArrow from '../assets/images/icon-arrow.svg'

function Slide3() {
    return (
        <div className="row g-0 h-100">
            <div className="col-lg-7">
                <img src={imgSlider3} alt="hero-3" className='w-100 h-100 d-none d-sm-block' />
                <img src={mobileImgSlider3} alt="hero-3" className='w-100 h-100 d-sm-none' />
            </div>
            <div className="col-lg-5">
                <div className='hero-content d-flex flex-column justify-content-center'>
                    <h1 className='hero-heading'>Manufactured with the best materials</h1>
                    <p className='text-primary hero-text'>Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.</p>
                    <p className='pt-3 cursor-pointer mb-0'>
                        <span className='text-uppercase me-3 shop-text transition'>shop now</span>
                        <img className='shop-arrow' src={shopArrow} alt="shop-now" />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Slide3
