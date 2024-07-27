"use client";
import React, { useEffect, useState } from "react";
import { productCards } from "./data";
import ProductCard from "./ProductCard";
import PopupOverlay from "../PopUpOverlay/PopupOverlay";
import CardPopup2 from "./CardPopup2";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import Cursor from "../Cursor/cursor";

const ProductsSection = () => {

  const [selected, setSelected] = useState(null)

  const changeOverlay = (pointer, blur, bri) => {
    gsap.to(".popup-overlay",{
      backdropFilter:`blur(${blur}px) brightness(${bri}%)`,
      pointerEvents:pointer,
      ease: "power1.inOut",
      duration: 0.4,
    })
  }

   useEffect(()=>{
    !(selected==null) ? changeOverlay("all",2,50) : changeOverlay("none",0,100)
  },[selected])

  return (
    <>
    <div className="rental-products-section bg-black w-full flex justify-center pt-[10vh]">
      <div className="rentals-products-inner w-[93%] flex flex-col justify-center items-center">
        <TopText />
        <div className="products-gallery w-full flex items-start justify-between flex-wrap gap-y-[4vw]">
          {
            productCards.map((card, i) => {
              return (
                <ProductCard
                  setSelected={setSelected}
                  title={card.name}
                  short={card.shortDescription}
                  src={card.src}
                  items={card.items}
                  num={i}
                  key={`rental_product_card_${i}`}
                />
              );
            })
          }
        </div>
      </div>
    </div>
    <div className="spacer-div pb-[15vh] bg-black w-full relative z-[30] tab:py-[5vh] mob:py-[5vh]"></div>
    <PopupOverlay/>
    <AnimatePresence mode="wait">
      {selected && <CardPopup2 setSelected={setSelected} img={selected.src} name={selected.name} description={selected.detailedDescription} usage={selected.usage} related={selected.relatedProducts}/>}
    </AnimatePresence>
    <Cursor scaleUpDiv={".product-card"} moveDiv={".rental-products-section"} text={"Details"}/>
    </>
  );
};

const TopText = () => {
  return (
    <div className="text-info w-full mb-[7vh] tab:mb-[5vh] mob:mb-[5vh] flex flex-col justify-start pb-[5vh] tab:pb-[4.5vh] mob:pb-[3vh] border-b-[1px] border-b-[var(--bor)]">
      <p className="text-[3vw] leading-none mob:leading-[1.4em] tab:text-[4vw] mob:text-[7vw]">
        Create Unforgettable{" "}
        <span className="text-[3vw] tab:text-[4vw] mob:text-[7vw] para-link">
          Experiences
        </span>{" "}
        with Our Rental{" "}
        <span className="text-[3vw] tab:text-[4vw] mob:text-[7vw] para-link">
          Products
        </span>
      </p>
    </div>
  );
};

export default ProductsSection;
