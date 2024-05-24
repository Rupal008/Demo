
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope  } from 'react-icons/fa';
import letterCarfts from "../assets/Image/letterCarfts.png"
import { Icon } from "@iconify/react";
// import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);

  return (
    <nav className="bg-[#101D2E] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl">
          <Link to="/"><img src={letterCarfts} alt=''/></Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              )}
            </svg>
          </button>
        </div>
        <div className={`md:flex items-center ${isOpen ? 'block' : 'hidden'}`}>
          <Link to="/home" className="text-white hover:text-gray-300 block mt-4 md:inline-block md:mt-0 md:ml-6">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300 block mt-4 md:inline-block md:mt-0 md:ml-6">
            About
          </Link>
          <Link to="/industry" className="text-white hover:text-gray-300 block mt-4 md:inline-block md:mt-0 md:ml-6 ">
          <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-white focus:outline-none"
          >
             Services <Icon  icon="uiw:down"  className='inline-flex ml-1' />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-[#101d2e] rounded-md shadow-lg py-2 z-20">
              {/* <Link to="/careers" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Careers</Link> */}
            </div>
          )}
        </div>
            {/* Services
            <Icon  icon="uiw:down"  className='inline-flex ml-1' /> */}
            {/* <FaChevronDown style={{color:'#ffffff',justifyContent:'space-around'}}/> */}
          </Link>
          <Link to="/languages" className="text-white hover:text-gray-300 block mt-4 md:inline-block md:mt-0 md:ml-6">
          <div className="relative">
          <button
            onClick={() => setIsDropdownOpen1(!isDropdownOpen1)}
            className="text-white focus:outline-none"
          >
             Languages <Icon  icon="uiw:down"  className='inline-flex ml-1' />
          </button>
          {isDropdownOpen1 && (
            <div className="absolute right-0 mt-2 w-48 bg-[#101d2e] rounded-md shadow-lg py-2 z-20">
              {/* <a href="/certified_translations" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Certified Translations</a>
              <a href="/industry_page" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Industry Page</a> */}
            </div>
          )}
        </div>
          </Link>
          <Link to="/careers" className="text-white hover:text-gray-300 block mt-4 md:inline-block md:mt-0 md:ml-6">
          ePayments
          </Link>
          <Link to="/certified_translation" className="text-white hover:text-gray-300 block mt-4 md:inline-block md:mt-0 md:ml-6">
          Blog
          </Link>
          <Link to="/contact_us" className="text-white hover:text-gray-300 block mt-4 md:inline-block md:mt-0 md:ml-6">
          Contact
          </Link>
          <button href="mailto:info@example.com" className="text-white block mt-4 md:hidden sm:inline-block md:mt-0 md:ml-6 bg-[#3D65FF] hover:bg-blue-700 rounded-full p-2 lg:block  ">
            <FaEnvelope className="inline mr-1" />info@lettercrafts.org
          </button>
          <button href="tel:+1234567890" className="text-white  hover:bg-blue-700 block mt-4 lg:block md:hidden sm:block md:mt-0 md:ml-6 bg-[#3D65FF] rounded-full p-2">
           <Icon icon="mdi:phone" className='inline-flex mr-1' /> 
            +65 67110135
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



