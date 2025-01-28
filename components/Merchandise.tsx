import Image from 'next/image'
import React from 'react'

const page = () => {
  return (

   <section className="max-container padding-container flex flex-col bg-gradient-to-r from-[#536CB5] to-[#98A5C0] h-full w-full gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">


    <div className="flex flex-col items-start mt-5">
      <h2 className="bold-32 mb-1"> 
        MERCHANDISE
        <br />
        
      </h2>
    </div>
    
      <div className="flex flex-row justify-between gap-9">
        <div className="flex flex-col items-center">
          <Image 
            src="/"
            alt=""
            width={80}
            height={100}
            />  
            <p className="regular-16 text-center mt-5">
              
              <br />
              ₱
            </p>
          </div>
        </div>
  </section>
  )
}

export default page