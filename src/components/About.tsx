import darkImg from '../assets/images/image-about-dark.jpg'
import lightImg from '../assets/images/image-about-light.jpg'

function About() {
    return (
        <>
            <div className="row g-0">
                <div className="col-sm-4">
                    <figure className='mb-0 h-100 w-100'>
                        <img src={darkImg} alt="about-dark" className='h-100 w-100' />
                    </figure>
                </div>
                <div className="col-sm-4">
                    <div className='about-content'>
                        <h4 className='heading-about text-uppercase'>about our furniture</h4>
                        <p className='about-text'>
                            Our multifunctional collection blends design and function to suit your
                            individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
                        </p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <figure className='mb-0 h-100 w-100'>
                        <img src={lightImg} alt="about-dark" className='h-100 w-100' />
                    </figure>
                </div>
            </div>
        </>
    )
};

export default About;
