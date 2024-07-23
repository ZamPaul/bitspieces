"use client";
import gsap from "gsap";
import MouseFollower from "mouse-follower";
import React, { useEffect } from "react";
MouseFollower.registerGSAP(gsap);
import "./styles.scss";

export const Cursor = (sectionName, text) => {
  useEffect(() => {
    const section = document.querySelectorAll(`${sectionName}`)
      
    const cursor = new MouseFollower({
      visible: false,
    });

    section.forEach((section) => {
      section.addEventListener("mouseenter", () => {
        if (window.innerWidth > 1000 && window.innerHeight < 1000) {
          cursor.show();
          cursor.setText(text);
        }
      });

      section.addEventListener("mouseleave", () => {
        if (window.innerWidth > 1000 && window.innerHeight < 1000) {
          cursor.hide();
          cursor.removeText();
        }
      });
    });

    return () => {
      section.forEach((section) => {
        section.removeEventListener("mouseenter", () => {
          cursor.show();
          cursor.setText(text);
        });
        section.removeEventListener("mouseleave", () => {
          cursor.removeText();
          cursor.hide();
        });
      });
    };
  }, []);

  return;
};
