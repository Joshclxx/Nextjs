import Image from 'next/image'
import React from 'react'
import Button from './Button'

const page = () => {
  return (

   <section className="max-container padding-container flex flex-col bg-gradient-to-r from-[#536CB5] to-[#98A5C0] h-full w-full gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">

    <div className="flex flex-col items-start">
          <h2 className="bold-32 mb-1">
            FOOD
          </h2>
        </div>
    
        <div className="grid grid-cols-12 sm:col-span-6 lg:col-span-3 flex-row justify-between gap-5">
            <div className="image-container">
                <Image 
                    src="/berry_bliss.png"
                    alt="berry_bliss"
                    width={80}
                    height={90}
                    className="mt-[25px]"
                />
                <p className="regular-16 text-center mt-8">
                    Berry bliss
                    <br />
                    ₱125.00
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
                    src="/raspberry_bliss.png"
                    alt="raspberry_bliss"
                    width={80}
                    height={90}
                    className="mt-[-15px]"
                />
                <p className="regular-16 text-center mt-8">
                    Raspberry Bliss
                    <br />
                    ₱105.00
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
                    src="/delight_cupcake.png"
                    alt="delight_cupcake"
                    width={80}
                    height={90}
                    className="mt-[-7px]"
                />
                <p className="regular-16 text-center mt-8">
                    Neopolitan Delight
                    <br />
                    ₱120.00
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
                    src="/midnight_berry.png"
                    alt="midnight_berry"
                    width={80}
                    height={90}
                    className="mt-[12px]"
                />
                <p className="regular-16 text-center mt-3">
                    Midnight Berry Bliss
                    <br />
                    ₱145.00
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

export  default page