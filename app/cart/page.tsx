import Container from '@/components/Container'
import Image from 'next/image'
import React from 'react'
import img1 from '@/public/assets/image/products/car 2.jpg'
import AuthGuard from '@/components/AuthGuard'

const Cart = () => {
  return (
    <>
      <AuthGuard>
        <div className='h-screen flex justify-center items-center'>
          <Container>
            <h1 className="mb-10 text-2xl font-bold">Cart Items</h1>
            <div className="">
              <div className="rounded-lg">
                <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                  <Image width={500} height={500} src={img1} alt="product-image" className="w-full rounded-lg sm:w-40" />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900">Mustang GT</h2>
                      <div className="flex items-center space-x-4 mt-1 text-xs sm:justify-space-between">
                        <span className="font-medium text-gray-900">Condition:</span>
                        <span className="badge badge-sm badge-accent text-white bg-green-500 px-3 py-1 rounded-full">old</span>
                      </div>
                      <div className="flex items-center space-x-4 mt-1 text-xs">
                        <span className="font-medium text-gray-900">Status:</span>
                        <span className="badge badge-sm badge-accent text-white bg-green-500 px-3 py-1 rounded-full">Rent</span>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">

                      <div className="flex flex-col justify-center space-x-4">
                        <p className="text-3xl">$5000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </AuthGuard>
    </>
  )
}

export default Cart