import About from '../components/About'
import Carousel from '../components/Carousel';
import Slide1 from '../components/Slide1';

function RoomHomepage() {
    return (
        <div className="h-100 d-flex flex-column overflow-y-auto">
            <div className="carousel position-relative">
                <Carousel />
            </div>
            <div className="about flex-grow-1 flex-shrink-0">
                <About />
            </div>
        </div>
    )
}

export default RoomHomepage;
