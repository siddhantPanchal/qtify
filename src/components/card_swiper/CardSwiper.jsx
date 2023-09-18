import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import MusicCard from "../music_card/MusicCard";

export default function CardSwiper({ cards = [], heading = "" }) {
  return (
    <div>
      <h2>{heading}</h2>
      <Swiper slidesPerView={6}>
        {cards.map(({ id, image, title, description, follows, slug }) => (
          <SwiperSlide key={id}>
            <MusicCard img={image} follows={follows} title={title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
