import About from '../components/About'
import Carousel from '../components/Carousel';

function RoomHomepage() {
    return (
        <div className="h-100 d-flex flex-column overflow-y-auto">
            <div className="carousel position-relative">
                <Carousel />
            </div>
            <div className="flex-grow-1 flex-shrink-0">
                <About />
            </div>
        </div>
    )
}

export default RoomHomepage;
