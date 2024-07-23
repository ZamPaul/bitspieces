"use client";
import Rentalsoffer from "@/components/rentals/Rentalsoffer";
import Marquee from "@/components/Marquee/marquee";
import React from "react";
import FooterTest from "@/components/footer/footerTest";
import ProductsSection from "@/components/rentals/ProductsSection";

const Rentals = () => {
  return (
    <>
      <Rentalsoffer />
      <ProductsSection/>
      <div className="bg-[#F1F1F1]">
        <Marquee />
        <FooterTest />
      </div>
    </>
  );
};

export default Rentals;
