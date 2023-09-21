import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import HeroSection from "../components/hero_section/HeroSection";
import CardSwiper from "../components/card_swiper/CardSwiper";
import useCrio from "../hooks/useCrio";
import TabBar from "../components/tab_bar/TabBar";
import TabView from "../components/tab_bar/TabView";
import FAQ from "../components/faq/FAQ";

export default function HomePage() {
  const [topAlbums] = useCrio("/albums/top");
  const [newAlbums] = useCrio("/albums/new");
  const [genres] = useCrio("/genres");
  const [songs] = useCrio("/songs");
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <Navbar />
      <HeroSection />
      {topAlbums ? (
        <CardSwiper cards={topAlbums} heading="Top Albums" />
      ) : (
        <></>
      )}
      {newAlbums ? (
        <CardSwiper cards={newAlbums} heading="New Albums" />
      ) : (
        <></>
      )}

      <hr className="divider" />

      {genres && songs && (
        <>
          {" "}
          <h2>Songs</h2>
          <TabBar
            items={[{ label: "All", key: "All" }, ...genres.data]}
            currentTabIndex={activeTab}
            onTabChange={(index) => {
              setActiveTab(index);
            }}
          />
          <TabView currentTabIndex={activeTab}>
            <CardSwiper cards={songs} />

            <CardSwiper
              cards={songs.filter(
                (song) => song["genre"]["key"] === genres.data[0]["key"]
              )}
            />

            <CardSwiper
              cards={songs.filter(
                (song) => song["genre"]["key"] === genres.data[1]["key"]
              )}
            />
            <CardSwiper
              cards={songs.filter(
                (song) => song["genre"]["key"] === genres.data[2]["key"]
              )}
            />
            <CardSwiper
              cards={songs.filter(
                (song) => song["genre"]["key"] === genres.data[3]["key"]
              )}
            />
          </TabView>
        </>
      )}
      <FAQ />
    </div>
  );
}
