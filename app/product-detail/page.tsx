"use client"
import img1 from "@/public/assets/image/products/harley 2.jpg";
import Image from "next/image";

const ProductDetail = () => {
   return (
      <div className="text-gray-700 body-font overflow-hidden bg-white">
         <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
               <Image alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={img1} />

               <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col justify-center">
                  <h1 className="text-gray-900 text-3xl font-medium mb-1">Harley Davidson</h1>
                  <span className="title-font font-medium text-2xl text-gray-900 mt-4">$58.00</span>

                  <p className="leading-relaxed mt-2 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod unde iure magni iste aut? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, id voluptatum eligendi vitae sed culpa quis? A, fugiat excepturi officia dignissimos natus minus voluptatibus alias.</p>

                  <h5 className="text-gray-900 leading-relaxed mt-2">Status: <span className="badge badge-accent text-white">Rent</span></h5>
                  <h5 className="text-gray-900 leading-relaxed mt-2">Condition: <span className="badge badge-accent text-white">Old</span></h5>
                  <div className="flex gap-4">
                     <button className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded-sm mt-4">Rent</button>
                     <button className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded-sm mt-4">Add to Cart</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ProductDetail