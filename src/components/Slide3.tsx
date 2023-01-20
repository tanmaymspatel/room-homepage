import imgSlider3 from '../assets/images/desktop-image-hero-3.jpg'
import shopArrow from '../assets/images/icon-arrow.svg'

function Slide3() {
    return (
        <div className="row g-0 h-100">
            <div className="col-sm-7">
                <img src={imgSlider3} alt="hero-3" className='w-100 h-auto' />
                {/* <figure className="mb-0 w-100 h-100">
                </figure> */}
            </div>
            <div className="col-sm-5">
                <div className='hero-content h-100 d-flex flex-column justify-content-center'>
                    <h1 className='hero-heading'>Manufactured with the best materials</h1>
                    <p className='text-primary'>Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.</p>
                    <p className='py-2 cursor-pointer'>
                        <span className='text-uppercase me-3 shop-text transition'>shop now</span>
                        <img className='shop-arrow' src={shopArrow} alt="shop-now" />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Slide3
