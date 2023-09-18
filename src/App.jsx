import "./App.css";
import CardSwiper from "./components/card_swiper/CardSwiper";
import HeroSection from "./components/hero_section/HeroSection";
import Navbar from "./components/navbar/Navbar";
import useNewAlbums from "./hooks/useNewAlbums";
import useTopAlbums from "./hooks/useTopAlbums";

function App() {
  const topAlbums = useTopAlbums();
  const newAlbums = useNewAlbums();

  return (
    <>
      <Navbar />
      <HeroSection />
      <CardSwiper cards={topAlbums} heading="Top Albums" />
      <CardSwiper cards={newAlbums} heading="New Albums" />
      <hr className="divider" />
      <CardSwiper cards={newAlbums} heading="New Albums" />
    </>
  );
}

export default App;
