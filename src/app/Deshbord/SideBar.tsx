
import React from "react";
import Link from "next/link";

export default function Sidebar() {
    return (
        <aside className="relative  h-screen flex flex-col bg-clip-border rounded-none bg-gray-900 from-gray-900 to-gray-800 text-white shadow-gray-900/20 shadow-md w-[200px] max-w-[20rem] p-8 border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200">
           <div className="p-0">
                <ul className="flex flex-col gap-4 text-3xl ">
                    <li className="flex  gap-4 hover:bg-gray-700 justify-start items-center rounded-md ">

                        <div className="block font-sans  justify-center items-center text-xl antialiased font-normal leading-relaxed text-inherit">
                          <Link href="/Deshbord">Deshbord </Link>
                        </div>
                    </li>
                    <li className="flex gap-4  hover:bg-gray-700 justify-start items-center rounded-md">
                        
                        <div className="block font-sans text-xl antialiased font-normal leading-relaxed text-inherit">
                        <Link href="/Deshbord/Account"> Account</Link>
                        </div>
                    </li>
                    <li className="flex gap-4  hover:bg-gray-700 justify-start items-center rounded-md">
                        
                        <div className="block font-sans text-xl antialiased font-normal leading-relaxed text-inherit">
                        <Link href="/Deshbord/Settings"> Settings</Link>
                        </div>
                    </li>
                    <li className="flex items-center gap-4  hover:bg-gray-700  rounded-md">
                    
                        <div className="block font-sans text-xl antialiased font-normal leading-relaxed text-inherit">
                        <Link href="/Deshbord/Billings"> Billings</Link>
                        </div>
                    </li>

                    <li className="flex items-center gap-4  hover:bg-gray-700  rounded-md">
                    
                        <div className="block font-sans text-xl antialiased font-normal leading-relaxed text-inherit">
                        <Link href="/Deshbord/user"> User</Link>
                        </div>
                    </li>
                
                </ul>
            </div>
            
        </aside>
    );
}
