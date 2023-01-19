import About from '../components/About'

function RoomHomepage() {
    return (
        <div className="h-100 d-flex flex-column overflow-hidden">
            <div className="carousel bg-primary"></div>
            <div className="about">
                <About />
            </div>
        </div>
    )
}

export default RoomHomepage;
