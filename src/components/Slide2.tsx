import imgSlider2 from '../assets/images/desktop-image-hero-2.jpg'

function Slide2() {
    return (
        <div className="row g-0 h-100">
            <div className="col-sm-7">
                <img src={imgSlider2} alt="hero-image-1" className='w-100 h-auto' />
                {/* <figure className="mb-0 w-100 h-100">
                </figure> */}
            </div>
            <div className="col-sm-5">
                <div className='hero-content h-100 d-flex flex-column justify-content-center'>
                    <h1>We are available all across the globe</h1>
                    <p>With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.</p>
                    <p>{`Shop now ----------->`}</p>
                </div>
            </div>
        </div>
    )
};

export default Slide2;
