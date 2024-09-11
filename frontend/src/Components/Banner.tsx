import React, { useState } from 'react';
import BannerImage from '../assets/images/image.png';
import GirlImage from '../assets/images/sofaSittingGirl.png'; // update path accordingly
import review from '../assets/images/Group 6.png'
import game from '../assets/images/Group 7.png'
import run from '../assets/images/Group 8.png'
import people from '../assets/images/Group 9.png'

const Banner: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat md:h-[110vh] w-full"
        style={{ backgroundImage: `url(${BannerImage}) ` }}
      >
        <div className=''>
          <div className="p-4 bg-gradient-to-r from-gray-800 to-black opacity-80 ">
            {/* Mobile Menu Button */}
            <button
              className="block md:hidden p-2 w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>

            {/* Navbar for larger screens */}
            <div className={`container mx-auto flex justify-between items-center`}>
              <div className="flex-1"></div>

              {/* Centered Links */}
              <nav className="hidden md:flex space-x-8 justify-center">
                <a href="#" className="text-white text-lg hover:text-green-300">
                  Home
                </a>
                <a href="#" className="text-white text-lg hover:text-green-300">
                  About us
                </a>
                <a href="#" className="text-white text-lg hover:text-green-300">
                  Courses
                </a>
                <a href="#" className="text-white text-lg hover:text-green-300">
                  Gallery
                </a>
              </nav>

              {/* Right Section: Contact Button */}
              <div className=" hidden md:flex flex-1 space-x-16 flex justify-center">
                <a
                  href="#"
                  className="px-4 py-2 text-lg bg-transparent border-2 border-green-300 text-green-300 rounded-full hover:bg-green-300 hover:text-white transition"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <nav className="md:hidden flex flex-col space-y-4 mt-4 text-center">
                <a href="#" className="text-white text-lg hover:text-green-300">
                  Home
                </a>
                <a href="#" className="text-white text-lg hover:text-green-300">
                  About us
                </a>
                <a href="#" className="text-white text-lg hover:text-green-300">
                  Courses
                </a>
                <a href="#" className="text-white text-lg hover:text-green-300">
                  Gallery
                </a>
                <a
                  href="#"
                  className="px-4 py-2 text-lg bg-transparent border-2 border-green-300 text-green-300 rounded-full hover:bg-green-300 hover:text-white transition"
                >
                  Contact
                </a>
              </nav>
            )}
          </div>
          <hr className="mx-20 px-20 border-gray-400 drop-shadow-lg opacity-50" />
        </div>
<div className=" relative hidden md:flex flex-col lg:flex-row
        items-center justify-between w-full h-[80vh] lg:h-[100vh] py-0 lg:px-18 bg-cover bg-center pt-0 mb-0 pb-20 ">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-800 to-black opacity-80 pt-0 mt-0"></div>
          <div className=" lg:pl-14 relative z-10 lg:w-1/2 flex flex-col items-start justify-center text-left pt-0 mt-0 lg:py-0 text-white">
            <div className="sm:flex sm:items-start sm:justify-end flex flex-col items-center w-full sm:text-left text-center lg:pt-10 mt-10">
              <p className="text-lg  lg:text-2xl font-light mb-4 mt-0 lg:pl-10" >
                Professional Certification & Degree Programs
              </p>
              <h1 className="text-4xl lg:text-6xl font-normal mb-6 lg:pl-6">
                Accelerate your <span className="text-emerald-400">Career <br /> Growth</span> &
                Upskill Yourself
              </h1>

              {/* Email input */}
              <div className="flex items-center bg-gray-800 rounded-full px-4 py-2 w-2/3 max-w-xl text-gray-100 border border-white sm:mx-0 mx-auto lg:ml-10" >
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="bg-transparent text-white outline-none w-full placeholder-gray-400"
                />
                <button
                  className="bg-emerald-500 text-black font-semibold px-6 py-2 rounded-full hover:bg-emerald-600 transition duration-300"
                >
                  Send
                </button>
              </div>
            </div>
            {/* Icons Section */}
            <div className=" grid grid-cols-2 sm:grid-cols-2  gap-6 mt-4 py-8 lg:grid-cols-4 lg:pl-10">
              <div className="flex flex-col items-center text-center bg-opacity-50 p-4 rounded-lg w-48 h-48">
                <img src={review} alt="Description" className="w-full h-full object-cover" />
              </div>

              <div className="flex flex-col items-center text-center bg-opacity-50 p-4 rounded-lg w-48 h-48">
                <img src={run} alt="Description" className="w-full h-full object-cover" />
              </div>

              <div className=" hidden md:block flex flex-col items-center text-center bg-opacity-50 p-4 rounded-lg w-48 h-48">
                <img src={game} alt="Description" className="w-full h-full object-cover" />
              </div>

              <div className=" hidden md:block  flex flex-col items-center text-center bg-opacity-50 p-4 rounded-lg w-48 h-48">
                <img src={people} alt="Description" className="w-full h-full object-cover" />
              </div>
            </div>

          </div>

          {/* Image Section */}
          <div className="relative z-10 w-full lg:w-1/2 flex justify-center lg:justify-end mt-4 lg:mt-0 pt-16 ">
            <img
              src={GirlImage}
              alt="Banner"
              className="object-contain h-auto w-2/3 md:w-3/4 lg:w-full"
            />
          </div>
        </div>


              {/*mobile view */}
        <div className="relative md:hidden flex flex-col lg:flex-row
        items-center justify-between w-full min-h-screen  lg:h-[100vh] py-0 lg:px-18 bg-cover bg-center pt-0 mb-0 pb-20 text-white bg-gradient-to-r from-gray-800 to-black opacity-80">
            <div className="sm:flex sm:items-start sm:justify-end flex flex-col items-center w-full sm:text-left text-center lg:pt-10 mt-10 ">
              <p className="text-lg  lg:text-2xl font-light mb-4 mt-0 lg:pl-10" >
                Professional Certification & Degree Programs
              </p>
              <h1 className="text-4xl lg:text-6xl font-normal mb-6 lg:pl-6">
                Accelerate your <span className="text-emerald-400">Career <br /> Growth</span> &
                Upskill Yourself
              </h1>
{/* Email input */}
              <div className="flex items-center bg-gray-800 rounded-full px-4 py-2 w-2/3 max-w-xl text-gray-100 border border-white sm:mx-0 mx-auto lg:ml-10" >
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="bg-transparent text-white outline-none w-full placeholder-gray-400"
                />
                <button
                  className="bg-emerald-500 text-black font-semibold px-6 py-2 rounded-full hover:bg-emerald-600 transition duration-300"
                >
                  Send
                </button>
              </div>
            </div>
          <div className="relative z-10 w-full lg:w-1/2 flex justify-center lg:justify-end mt-4 lg:mt-0 pt-16 ">
            <img
              src={GirlImage}
              alt="Banner"
              className="object-contain h-auto w-2/3 md:w-3/4 lg:w-full"
            />
          </div>
            <div className=" grid grid-cols-2 sm:grid-cols-2  gap-6 mt-4 py-8 lg:grid-cols-4 lg:pl-10">
              <div className="flex flex-col items-center text-center bg-opacity-50 p-4 rounded-lg w-48 h-48">
                <img src={review} alt="Description" className="w-full h-full object-cover" />
              </div>

              <div className="flex flex-col items-center text-center bg-opacity-50 p-4 rounded-lg w-48 h-48">
                <img src={run} alt="Description" className="w-full h-full object-cover" />
              </div>

              <div className=" hidden md:block flex flex-col items-center text-center bg-opacity-50 p-4 rounded-lg w-48 h-48">
                <img src={game} alt="Description" className="w-full h-full object-cover" />
              </div>

              <div className=" hidden md:block  flex flex-col items-center text-center bg-opacity-50 p-4 rounded-lg w-48 h-48">
                <img src={people} alt="Description" className="w-full h-full object-cover" />
              </div>
            </div>
        </div>

      </div>
    </>
  )
};

export default Banner;
