import Image from 'next/image'
import React from 'react'
import Button from '@/components/Button'

const Hero = () => {
  return (
    <section className="max-container padding-container  flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">

    <div className="hero-map" />

    {/* LEFT */}

    <div className="relative z-20 flex-1 flex-col xl:w-1/2">
    <Image 
      src="/camp.svg"
      alt="camp"
      width={50}
      height={50}
      className="absolute left-[-5px] top-[-30] w-10 lg:w-[50px]"
    />

    <h1 className="bold-52 lg:bold-88">Every Sip Tells a Story, HeeBrew</h1>
    <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">At HeeBrew Café, we offer more than coffee — we create moments that bring people together. Inspired by the warmth of community, our cozy space and expertly crafted blends make every visit feel like home.  
    <br />
    <br />Join us to savor exceptional flavors, enjoy heartfelt service, and share lasting memories. At HeeBrew, every cup is brewed with love and designed to connect.</p>

    <div className="my-11 flex flex-wrap gap-5">
      <div className="flex itmes-center gap-2">
        {Array(5).fill(1).map((_, index) => (
          <Image 
            src="/star.svg"
            key={index}
            alt="star"
            width={24}
            height={24}
          />

        ))}
  
      </div>
            <p className="bold-16 lg:bold-20 text-blue-700">
              198k
              <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
            </p>
      </div>

      <div className="flex flex-col w-full gap-3 sm:flex-row">
            <Button 
              type="button" 
              title="Download App" 
              variant="btn_green" 
            />
             <Button 
              type="button" 
              title="How We Work" 
              icon="/play.svg"
              variant="btn_white_text" 
            />
      </div>
      </div>


      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-900 px-7 py-8">
       

          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image 
                src="/close.svg"
                alt="close"
                width={24}
                height={24}
              />
            </div>
            <p className="bold-20 text-white">Aguas Calientes</p>
          </div>


            <div className="flexBetween">
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-20">Distance</p>
                <p className="bold-20 text-white">173.28 mi</p>
              </div>
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-20">Elevation</p>
                <p className="bold-20 text-white">2.040 km</p>
              </div>
            </div>


        </div>
      </div>

      </section>
  )
}

export default Hero