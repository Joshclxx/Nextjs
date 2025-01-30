"use client";

import { motion } from "framer-motion";
import React from "react";
import ImageContainer from "./ImageContainer";

const page = () => {
  const merchandise = [
    {
      imageSrc: "/merch-1.png",
      imageAlt: "merch-1",
      imageHeight: 80,
      imageWidth: 100,
      title: "SipEase Mug",
      price: 879.45,
      description: "Your go-to mug for cozy mornings and energizing breaks.",
    },
    {
      imageSrc: "/merch-2.png",
      imageAlt: "merch-2",
      imageHeight: 80,
      imageWidth: 100,
      title: "ChillFlow Cold Cup",
      price: 1044.45,
      description: "Keep your drinks refreshingly cool, anytime, anywhere.",
    },
    {
      imageSrc: "/merch-3.png",
      imageAlt: "merch-3",
      imageHeight: 80,
      imageWidth: 100,
      title: "HydroStride Bottle",
      price: 1264.45,
      description: "Stay hydrated on the move with this sleek, durable bottle.",
    },
    {
      imageSrc: "/merch-4.png",
      imageAlt: "merch-4",
      imageHeight: 80,
      imageWidth: 100,
      title: "BrewMate Tumbler",
      price: 1099.45,
      description:
        "Keep your drinks hot or cold for hours with styles and ease.",
    },
  ];

  return (
    <section className="w-full bg-gradient py-10 pb-32 md:gap-28 lg:py-20">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-20 px-4 xl:flex-row">
        <div className="flex flex-col items-center justify-center mt-5">
          <motion.h2
            className="scroll-section bold-32 mb-1 bg-gradient-1 rounded-2xl shadow-2xl"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.17, 0.55, 0.55, 1],
            }}
          >
            MERCHANDISE
            <br />
          </motion.h2>
        </div>

        <div className="grid grid-cols-12 sm:col-span-6 lg:col-span-3 flex-row justify-between gap-5">
          {merchandise.map((merchandise, index) => (
            <ImageContainer
              imageSrc={merchandise.imageSrc}
              imageAlt={merchandise.imageAlt}
              imageHeight={merchandise.imageHeight}
              imageWidth={merchandise.imageWidth}
              title={merchandise.title}
              price={merchandise.price}
              description={merchandise.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
