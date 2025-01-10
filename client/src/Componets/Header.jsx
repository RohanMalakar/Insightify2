import React, { useState } from "react";
import { IoMenu, IoHome } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import { BsChatRightDots } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import logo from "../assets/Images/logo.gif";


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full text-white bg-[#11171B] z-50 shadow-md">
      {/* Main header container */}
      <div className="flex justify-between items-center px-6 md:px-10">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-2xl font-extrabold">
             <img className="h-16" src={logo} alt="logo" />
          </Link>
        </div>

        {/* Hamburger menu button for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-red-700 focus:outline-none"
          >
            {menuOpen ? <ImCross /> : <IoMenu />}
          </button>
        </div>

        {/* Navigation menu for desktop */}
        <ul className="hidden md:flex space-x-8 items-center">
          <li>
            <Link className="flex items-center gap-2" to="/">
              <IoHome className="text-2xl text-purple-500 hover:text-teal-300" />
              <span className="text-lg font-bold hover:text-teal-300">Home</span>
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-2" to="/chat">
              <BsChatRightDots className="text-2xl text-purple-500 hover:text-teal-300" />
              <span className="text-lg font-bold hover:text-teal-300">Chat</span>
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-2" to="/ourteam">
              <RiTeamFill className="text-2xl text-purple-500 hover:text-teal-300" />
              <span className="text-lg font-bold hover:text-teal-300">Our Team</span>
            </Link>
          </li>
          <li
            onClick={() => {
              window.open("https://github.com/RohanMalakar/Insightify2", "_blank");
            }}
          >
            <Link className="flex items-center gap-2">
              <FaGithub className="text-2xl text-purple-500 hover:text-teal-300" />
              <span className="text-lg font-bold hover:text-teal-300">Github</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black shadow-md py-4">
          <ul className="space-y-4 px-6">
            <li>
              <Link
                className="flex items-center gap-2"
                to="/"
                onClick={() => setMenuOpen(false)}
              >
                <IoHome className="text-2xl text-purple-600 hover:text-teal-300" />
                <span className="text-lg font-bold hover:text-teal-300">Home</span>
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-2"
                to="/chat"
                onClick={() => setMenuOpen(false)}
              >
                <BsChatRightDots className="text-2xl text-purple-600 hover:text-teal-300" />
                <span className="text-lg font-bold hover:text-teal-300">Chat</span>
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-2"
                to="/ourteam"
                onClick={() => setMenuOpen(false)}
              >
                <RiTeamFill className="text-2xl text-purple-600 hover:text-teal-300" />
                <span className="text-lg font-bold hover:text-teal-300">Our Team</span>
              </Link>
            </li>
            <li
              onClick={() => {
                window.open("https://github.com/RohanMalakar/Insightify2", "_blank");
                setMenuOpen(false);
              }}
            >
              <Link className="flex items-center gap-2">
                <FaGithub className="text-2xl text-purple-600 hover:text-teal-300" />
                <span className="text-lg font-bold hover:text-teal-300">Github</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
