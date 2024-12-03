import React from 'react';
import Link from 'next/link';

const Header:React.FC= () => {
  return (
    <nav className="bg-gray-800 flex justify-between items-center p-4">
      <div className="menu flex items-center">
        <h1 className='font-bold text-white text-2xl p-8'><span className='text-yellow-400 font-bold text-3xl '>F</span>ayaz ALI</h1>

        </div>
      <div className="links hidden md:flex items-center">
        <Link href="/home" className="text-white hover:bg-gray-700 p-4">Home</Link>
        <Link href="/aboutme" className="text-white hover:bg-gray-700 p-4">About Me</Link>
        <Link href="/projects" className="text-white hover:bg-gray-700 p-4">Projects</Link>
      </div>
   </nav>
  )};

export default Header;
