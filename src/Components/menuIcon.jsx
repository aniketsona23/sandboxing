import React, { useState } from "react";
import "../styles/menu-icon.css";

export default function MenuIcon({state,changeState}) {
  const handler = () => {
    if (state === "open") {
      changeState("closed");
    } else {

      changeState("open");
    }
  };

  return (
    <div className={`menu-icon-${state}`} onClick={handler}>
      <div className="line1"></div>
      <div className="line2"></div>
    </div>
  );
}
