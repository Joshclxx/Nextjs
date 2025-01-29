import React from "react";

const page = () => {
  return (
    <section className="max-container padding-container flex flex-col bg-gradient h-full w-full gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <h1 className="bold-40 lg:bold-80 text-white text-center flex flex-col">
        ABOUT HEEBREW
      </h1>

      <h2 className="bold-40 text-black">
        Every Sip Tells a Story!
        <p className="bold-18 text-black">
          At HeeBrew Café, we craft more than just coffee — we create
          unforgettable experiences. Driven by a passion for exceptional taste
          and the joy of shared moments, we invite you to indulge in the art of
          fine brewing.
          <br />
          <br />
          Our journey began with a simple belief: that a perfect cup of coffee
          can bring people together. Inspired by the warmth of HeeBrew
          hospitality, we've designed a cozy space where every visit feels like
          coming home.
          <br />
          <br />
          Discover our carefully crafted coffee blends that awaken your senses
          and celebrate the vibrant spirit of love and community. More than just
          a café, HeeBrew is a gathering place where friends connect, families
          bond, and new stories unfold. Our dedicated baristas take pride in
          delivering impeccable service and unforgettable flavors — making every
          cup a reason to return.
          <br />
          <br />
          Join us at HeeBrew Café — where tradition meets innovation, and every
          moment is brewed to perfection. Savor the taste, embrace the ambiance,
          and create lasting memories with every sip.
        </p>
      </h2>
    </section>
  );
};

export default page;
