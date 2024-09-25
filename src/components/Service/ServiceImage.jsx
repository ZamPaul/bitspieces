"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const ServiceImage = ({ img, selected, i }) => {
  return (
    <motion.div
      initial="init"
      animate={selected == i + 1 ? "open" : "close"}
      variants={{
        init:{
            clipPath:"polygon(0% 100%, 0% 100%, 100% 100%, 100% 100%)"
        },
        open:{
            clipPath:"polygon(0% 100%, 0% 0%, 100% 0%, 100% 100%)",
            transitionEnd:{
                clipPath:"polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)"
            },
            transition:{
                delay:0.7,
                ease:[0.76, 0, 0.24, 1],
                duration:0.7,
            }
        },
        close:{
            clipPath:"polygon(0% 0%, 0% 0%, 100% 0%, 100% 0%)",
            transitionEnd:{
                clipPath:"polygon(0% 100%, 0% 100%, 100% 100%, 100% 100%)"
            },
            transition:{
                duration:0.7,
                ease:[0.76, 0, 0.24, 1],
            }
        }
      }}
      className="image pointer-events-none absolute left-0 top-0 flex items-center justify-center"
    >
      <Image
        src={img}
        className="w-[40vw] tab:w-[93vw] h-[28vw] tab:h-[60vw] object-cover rounded-[5px]"
      />
    </motion.div>
  );
};

export default ServiceImage;
