import React, { useEffect, useRef, useState } from "react";

const Snowfall = () => {
  const canvasRef = useRef(null);
  const [mode, setMode] = useState("repel"); // State to toggle between interaction modes

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const snowflakes = [];
    const maxSnowflakes = 100;
    const mouse = { x: 0, y: 0 };

    class Snowflake {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 4 + 1;
        this.speed = Math.random() * 1 + 0.5;
        this.opacity = Math.random();
        this.direction = Math.random() * Math.PI * 2;
        this.wind = Math.random() * 2 - 1; // Wind effect
      }

      update() {
        this.y += this.speed;
        this.x += Math.cos(this.direction) + this.wind;
        if (this.y > canvas.height) {
          this.y = 0;
          this.x = Math.random() * canvas.width;
        }
        this.interactWithMouse();
      }

      interactWithMouse() {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          if (mode === "repel") {
            // Repel snowflakes
            this.x += dx / distance * 2;
            this.y += dy / distance * 2;
          } else if (mode === "attract") {
            // Attract snowflakes
            this.x -= dx / distance * 2;
            this.y -= dy / distance * 2;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
        ctx.closePath();
      }
    }

    for (let i = 0; i < maxSnowflakes; i++) {
      snowflakes.push(new Snowflake());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      snowflakes.forEach((snowflake) => {
        snowflake.update();
        snowflake.draw();
      });
      requestAnimationFrame(animate);
    }

    animate();

    // Update mouse position
    canvas.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    // Click interaction: Burst snowflakes
    canvas.addEventListener("click", () => {
      snowflakes.forEach((snowflake) => {
        const dx = snowflake.x - mouse.x;
        const dy = snowflake.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          snowflake.speed = Math.random() * 4 + 2; // Increase speed on click
          snowflake.radius = Math.random() * 6 + 1; // Increase size on click
        }
      });
    });

    // Resize canvas on window resize
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    return () => {
      window.removeEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });
    };
  }, [mode]);

  return (
    <div>
      <canvas ref={canvasRef} className="absolute top-0 left-0" />
      <div className="absolute top-4 right-4 z-10">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={() => setMode(mode === "repel" ? "attract" : "repel")}
        >
          Toggle Mode (Current: {mode})
        </button>
      </div>
    </div>
  );
};

export default Snowfall;
