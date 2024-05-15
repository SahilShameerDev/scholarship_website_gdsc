"use client";
import React, { useState, useEffect } from "react";
import style from "./Hero.module.css";

interface MousePosition {
  x: number;
  y: number;
}

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Check if window is defined before adding the event listener
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      // Check if window is defined before removing the event listener
      if (typeof window !== "undefined") {
        window.removeEventListener("mousemove", handleMouseMove);
      }
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
              typeof window !== "undefined"
                ? (mousePosition.x / window.innerWidth - 0.5) * 0
                : 0
            }px, ${
              typeof window !== "undefined"
                ? (mousePosition.y / window.innerHeight - 0.5) * -3
                : 0
            }px)`,
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
                typeof window !== "undefined"
                  ? (mousePosition.x / window.innerWidth - 0.5) * 2
                  : 0
              }px, ${
                typeof window !== "undefined"
                  ? (mousePosition.y / window.innerHeight - 0.5) * 5
                  : 0
              }px)`,
            }}
          />
        </div>
        <div
          className={style.openBook}
          style={{
            transform: `translate(${
              typeof window !== "undefined"
                ? (mousePosition.x / window.innerWidth - 0.5) * 3
                : 0
            }px, ${
              typeof window !== "undefined"
                ? (mousePosition.y / window.innerHeight - 0.5) * -10
                : 0
            }px)`,
          }}
        >
          <img src="openbook.png" alt="" />
        </div>
        <div
          className={style.bulb}
          style={{
            transform: `translate(${
              typeof window !== "undefined"
                ? (mousePosition.x / window.innerWidth - 0.5) * 4
                : 0
            }px, ${
              typeof window !== "undefined"
                ? (mousePosition.y / window.innerHeight - 0.5) * 2
                : 0
            }px)`,
          }}
        >
          <img src="bulb.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
