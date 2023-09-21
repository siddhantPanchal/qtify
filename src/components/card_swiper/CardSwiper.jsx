import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import MusicCard from "../music_card/MusicCard";
import "./CardSwiper.css";

export default function CardSwiper({ cards = [], heading = null }) {
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
      <Swiper slidesPerView={6} className="swiper">
        {cards.map(
          ({ id, image, title, description, follows, slug, likes }) => (
            <SwiperSlide key={id}>
              <MusicCard
                img={image}
                follows={follows}
                likes={likes}
                title={title}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>

      <button className="left-button">left</button>
      <button className="right-button">right</button>
    </div>
  );
}
