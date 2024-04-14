import React from "react";
import { Navbar } from "./Navbar";
import Sidebar from "./SideBar";


export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            <div className="flex flex-col">
                <Navbar />
                <div className="flex flex-row">
                    <div>
                        <Sidebar />
                    </div>
                    <div className="justify-center items-center flex-grow">
                        <main>
                       
                            {children}
                           
                            
                            </main>
                    </div>
                </div>
            </div>
        </section>
    );
}
