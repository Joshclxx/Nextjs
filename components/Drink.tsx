import Image from 'next/image'
import React from 'react'
import Button from './Button'

const page = () => {
  return (
   <section className="max-container padding-container flex flex-col bg-gradient-to-r from-[#536CB5] to-[#98A5C0] h-full w-full gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">

    <div className="flex flex-col items-start mt-5">
      <h2 className="bold-32 mb-1"> 
        DRINK
        <br />
      </h2>
    </div>

      <div className="grid grid-cols-12 sm:col-span-6 lg:col-span-3 flex-row justify-between gap-5">
        <div className="image-container">
          <Image 
            src="/caramel_bliss.png"
            alt="caramel_blis"
            width={80}
            height={100}
            />  
            <p className="regular-16 text-center mt-2">
              Caramel Bliss
              <br />
              ₱155.00
            </p>
            <div className="buy-btn">
            <h3 className="text-btn">Details</h3>
            <Button 
              type="button"
              title="Buy"
              variant="btn_dark"
            />
          </div>
        </div>
        
        <div className="image-container">
          <Image 
            src="/golden_swirl.png"
            alt="golden_swirl"
            width={60}
            height={80}
          />  
            <p className="regular-16 text-center mt-8">
              Golden Swirl
              <br />
              ₱160.00
            </p>
            <div className="buy-btn">
            <h3 className="text-btn">Details</h3>
            <Button 
              type="button"
              title="Buy"
              variant="btn_dark"
            />
          </div>
        </div>
        
        <div className="image-container">
          <Image 
            src="/matcha_haven.png"
            alt="matcha_haven"
            width={110}
            height={130}
          />  
            <p className="regular-16 text-center mt-4">
              Matcha Haven
              <br />
              ₱190.00
            </p>
            <div className="buy-btn">
            <h3 className="text-btn">Details</h3>
            <Button 
              type="button"
              title="Buy"
              variant="btn_dark"
            />
          </div>
        </div>

        <div className="image-container">
          <Image 
            src="/iced_velvet.png"
            alt="iced_velvet"
            width={60}
            height={80}
          />  
            <p className="regular-16 text-center mt-6">
              Iced Velvet
              <br />
              ₱140.00
            </p>
            <div className="buy-btn">
            <h3 className="text-btn">Details</h3>
            <Button 
              type="button"
              title="Buy"
              variant="btn_dark"
            />
          </div>
        </div>
      </div>
  </section>
  )
}

export default page