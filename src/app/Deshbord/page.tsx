import React from "react";
import Layout from "../Deshbord/Layout"
import Home from "./DeshbordPanal/page";
export default function Deshbord (){
   return (
    <Layout>
        <div className="flex  justify-center align-middle">
            
            <Home/>
        </div>
        </Layout> 
    );
}