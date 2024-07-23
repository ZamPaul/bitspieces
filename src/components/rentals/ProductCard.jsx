"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { productCards } from "./data";

const imgVariants = {
  init: {
    transform: "translate(-50%,-50%) scale(1)",
  },
  hover: {
    transform: "translate(-50%,-50%) scale(1.2)",
  },
};

const imgWrapper = {
  init: {
    scale: 1,
  },
  hover: {
    scale: 0.95,
  },
};

const ProductCard = ({ title, items, src, short, setSelected, num }) => {
  
  const imgWrap = useRef(null);
  const img = useRef(null);

  const toggle = (e) => {
    setSelected(productCards[num])
  }

  return (
    <>
    <motion.div
      initial={"init"}
      whileHover={"hover"}
      onClick={toggle}
      className="product-card py-[25px] px-[20px] cursor-pointer flex flex-col justify-start items-start rounded-[15px] w-[28vw] relative gap-[20px]"
    >
      <motion.div
        ref={imgWrap}
        layout
        layoutId={title}
        variants={imgWrapper}
        transition={{ ease: "linear", duration:.4, delay:0, type:"keyframes" }}
        className="image-wrapper pointer-events-none relative w-full h-[26vw] overflow-hidden rounded-[10px]"
      >
        <motion.div
          ref={img}
          variants={imgVariants}
          transition={{ type: "keyframes", ease: "linear" }}
          className="image-inner w-full h-full -translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2"
        >
          <Image src={src} alt="" fill={true} style={{ objectFit: "cover" }} />
        </motion.div>
      </motion.div>
      <div className="title-items-count w-full flex justify-between items-center">
        <h2 className="text-[#fff] text-[1.6vw] leading-none">
          {title}
        </h2>
        <div className="item-count bg-[#121212bd] py-[5px] rounded-[50px] border-[1px] border-[var(--bor)] px-[12px]">
          <h2 className="text-[#fffd] text-[14px]">{items} Items</h2>
        </div>
      </div>
      <div className="product-description">
        <p className="text-[#fffd]">{short}</p>
      </div>
    </motion.div>
    </>
  );
};

export const ItemCount = ({value}) => {
  return (
    <div className="item-count bg-[#121212d3] min-w-fit py-[5px] rounded-[50px] border-[1px] border-[var(--bor)] px-[12px]">
      <h2 className="text-[#fffd] text-[15px]">{value}</h2>
    </div>
  );
};

export default ProductCard;
