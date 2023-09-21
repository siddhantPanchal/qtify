import React from "react";

export default function TabView({ children, currentTabIndex }) {
  return <div>{children[currentTabIndex]}</div>;
}
