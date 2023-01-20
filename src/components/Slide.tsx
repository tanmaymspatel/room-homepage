function Slide({ img, heading, sliderText }: any) {

    return (
        <div className="row g-0 h-100">
            <div className="col-sm-7">
                <img src={img} className='w-100 h-auto' />
            </div>
            <div className="col-sm-5">
                <div className='hero-content h-100 d-flex flex-column justify-content-center'>
                    <h1>{heading}</h1>
                    <p>{sliderText}</p>
                    <p>{`Shop now ----------->`}</p>
                </div>
            </div>
        </div>
    )
};

export default Slide;
