"use client";

// Import React and other necessary hooks
import React, { useState, useEffect } from "react";
// Import your CSS module
import style from "./Hero.module.css";

// Define the type for your component's state
interface MousePosition {
  x: number;
  y: number;
}

// Define your component as a functional component with no props
const Hero: React.FC = () => {
  // Initialize your state with TypeScript types
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div className={style.circleContainer}>
        <svg
          viewBox="0 0 211 181"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle opacity="0.45" cx="44" cy="14" r="167" fill="#4286F5" />
        </svg>
      </div>
      <div className={style.gear}>
        <img src="gear.png" alt="" />
      </div>
      <div className={style.illustration}>
        <div className={style.person}>
          <img src="person.png" alt="" />
        </div>
        <div
          className={style.music}
          style={{
            transform: `translate(${
              (mousePosition.x / window.innerWidth - 0.5) * 0
            }px, ${(mousePosition.y / window.innerHeight - 0.5) * -3}px)`,
          }}
        >
          <img src="music.png" alt="" />
        </div>
        <div className={style.bookUpsideDown}>
          <img
            src="book1.png"
            alt=""
            style={{
              transform: `translate(${
                (mousePosition.x / window.innerWidth - 0.5) * 2
              }px, ${(mousePosition.y / window.innerHeight - 0.5) * 5}px)`,
            }}
          />
        </div>
        <div
          className={style.openBook}
          style={{
            transform: `translate(${
              (mousePosition.x / window.innerWidth - 0.5) * 3
            }px, ${(mousePosition.y / window.innerHeight - 0.5) * -10}px)`,
          }}
        >
          <img src="openbook.png" alt="" />
        </div>
        <div
          className={style.bulb}
          style={{
            transform: `translate(${
              (mousePosition.x / window.innerWidth - 0.5) * 4
            }px, ${(mousePosition.y / window.innerHeight - 0.5) * 2}px)`,
          }}
        >
          <img src="bulb.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
