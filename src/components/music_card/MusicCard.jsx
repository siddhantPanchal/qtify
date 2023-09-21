import React from "react";
import "./MusicCard.css";

export default function MusicCard({ title, img, follows, likes }) {
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
        {follows ? (
          <div className="chip">{`${follows} follows`}</div>
        ) : (
          <div className="chip">{`${likes} likes`}</div>
        )}
      </div>
      <div style={{ padding: 10 }}>
        <span className="music-title">{title}</span>
      </div>
    </>
  );
}
