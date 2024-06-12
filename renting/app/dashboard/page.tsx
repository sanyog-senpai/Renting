"use client"

import Image from 'next/image';
import Container from '@/components/Container';
import product from "@/public/assets/image/products/shoe.jpg";
import Link from 'next/link';
import { styles, TableStyles } from '../styles';
import AuthGuard from '@/components/AuthGuard';
import { useEffect, useState } from 'react';

const Dashboard = () => {
  // const [role, setRole] = useState("");

  // useEffect(() => {
  //   const roleFromStorage = localStorage.getItem("role") || "";
  //   setRole(roleFromStorage);
  // }, []);

  const adminDashboard = () => (
    <div className="overflow-x-auto rounded-lg">
      <h2 className={styles.sectionHeadText}>Pending Post from Renter</h2>
      <table className="w-full mt-5 border-collapse border-2 border-gray-300 rounded-lg">
        <thead className="text-sm text-slate-900">
          <tr>
            <th className={`${TableStyles.borderStyle} p-3 text-center`}>SNo</th>
            <th className={`${TableStyles.borderStyle} p-3 text-center`}>Product</th>
            <th className={`${TableStyles.borderStyle} p-3 text-center`}>Price</th>
            <th className={`${TableStyles.borderStyle} p-3 text-center`}>Status</th>
            <th className={`${TableStyles.borderStyle} p-3 text-center`}>Condition</th>
            <th className={`${TableStyles.borderStyle} p-3 text-center`}>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white hover:bg-gray-50">
            <td className={`${TableStyles.borderStyle} p-3 text-center`}>1</td>
            <td className={`${TableStyles.borderStyle} p-3 border-gray-300`}>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <Image src={product} width={50} height={50} alt="Product Image" />
                  </div>
                </div>
                <div>
                  <p className="font-bold">Shoes</p>
                  <Link href='/'>
                    <p className="font-light font-xs leading-none underline">View Details</p>
                  </Link>
                </div>
              </div>
            </td>
            <td className={`${TableStyles.borderStyle} p-3 text-center`}>$50</td>
            <td className={`${TableStyles.borderStyle} p-3 text-center`}>
              <span className="badge badge-sm text-white bg-green-500">Rent</span>
            </td>
            <td className={`${TableStyles.borderStyle} p-3 text-center`}>
              <span className="badge badge-sm text-white bg-orange-500">New</span>
            </td>
            <td className={`${TableStyles.borderStyle} p-3 text-center`}>
              <button className="btn btn-ghost btn-xs bg-green-300 hover:bg-green-500 hover:text-white me-2 transition-all">Approve</button>
              <button className="btn btn-ghost btn-xs bg-blue-300 hover:bg-blue-500 me-2 hover:text-white">Edit</button>
              <button className="btn btn-ghost btn-xs bg-red-300 hover:bg-red-500 hover:text-white">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  const renterDashboard = () => (
    <div className="overflow-x-auto rounded-lg">
      <h2 className={styles.sectionHeadText}>Your Listings</h2>
      <table className="w-full mt-5 border-collapse border-2 border-gray-300 rounded-lg">
        <thead className="text-sm text-slate-900">
          <tr>
            <th className={`${TableStyles.borderStyle} p-3 text-center`}>SNo</th>
            <th className={`${TableStyles.borderStyle} p-3 text-center`}>Product</th>
            <th className={`${TableStyles.borderStyle} p-3 text-center`}>Price</th>
            <th className={`${TableStyles.borderStyle} p-3 text-center`}>Status</th>
            <th className={`${TableStyles.borderStyle} p-3 text-center`}>Condition</th>
            <th className={`${TableStyles.borderStyle} p-3 text-center`}>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white hover:bg-gray-50">
            <td className={`${TableStyles.borderStyle} p-3 text-center`}>1</td>
            <td className={`${TableStyles.borderStyle} p-3 border-gray-300`}>
              <div className="flex items-center gap-3 text-start">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <Image src={product} width={50} height={50} alt="Product Image" />
                  </div>
                </div>
                <div>
                  <p className="font-bold">Shoes</p>
                  <Link href='/'>
                    <p className="font-light font-xs leading-none underline">View Details</p>
                  </Link>
                </div>
              </div>
            </td>
            <td className={`${TableStyles.borderStyle} p-3 text-center`}>$50</td>
            <td className={`${TableStyles.borderStyle} p-3 text-center`}>
              <span className="badge badge-sm text-white bg-green-500">Rent</span>
            </td>
            <td className={`${TableStyles.borderStyle} p-3 text-center`}>
              <span className="badge badge-sm text-white bg-orange-500">New</span>
            </td>
            <td className={`${TableStyles.borderStyle} p-3 text-center`}>
              <button className="btn btn-ghost btn-xs bg-blue-300 hover:bg-blue-500 me-2 hover:text-white">Edit</button>
              <button className="btn btn-ghost btn-xs bg-red-300 hover:bg-red-500 hover:text-white">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <Container className='h-screen pt-20'>
      {/* <AuthGuard> */}
        {false ? adminDashboard() : renterDashboard()}
      {/* </AuthGuard> */}
    </Container>
  );
};

export default Dashboard;
