"use client"
import React from 'react';

interface ProductDetails {
   id: number;
   image: any;
   title: string;
   price: string;
   description: string,
   condition: string;
   status: string;
}

interface AddToCartProp {
   productId: number;
   className?: string;
}

const AddToCart: React.FC<AddToCartProp> = ({ productId, className }) => {

   const handleAddtoWishlist = (productId: number) => {
      console.log("Adding to cart", productId)
   }

   return (
      <>
         <button onClick={() => handleAddtoWishlist(productId)} className={`${className} btn`}>Add to Wishlist</button>
      </>
   )
}

export default AddToCart