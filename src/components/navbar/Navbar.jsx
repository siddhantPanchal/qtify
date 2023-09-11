// import React from "react";
import SearchIcon from "../search/SearchIcon";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <img src={require("../../assets/logo.png")} alt="logo" />
      <div className="search-box">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search a album of your choice"
        />
        <div>
          <SearchIcon />
        </div>
      </div>
      <button>Give Feedback</button>
    </nav>
  );
}
