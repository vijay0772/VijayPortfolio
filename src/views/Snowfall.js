import { useEffect } from "react"; // Import only useEffect
import "./Snowfall.css";

const Snowfall = () => {
  useEffect(() => {
    const snowflakes = [];
    const snowflakeSymbols = ["❄", "❅", "❆", "❄", "❅"]; // Different snowflake shapes

    for (let i = 0; i < 100; i++) {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      snowflake.textContent = snowflakeSymbols[Math.floor(Math.random() * snowflakeSymbols.length)];

      // Randomize size, opacity, and initial position
      const size = Math.random() * 10 + 5; // Snowflake size between 5px and 15px
      snowflake.style.fontSize = `${size}px`;
      snowflake.style.opacity = Math.random().toFixed(2);
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDuration = `${Math.random() * 5 + 2}s`; // 2-7 seconds
      snowflake.style.animationDelay = `${Math.random() * 2}s`; // Random delay for staggered effect

      document.body.appendChild(snowflake);
      snowflakes.push(snowflake);
    }

    return () => snowflakes.forEach((snowflake) => snowflake.remove());
  }, []);

  return null;
};

export default Snowfall;
