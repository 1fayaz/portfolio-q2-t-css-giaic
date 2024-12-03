import React from "react";
import { FaCalculator, FaUser, FaGamepad, FaCheck, FaFileAlt, FaUsers } from "react-icons/fa";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function projects()  {
  return (
   <div>
    <Header></Header>

    <div className="bg-gray-900 py-10 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-5">
        <h1 className="text-4xl mb-8 font-bold text-center ">My Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 p-6">
            <FaCalculator className="text-4xl text-green-400 mb-4" />
            <h2 className="text-2xl mb-2 font-semibold ">Calculator</h2>
            <p className="mb-2 text-gray-400 ">This Project is complete calculator built using HTML CSS JS and TS It supports Addition Subtraction Multiplication Division and Percentage operators</p>
            <div className="flex justify-between">
              <a href="#" className="text-green-400 hover:underline">View More Details</a>

              <a href="#" className="text-green-400 hover:underline">View Code</a>
            </div>
            </div>

         
          <div className="p-6 bg-gray-800 rounded-lg  shadow-lg hover:shadow-xl transition duration-300">
            <FaUser className="mb-4 text-4xl text-green-400 " />
            <h2 className="mb-2 text-2xl font-semibold ">Login Form</h2>
            <p className="text-gray-400 mb-4"> This project features a visually striking login form with dynamic animations that are activated by the Sign Up and Login actions elevating the overall user experience</p>
            <div className="flex justify-between">
              <a href="#" className="text-green-400 hover:underline">View More Details</a>

              <a href="#" className="text-green-400 hover:underline"> View Code</a>
            </div>
              </div>

          
          <div className="p-6 bg-gray-800 rounded-lg  shadow-lg hover:shadow-xl transition duration-300">
            <FaGamepad className="text-4xl text-green-400 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Snake Game</h2>
            <p className="mb-4 text-gray-400 ">This project showcases a classic Snake game created using HTML CSS and JavaScript Players strategically collect food while skillfully avoiding collisions with walls and their own tail providing an engaging challenge that enhances their gaming experience</p>
            <div className="flex justify-between">
              <a href="#" className="text-green-400 hover:underline">View More Details</a>

              <a href="#" className="text-green-400 hover:underline"> View Code </a>
            </div>
          </div>

      
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300">
            <FaCheck className="text-4xl text-green-400 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">To-Do List</h2>
            <p className="text-gray-400 mb-4">This To-Do List app delivers powerful task management through an intuitive interface Users can effortlessly add edit and delete tasks while local storage guarantees that their tasks are always saved and readily accessible</p>
            <div className="flex justify-between">
              <a href="#" className="text-green-400 hover:underline">View More Details</a>

              <a href="#" className="text-green-400 hover:underline">View Code</a>
            </div>
          </div>

         
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300">
            <FaFileAlt className="text-4xl text-green-400 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Portfolio Website</h2>
            <p className="text-gray-400 mb-4">This Portfolio Website effectively showcases my projects and skills in a sleek responsive layout highlighting my expertise in front-end development</p>
            <div className="flex justify-between">
              <a href="#" className="text-green-400 hover:underline"> View More Details</a>

              <a href="#" className="text-green-400 hover:underline">View Code</a>
         </div>
          </div>

          
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300">
            <FaUsers className="text-4xl text-green-400 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Another Login Form</h2>
            <p className="text-gray-400 mb-4"> This Login Form is expertly crafted with sleek styling elevating both the visual appeal and functionality of user authentication pages</p>
            <div className="flex justify-between">
              <a href="#" className="text-green-400 hover:underline">View More Details</a>

              <a href="#" className="text-green-400 hover:underline"> View Code</a>
       </div>
          </div>
           </div>
       </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default projects;
