import React from "react";
import "./MusicCard.css";

export default function MusicCard() {
  return (
    <>
      <div className="music-card">
        <img src={require("../../assets/music.png")} alt="music" width="100%" />
        <div className="chip">1000 follows</div>
      </div>
      <div style={{ padding: 10 }}>
        <span className="music-title">Title</span>
      </div>
    </>
  );
}
