import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/image.png";
import {useClerk,UserButton,useUser} from '@clerk/clerk-react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

const{user}=useUser()
const{openSignIn}=useClerk()


  return (
    <div className="text-sm text-white w-full fixed z-1">
      {/* Top offer bar */}
      <div className="text-center font-medium py-2 bg-gradient-to-r from-violet-500 via-[#9938CA] to-[#E0724A]">
        <p>
          Exclusive Price Drop! Hurry,{" "}
          <span className="underline underline-offset-2">
            Offer Ends Soon!
          </span>
        </p>
      </div>

      {/* Main Navbar */}
      <nav className=" relative h-[70px] flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-white text-gray-900 transition-all shadow">
        {/* Logo */}
        <Link to="/" className="flex items-center">
            {/* simplified logo paths */}
           <img src={logo} alt="" className="h-10"/>
          
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden text-2xl md:flex items-center space-x-8 md:pl-28">
          <li>
            <Link to="/" className="hover:text-indigo-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-indigo-600">
              About
            </Link>
          </li>
          <li>
            <Link to="/course" className="hover:text-indigo-600">
              Courses
            </Link>
          </li>
          <li>
            <Link to="/roadmaps" className="hover:text-indigo-600">
              Roadmaps
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-indigo-600">
              Contact
            </Link>
          </li>
        </ul>
         {
              user ? <UserButton/>:(
                <button 
  onClick={openSignIn} 
  className="hidden sm:flex bg-white text-gray-900 border border-gray-400 text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full items-center justify-center"
>
  Get Started
</button>

              )
            }
 
        {/* Mobile menu button */}
        <button
          aria-label="menu-btn"
          type="button"
          className="menu-btn inline-block md:hidden active:scale-90 transition"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="mobile-menu absolute top-[70px] left-0 w-full bg-white shadow-sm p-6 md:hidden">
            <ul className="flex flex-col space-y-4 text-lg">
              <li>
                <Link
                  to="/"
                  className="text-sm hover:text-indigo-600"
                  onClick={() => setMobileOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm hover:text-indigo-600"
                  onClick={() => setMobileOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/course"
                  className="text-sm hover:text-indigo-600"
                  onClick={() => setMobileOpen(false)}
                >
                  Courses
                </Link>
              </li>
               <li>
                <Link
                  to="/roadmaps"
                  className="text-sm hover:text-indigo-600"
                  onClick={() => setMobileOpen(false)}
                >
                  Roadmaps
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm hover:text-indigo-600"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>

             {
              user ? <UserButton/>:(
               <button onClick={openSignIn} className="bg-white text-gray-900 border border-gray-400 text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full flex items-center justify-center">Get Started</button>
              )
            }
            </div>
        )}
      </nav>
    </div>
  );
}
