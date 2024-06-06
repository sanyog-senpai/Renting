import Image from 'next/image'
import React from 'react'

import product from "@/public/assets/image/products/shoe.jpg"
import Container from '@/components/Container'

const Dashboard = () => {
  return (
    
    <Container className='h-screen pt-20'>
      <div className="overflow-x-auto">
        <h1 className='text-3xl'>Your Product Listing</h1>
        <table className="table w-full mt-5">
          {/* head */}
          <thead>
            <tr>
              <th>
                SNo
              </th>
              <th>Product</th>
              <th>Price</th>
              <th>Status</th>
              <th>Condition</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  1
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image src={product} width={50} height={50} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Shoes</div>
                  </div>
                </div>
              </td>
              <td>
                $50
                <br />
              </td>
              <td>

                <button className="badge badge-sm text-white bg-green-500">Rent</button>
              </td>
              <td>

                <button className="badge badge-sm text-white bg-orange-500">new</button>
              </td>
              <th className=''>
                <button className="btn btn-ghost btn-xs bg-green-300 me-2">approve</button>
                <button className="btn btn-ghost btn-xs bg-blue-300 me-2">edit</button>
                <button className="btn btn-ghost btn-xs bg-red-300">delete</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  )
}

export default Dashboard