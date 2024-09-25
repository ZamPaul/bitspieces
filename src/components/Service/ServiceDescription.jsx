"use client";
import { motion } from "framer-motion";
import React from "react";

const ServiceDescription = ({ p, selected, i }) => {
  return (
    <motion.div
      initial="init"
      animate={selected == i + 1 ? "open" : "close"}
      variants={{
        init:{
            opacity:0,
        },
        open:{
            opacity: 1,
            transition:{
                delay:0.8,
                ease:[0.76, 0, 0.24, 1],
                duration:0.7,
            }
        },
        close:{
            opacity: 0,
            transition:{
                ease:[0.76, 0, 0.24, 1],
                duration:0.7,
            }
        }
      }}
      style={{pointerEvents:selected == i+1 ? "all" : "none"}}
      className="service-description flex flex-col items-start gap-[10px] absolute right-0 top-0"
    >
      <p className="text-[#fffd] text-[16px]">{p}</p>
    </motion.div>
  );
};

export default ServiceDescription;
