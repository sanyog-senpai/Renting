// components/Profile.js
"use client"
import AuthGuard from "@/components/AuthGuard";
import userImg from "@/public/assets/image/user.jpg";
import Image from "next/image";

const Profile = () => {
  const user = {
    fullName: "John Doe",
    email: "johndoe@gmail.com",
    role: "renter"
  }
  const access = localStorage.getItem("isLoggedIn");
  return (
    <>
    {/* <AuthGuard> */}
      <div className=" h-screen flex items-center justify-center ">
        <div className=" max-w-sm mx-auto flex flex-col items-center my-4 p-8 bg-white shadow-md rounded-lg">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <Image src={userImg} width={500} height={500} alt={user.fullName} />
            </div>
          </div>
          <div className="text-center mt-4 flex gap-5 flex-col items-center">
            <h2 className="text-xl font-semibold">{user.fullName}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-50 badge badge-success">{user.role === 'renter' ? "Renter" : "unidentified"}</p>
          </div>
        </div>
      </div>
    {/* </AuthGuard> */}
    
    </>
  );
};

export default Profile;
