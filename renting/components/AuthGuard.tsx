// components/Profile.js
"use client"

import Image from "next/image";
import unauthorized from "@/public/assets/image/unauthorized.gif";
import { ReactNode } from "react";

interface AuthGuardProps {
   children: ReactNode,
}

const AuthGuard = ({children}: AuthGuardProps) => {

   const access = localStorage.getItem("isLoggedIn");
   return (
      <>
         {access === "true" ? (
            children
         ) : (
            <div className='h-screen flex items-center justify-center'>
               <Image src={unauthorized} width={500} height={500} alt="Unauthorized"></Image>
            </div>
         )}
      </>
   );
};

export default AuthGuard;
