import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="w-full bg-gradient py-10 pb-32 md:gap-28 lg:py-20">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-20 px-4 xl:flex-row">
        <div className="flex flex-col items-start mt-5">
          <h2 className="bold-32 mb-1">
            AT HOME
            <br />
          </h2>
        </div>

        <div className="flex flex-row justify-between gap-9">
          <div className="relative z-20 flex-1 xl:w-1/2 flex flex-col items-center">
            <Image src="/" alt="" width={80} height={100} />
            <p className="regular-16 text-center mt-5">
              <br />₱
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
