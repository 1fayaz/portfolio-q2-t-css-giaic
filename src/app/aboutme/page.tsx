import React from "react";

import Image from 'next/image';

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const aboutme=()=>{
   return(
         <div>
          <Header></Header>
          <div className="container flex items-center p-12 max-w-10xl mx-auto bg-gray-900 shadow-md">
            <div className="image-container flex-1 pr-5">
              <Image src='/images/p7.jpeg' alt="" className="w-full rounded-lg shadow-sm" width={1200} height={800}/>
            </div>
            <div className="text-container flex-1 pl-5">
              <h3 className="text-4xl justify-center items-center py-6 font-bold text-white">About Me</h3>
             
              <p className="mb-4 text-gray-500">
              I m a Full Stack Developer pursuing a degree in Programming and I m passionate
               about transforming ideas into impactful web solutions My tech journey started 
               with the Governor Sindh Initiative for GenAl where I dove into Web3 and the Metaverse
               driven by an insatiable curiosity about the inner workings of technology This fascination 
               has evolved into a strong commitment to creating seamless user experiences

              With a solid foundation in front-end technologies like HTML CSS and JavaScript
              as well as proficiency in Next js Node js  Git and GitHub I excel at turning 
              complex challenges into intuitive solutions I thrive on pushing the boundaries of
               what s possible on the web

              Looking ahead I m excited to expand my skill set in Python AI Prompt Engineering
              and AI Agents as part of my academic journey I ve already embarked on projects in these
               areas further honing my expertise

              When I m not coding you ll find me staying ahead of the latest tech trends working on 
              personal projects or exploring my creative side I m always eager to learn grow and
               tackle new challenges head-on


              </p>
              
             
            </div>
          </div>
          <Footer></Footer>
        </div>
)
};
export default aboutme;
      
