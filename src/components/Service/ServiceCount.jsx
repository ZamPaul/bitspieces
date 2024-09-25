"use client";
import { motion } from "framer-motion";
import React from "react";

const ServiceCount = ({ num, selected, i }) => {
  return (
    <motion.div
      initial="init"
      animate={selected == i + 1 ? "open" : "close"}
      variants={{
        init:{
          top:"0%"
        },
        open:{
          top:"0%",
          transition:{
              delay:0.6,
              ease:[0.76, 0, 0.24, 1],
              duration:0.6,
          }
        },
        close:{
            top:"-2.7vw",
            transitionEnd:{
              top:"2.7vw"
            },
            transition:{
                duration:0.6,
                ease:[0.76, 0, 0.24, 1],
            }
        }
      }}
      className="count opacity-1 absolute left-0 top-full"
    >
      <h2 className="text-[2.7vw] leading-none uppercase">0{num}.</h2>
    </motion.div>
  );
};

export default ServiceCount;
