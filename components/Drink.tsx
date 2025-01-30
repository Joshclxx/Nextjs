"use client";

import { motion } from "framer-motion";
import React from "react";
import ImageContainer from "./ImageContainer";

const page = () => {
  const drinks = [
    {
      imageSrc: "/caramel_bliss.png",
      imageAlt: "caramel_bliss",
      imageHeight: 80,
      imageWidth: 100,
      title: "Caramel Bliss",
      price: 155.0,
      description:
        "A creamy delight topped with whipped cream and golden caramel drizzle, perfect for your sweet cravings.",
    },
    {
      imageSrc: "/golden_swirl.png",
      imageAlt: "golden_swirl",
      imageHeight: 70,
      imageWidth: 100,
      title: "Golden Swirl",
      price: 160.0,
      description:
        "Layers of rich caramel and velvety ream come together in this indulgent treat.",
    },
    {
      imageSrc: "/matcha_haven.png",
      imageAlt: "matcha_haven",
      imageHeight: 80,
      imageWidth: 100,
      title: "Matcha Haven",
      price: 190.0,
      description:
        "A refreshing blend of earthy matcha and creamy goodness, crowned with whipped cream and matcha dust.",
    },
    {
      imageSrc: "/iced_velvet.png",
      imageAlt: "iced_velvet",
      imageHeight: 60,
      imageWidth: 80,
      title: "Iced Velvet",
      price: 140.0,
      description:
        "Smooth iced coffee swirled with luscious cream for a bold yet silky experience.",
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
            DRINK
            <br />
          </motion.h2>
        </div>

        <div className="grid grid-cols-12 sm:col-span-6 lg:col-span-3 flex-row justify-between gap-5">
          {drinks.map((drink, index) => (
            <ImageContainer
              imageSrc={drink.imageSrc}
              imageAlt={drink.imageAlt}
              imageHeight={drink.imageHeight}
              imageWidth={drink.imageWidth}
              title={drink.title}
              price={drink.price}
              description={drink.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
