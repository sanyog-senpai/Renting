"use client"

import Image from "next/image";
import { useEffect, useState } from 'react';


import Link from "next/link";
import { FaQuoteRight } from "react-icons/fa";
import AddToCart from "./AddToCart";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ProductDetails, productDetails } from "@/utils/product.utils";
import RentButton from "./Rent Button";



const Card: React.FC = () => {
  const [product, setProduct] = useState<ProductDetails[] | null>(null);
  useEffect(() => {
    setTimeout(() => {
      setProduct(productDetails);
    }, 500);
  }, []);

  return (
    <>
      {product?.map(productDetail => (
        <div key={productDetail.id} className="card relative max-w-[320px] rounded-xl shadow-lg">

          <Link href="/product-detail">
            <div className="swiper-container">
              <Swiper
                slidesPerView={1}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                navigation
                draggable={true}
                pagination={{ clickable: true }}
              >
                {productDetail.image.map((img: any, index: any) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={img}
                      alt={productDetail.title}
                      style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "12px" }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Link>

          <div className="card-body px-3 py-4 gap-2 ">
            <Link href="/product-detail">
              <h2 className="text-base font-semibold truncate">{productDetail?.title}
              </h2>
            </Link>
            <span className="text-h6 leading-none font-semibold text-blue-125 flex gap-2 items-center">
              <div>
                <span className="text-base">${" "}</span>
                {productDetail?.price}
              </div>
              <span className="badge badge-sm badge-accent text-white font-normal">{productDetail?.status}</span>
            </span>
            <div className="inline-flex items-center gap-1 mt-1 relative">
              <FaQuoteRight className='text-xl text-teal-500 top-0 right-0 opacity-40 absolute' />
              <p className='text-ellipsis overflow-hidden text-footer text-neutral-500 line-clamp-3'>
                {productDetail?.description}
              </p>
            </div>

            <div className="flex justify-stretch gap-2 w-full mt-4">
              <AddToCart className="grow" productId={productDetail?.id} />
              <RentButton className="grow" />
            </div>
          </div>

        </div>
      ))}

    </>
  );
}

export default Card;
