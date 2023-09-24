import React, { useState } from "react";

import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";

import MusicCard from "../music_card/MusicCard";
import "./CardSwiper.css";
import { Tooltip } from "@mui/material";

export default function CardSwiper({ cards = [], heading = null }) {
  const [swiper, setSwiper] = useState(null);
  // const swiperData = useSwiperSlide();

  const [position, setPosition] = useState("initial");

  // console.log(position);

  return (
    <div>
      {heading && (
        <div className="swiper-header">
          <h2>{heading}</h2>
          <div className="view-all">
            <h3>
              <span className="text-primary">View All</span>
            </h3>
          </div>
        </div>
      )}
      <Swiper
        slidesPerView={6}
        className="swiper"
        onSwiper={(_swiper) => setSwiper(_swiper)}
        onReachBeginning={() => setPosition("initial")}
        onSlideChange={() => setPosition("middle")}
        onReachEnd={() => setPosition("end")}
      >
        {cards.map(
          ({ id, image, title, description, follows, slug, likes, songs }) => (
            <SwiperSlide key={id}>
              {songs?.length ? (
                <Tooltip title={`${songs.length} Songs`} arrow>
                  <MusicCard
                    img={image}
                    follows={follows}
                    likes={likes}
                    title={title}
                  />{" "}
                </Tooltip>
              ) : (
                <MusicCard
                  img={image}
                  follows={follows}
                  likes={likes}
                  title={title}
                />
              )}
            </SwiperSlide>
          )
        )}

        {!(swiper?.isBeginning ?? false) && (
          <button className="left-button" onClick={() => swiper.slidePrev()}>
            {"<"}
          </button>
        )}
        {!(swiper?.isEnd ?? false) && (
          <button className="right-button" onClick={() => swiper.slideNext()}>
            {">"}
          </button>
        )}

        {/* {swiper?.isBeginning ? <div>beg</div> : <div>not beg</div>}
        {swiper?.isEnd ? <div>end</div> : <div>not end</div>}
        {position} */}
      </Swiper>
    </div>
  );
}
