"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "./Button";

type ImageContainerProps = {
  imageSrc: string;
  imageAlt: string;
  imageHeight: number;
  imageWidth: number;
  title: string;
  price: number;
  description: string;
};

const ImageContainer = ({
  imageSrc,
  imageAlt,
  imageHeight,
  imageWidth,
  title,
  price,
  description,
}: ImageContainerProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="image-container">
      <div className="h-[120px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
        />
      </div>
      <p className="regular-16 text-center mt-2">
        {title}
        <br />
        <span className="text-black font-bold">₱{price.toFixed(2)}</span>
      </p>
      <div className="buy-btn">
        <h3
          className="text-btn cursor-pointer"
          onClick={() => setShowDetails(!showDetails)}
        >
          Details
        </h3>
        <Button type="button" title="Buy" variant="btn_dark" />
      </div>

      {showDetails && (
        <div className="details-container p-4 border rounded-md mt-2 bg-gradient-to-r from-[#3DB2C0] to-[#239EAB] shadow-2xl">
          <h4 className="bold-16">Product Details</h4>
          <p className="text-sm mt-1">{description}</p>
          <button
            className="mt-5 px-9 py-[2px] bg-gradient-to-r from-[#BA3429] to-[#994194] text-white rounded"
            onClick={() => setShowDetails(false)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageContainer;
