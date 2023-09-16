import "./App.css";
import HeroSection from "./components/hero_section/HeroSection";
import MusicCard from "./components/music_card/MusicCard";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MusicCard />
    </>
  );
}

export default App;
