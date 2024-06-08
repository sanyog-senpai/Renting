"use client"
import React from 'react';

interface RentButtonProps {
   className?: string,
}

const RentButton: React.FC<RentButtonProps> = ({className}) => {
   const handleRent = (productId: number) => {
      console.log("Renting", productId)

   }
   return (
      <>
         <button onClick={() => handleRent} className={`${className} btn  bg-green-600 hover:bg-green-700 text-white px-10`}>Rent</button>
      </>
   )
}

export default RentButton