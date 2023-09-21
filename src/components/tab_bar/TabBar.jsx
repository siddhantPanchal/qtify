import React from "react";
import "./Tab.css";

export default function TabBar({ items = [], currentTabIndex, onTabChange }) {
  return (
    <div className="tab-bar">
      {items.map((item, index) => (
        <li
          key={index}
          onClick={() => onTabChange(index)}
          className={`tab-item ${
            currentTabIndex === index ? "active-tab-item" : ""
          }`}
        >
          <h3>{item.label}</h3>
        </li>
      ))}
    </div>
  );
}
