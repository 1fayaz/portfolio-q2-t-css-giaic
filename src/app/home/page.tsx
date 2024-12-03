import React from "react";
import Image from "next/image";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const home=()=>{
   return(
         <div>
          <Header></Header>
          <div className="container flex items-center p-12 max-w-10xl mx-auto bg-gray-900 shadow-md">
            <div className="image-container flex-1 pl-5">
              <Image src='/images/p9.png' alt="" className=" rounded-full " width={800} height={300} />
            </div>
            <div className="text-container flex-1 pl-5">
              
              <h1 className="text-4xl my-10 text-white">
                HI I am <span className="text-yellow-400 font-semibold">Fayaz ALI  </span>.
              </h1>
              <p className="mb-4 text-white">
                Full-Stack Developer 
              </p>
              
             
            </div>
          </div>
          <Footer></Footer>
        </div>
)
};
export default home;
      
