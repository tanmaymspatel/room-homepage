import CarouselProvider from "./context/CarouselProvider";
import RoomHomepage from "./pages/RoomHomepage";

function App() {
  return (
    <CarouselProvider>
      <RoomHomepage />
    </CarouselProvider>
  );
}

export default App;
