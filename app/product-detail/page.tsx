"use client"

import img1 from "@/public/assets/image/products/harley 2.jpg";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ProductDetails, productDetails } from "@/utils/product.utils";
import { useEffect, useState } from "react";
import CardCollection from "@/components/CardType/CardCollection";
import Container from "@/components/Container";
import RentButton from "@/components/Rent Button";

const ProductDetail = () => {
   const [product, setProduct] = useState<ProductDetails[] | null>(null);

   useEffect(() => {
      setTimeout(() => {
         setProduct(productDetails);
      }, 500);
   }, []);

   return (
      <div className="text-gray-700 body-font overflow-hidden relative bg-white pt-28">
         <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto">
               <div className="lg:col-span-1">
                  <Swiper
                     slidesPerView={1}
                     modules={[Navigation, Pagination, Scrollbar, A11y]}
                     navigation
                     draggable={true}
                     pagination={{ clickable: true }}
                     className="w-full h-full"
                  >
                     <SwiperSlide>
                        <Image
                           alt="ecommerce"
                           className="object-cover object-center rounded border border-gray-200"
                           src={img1}
                           layout="responsive"
                           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                     </SwiperSlide>
                     <SwiperSlide>
                        <Image
                           alt="ecommerce"
                           className="object-cover object-center rounded border border-gray-200"
                           src={img1}
                           layout="responsive"
                           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                     </SwiperSlide>
                     <SwiperSlide>
                        <Image
                           alt="ecommerce"
                           className="object-cover object-center rounded border border-gray-200"
                           src={img1}
                           layout="responsive"
                           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                     </SwiperSlide>
                  </Swiper>
               </div>
               <div className="lg:col-span-1 flex flex-col justify-center">
                  <div>
                     <h1 className="text-gray-900 text-4xl font-bold mb-4">Harley Davidson</h1>
                     <p className="text-2xl text-gray-600 mb-4">$58.00</p>
                     <p className="text-gray-700 leading-relaxed mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod unde iure magni iste aut? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, id voluptatum eligendi vitae sed culpa quis? A, fugiat excepturi officia dignissimos natus minus voluptatibus alias.</p>
                     <div className="flex items-center space-x-4 mb-6">
                        <span className="text-lg font-medium text-gray-900">Status:</span>
                        <span className="badge badge-accent text-white bg-green-500 px-3 py-1 rounded-full">Rent</span>
                     </div>
                     <div className="flex items-center space-x-4 mb-8">
                        <span className="text-lg font-medium text-gray-900">Condition:</span>
                        <span className="badge badge-accent text-white bg-yellow-500 px-3 py-1 rounded-full">Old</span>
                     </div>
                     <RentButton />
                  </div>
               </div>
            </div>
            <CardCollection heading="Recommended Products" subheading="you may also like"  />
         </Container>
      </div>
   )
}

export default ProductDetail;
