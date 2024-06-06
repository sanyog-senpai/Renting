"use client"
import { add } from '@/libs/features/wishlist/wishListSlice';
import { useAppDispatch } from '@/libs/hook';
import React, { useState } from 'react'

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
}

const AddToCart: React.FC<AddToCartProp> = ({ productId }) => {
   const [product, setProduct] = useState<ProductDetails[] | null>(null);

   const dispatch = useAppDispatch();

   const handleAddtoWishlist = (productId: number) => {
      console.log("Adding to cart", productId)
      dispatch(add(productId))
   }
   return (
      <>
         <button onClick={() => handleAddtoWishlist(productId)} className="btn">Add to Wishlist</button>
      </>
   )
}

export default AddToCart