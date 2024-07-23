"use client";
import { motion } from "framer-motion";
import React from "react";

const WhatsappButton = () => {
  return (
    <a href="https://wa.me/+97143470160" target="_blank">
      <motion.div
        initial={"init"}
        whileHover={"hover"}
        className="whatsapp-button rounded-full border-[0.5px] border-[var(--bor)] bg-[#04443c] flex items-center justify-between gap-[12px] tab:gap-[12px] px-[10px] tab:px-[8px] pl-[20px] tab:pl-[18px] py-[5px] tab:py-[4px]"
      >
        <div className="text-wrap">
          <h2 className="text-white tab:text-[16px] font-[100]">Whatsapp</h2>
        </div>
        <div className="circle w-[50px] tab:w-[45px] h-[50px] tab:h-[45px] rounded-full">
          <div className="circle-inner relative rounded-full w-full h-full flex items-center justify-center">
            <motion.div className="circle-overlay relative h-full w-full bg-[#fff] rounded-full"></motion.div>
          </div>
        </div>
      </motion.div>
    </a>
  );
};

export default WhatsappButton;
