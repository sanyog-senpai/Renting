/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useEffect, useState } from 'react'
import Link from "next/link"
import Image from 'next/image'
import avatarIcon from './../public/assets/image/user.jpg'
import { usePathname, useRouter } from 'next/navigation'
import { NavStyles, ButtonStyles } from '@/app/styles'
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { useAppSelector } from '@/libs/hook'
import { constants } from 'buffer'


const Nav = () => {
    const [show, setShow] = useState(`${NavStyles.top}`);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const pathname = usePathname();

    const controlNavbar = () => {
        // console.log(window.scrollY)
        if (window.scrollY > 250) {
            if (window.scrollY > lastScrollY && !mobileMenu) {
                setShow(`${NavStyles.hide}`)
            } else {
                setShow(`${NavStyles.show}`)
            }
        }
        setLastScrollY(window.scrollY)
    }

    const openMobileMenu = () => {
        setMobileMenu(true);
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar)
        // to prevent memory leakage
        return () => {
            window.removeEventListener("scroll", controlNavbar)
        }
    }, [lastScrollY])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])

    const stats = localStorage.getItem("isLoggedIn")

    let userLogin = stats === "true" ? true : false

    const items = useAppSelector(state => state.wishlist.items)

    const router = useRouter()

    const handleLogout =() =>{
        // Delete the cookie by setting its expiration date to a past date
        document.cookie = 'cookieName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

        localStorage.removeItem('isLoggedIn');
        router.push('/login');
    }

    return (
        <header className={`${NavStyles.header} ${mobileMenu ? "mobileMenu" : ""} ${show}`}>

            <nav className="container relative flex justify-between items-center ">
                <Link href="/">
                    <h1 className="font-bold text-xl text-white">Rent Commerce</h1>
                </Link>

                <ul className="text-white flex items-center gap-6 max-md:hidden">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/">Contact Us</Link></li>

                    {userLogin ? (
                        <>
                            <li><Link href="/product-post">Post Product</Link></li>
                            <li>
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-sm btn-ghost btn-circle">
                                        <div className="indicator">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                            <span className="badge badge-sm indicator-item">
                                                {items.length}
                                            </span>
                                        </div>
                                    </div>
                                    <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-slate-200 shadow text-slate-900">
                                        <div className="card-body p-4">
                                            <Link href="/cart">
                                                View My Cart
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-9 rounded-full">
                                            <Image src={avatarIcon} width={100} height={100} alt="App Logo" />
                                        </div>
                                    </div>
                                    <ul tabIndex={1} className="menu menu-sm dropdown-content dropdown-start mt-3 z-[1] py-4 shadow bg-slate-200 rounded-box w-48 text-slate-900">
                                        <li>
                                            <Link href="/profile" className="justify-between">
                                                My Profile
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/dashboard" className="justify-between">
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li>
                                            <button onClick={handleLogout}>
                                                Log out
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </>

                    ) : (
                        <>
                            <li>
                                <Link href="/login">
                                    <div className={`${ButtonStyles.primaryButton}`}>Sign In</div>
                                </Link>
                            </li>
                        </>
                    )}


                </ul>

                <ul className="mobileMenuItems md:hidden">
                    <li className="text-large-base text-white">
                        {mobileMenu ? (<RxCross2 onClick={() => { setMobileMenu(false) }} />) : (<BiMenuAltRight onClick={openMobileMenu} />)}
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav