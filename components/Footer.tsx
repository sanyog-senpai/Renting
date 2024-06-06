import React from 'react'
import Image from "next/image"
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiYoutubeFill } from "react-icons/ri";
import { RiLinkedinBoxFill } from "react-icons/ri"
import { SlLocationPin } from "react-icons/sl";
import { SlPhone } from "react-icons/sl";
import { SlEnvolope } from "react-icons/sl";
import Link from "next/link"

function Footer() {
  return (
    <footer className="bg-blue-100 text-white py-20 px-4">
      <div className="flex flex-wrap justify-between container mx-auto">

        <div className="w-full md:w-1/2 lg:w-1/3">
          <p  className='font-bold text-xl mb-2'>Rent Commerce</p>
          <p className="text-sm mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aliquam dolores.
          </p>
          <div className="social flex gap-5 mt-5 text-large-base">
            <Link href="/"><RiFacebookCircleFill className='text-md'/></Link>
            <Link href="/"><RiInstagramLine className='text-md'/></Link>
            <Link href="/"><RiLinkedinBoxFill className='text-md'/></Link>
            <Link href="/"><RiYoutubeFill className='text-md'/></Link>
          </div>
        </div>

          <div className="flex flex-col gap-y-2 space-y-2">
            <h5 className="font-bold text-lg mb-2">Contact Us</h5>
            <p className="text-sm hover:text-gray-400 flex gap-2 items-center">
              <SlEnvolope className="text-sm" /> srajbhandari888@gmail.com
            </p>
            <p className="text-sm hover:text-gray-400 flex gap-2 items-center">
              <SlPhone className="text-sm" /> +977 9860114706
            </p>
            <p className="text-sm hover:text-gray-400 flex gap-2 items-center">
              <SlLocationPin className="text-sm" /> Ghattekulo, Kathmandu
            </p>
          </div>
        </div>
    </footer>
  )
}

export default Footer