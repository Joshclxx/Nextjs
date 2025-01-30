"use client";

import { motion } from "framer-motion";
import React from "react";
import ImageContainer from "./ImageContainer";

const page = () => {
  const food = [
    {
      imageSrc: "/berry_bliss.png",
      imageAlt: "berry_bliss",
      imageHeight: 80,
      imageWidth: 90,
      title: "Berry Bliss",
      price: 125.0,
      description:
        "A delightful vamilla cupcake with blueberry-infused frosting, crowned with fresh blueberries for a burst of fruity freshness.",
    },
    {
      imageSrc: "/raspberry_bliss.png",
      imageAlt: "raspberry_bliss",
      imageHeight: 80,
      imageWidth: 90,
      title: "Raspberry Bliss",
      price: 105.0,
      description:
        "A rich chocolate cupcake topped with luscious pink raspberry frosting, a drizzle of dark chocolate, and a fresh raspberry.",
    },
    {
      imageSrc: "/delight_cupcake.png",
      imageAlt: "delight_cupcake",
      imageHeight: 80,
      imageWidth: 90,
      title: "Neopolitan Delight",
      price: 120.0,
      description:
        "Layers of chocolate, strawberry, and vanilla flavors, topped with tri-colored frosting, sprinkles, and a playful wafer for a nostalgic treat.",
    },
    {
      imageSrc: "/midnight_berry.png",
      imageAlt: "midnight_berry",
      imageHeight: 80,
      imageWidth: 90,
      title: "Midnight Berry",
      price: 145.0,
      description:
        "A rich berry cupcake topped with velvety purple frosting, dark chocolate ganache, and a cherry on top.",
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
            FOOD
            <br />
          </motion.h2>
        </div>

        <div className="grid grid-cols-12 sm:col-span-6 lg:col-span-3 flex-row justify-between gap-5">
          {food.map((food, index) => (
            <ImageContainer
              imageSrc={food.imageSrc}
              imageAlt={food.imageAlt}
              imageHeight={food.imageHeight}
              imageWidth={food.imageWidth}
              title={food.title}
              price={food.price}
              description={food.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
