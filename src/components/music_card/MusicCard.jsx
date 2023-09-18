import React from "react";
import "./MusicCard.css";

export default function MusicCard({ title, img, follows }) {
  return (
    <>
      <div className="music-card">
        <img
          src={img}
          alt={`music-${title}`}
          className="music-card"
          style={{
            width: "100%",
            height: "80%",
          }}
        />
        <div className="chip">{`${follows} follows`}</div>
      </div>
      <div style={{ padding: 10 }}>
        <span className="music-title">{title}</span>
      </div>
    </>
  );
}
