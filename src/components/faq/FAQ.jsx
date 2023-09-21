import React, { useState } from "react";
import "./FAQ.css";
import ArrowDown from "../../assets/arrow-down.png";
import ArrowUp from "../../assets/arrow-up.png";

export function Expandable({ title, subTitle }) {
  const [isExpanded, setExpansionState] = useState(false);
  return (
    <details onClick={() => setExpansionState((prev) => !prev)}>
      <summary>
        <p>{title}</p>
        <div>
          {isExpanded ? (
            <img src={ArrowUp} alt="arrow-up" srcset="" />
          ) : (
            <img src={ArrowDown} alt="arrow-down" srcset="" />
          )}
        </div>
      </summary>
      <p
        style={{
          backgroundColor: "white",
          height: "4rem",
          color: "black",
          display: "flex",
          alignItems: "center",
          paddingLeft: "10px",
        }}
      >
        {subTitle}
      </p>
    </details>
  );
}

export default function FAQ() {
  return (
    <div className="faq-section">
      <h1>FAQs</h1>

      <Expandable
        title={"Is QTify free to use?"}
        subTitle={"Yes."}
      ></Expandable>

      <Expandable
        title={"Can I download and listen to songs offline?"}
        subTitle={
          "Sorry, unfortunately we don't provide the service to download any songs."
        }
      ></Expandable>
    </div>
  );
}
