import React, { useEffect } from "react";
import "./Snowfall.css";

const Snowfall = () => {
  useEffect(() => {
    const snowflakes = [];
    for (let i = 0; i < 50; i++) {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      snowflake.textContent = "❅";
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
      snowflake.style.fontSize = `${Math.random() * 10 + 10}px`;
      document.body.appendChild(snowflake);
      snowflakes.push(snowflake);
    }
    return () => snowflakes.forEach((snowflake) => snowflake.remove());
  }, []);

  return null;
};

export default Snowfall;