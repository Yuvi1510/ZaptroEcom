import { MapPin } from "lucide-react"
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { useState } from "react";
import { CgClose } from "react-icons/cg";


export default function NavBar({location, getLocation, openDropDown, setOpenDropDown}){
    
    return(
        <div className="bg-white py-3 shadow-2xl">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                {/* logo section  */}
                <div className="flex gap-7 items-center">
                    <Link to={"/"}><h1 className="font-bold text-3xl"><span className="text-red-500 font-serif">Z</span>aptro</h1></Link>
                    <div className="flex gap-1 cursor-pointer text-gray-700 items-center">
                        <MapPin className="text-red-500"/>
                        <span className="font-semibold">{location? <div>{`${location.city},${location.county},${location.country}`}</div>:"Add location"}</span>
                        <FaCaretDown onClick={()=>setOpenDropDown(!openDropDown)}/>
                    </div>
                    {
                        openDropDown? <div className="w-[250px]  h-max shadow-2xl z-50 bg-white fixed top-16 left-60 border-2 p-5 border-gray-100 rounded-md">
                            <h1 className="font-semibold mb-4 text-xl">Change Location <span className="cursor-pointer" onClick={()=>setOpenDropDown(false)}><CgClose className="inline"/></span></h1>
                            <button onClick={getLocation } className="bg-red-500 border rounded-md text-white px-3 py-1 cursor-pointer hover:bg-red-400">Detect My Location</button>
                        </div> : null
                    }
                </div>

                {/* menu section  */}
                <nav className="flex gap-7 items-center">
                    <ul className="flex gap-7 items-center text-xl font-semibold">
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/products"}>Products</NavLink></li>
                        <li><NavLink to={"/about"}>About</NavLink></li>
                        <li><NavLink to={"/contact"}>Contact</NavLink></li>
                    </ul>

                    <Link to={"/cart"} className="relative">
                        <IoCartOutline className="h-7 w-7" />
                        <span className="bg-red-500  px-2 rounded-full absolute -top-3 -right-3">0</span>
                    </Link>

                    <div>
                        <SignedOut>
                            <SignInButton className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer" />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                </nav>
            </div>
        </div>
    )
} 