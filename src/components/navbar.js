"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function NavLink({ to, children }) {
  return (
    <Link href={to} className={`mx-4`}>
      {children}
    </Link>
  );
}
function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-[#F36523] transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex items-center justify-center pt-5 ">
        {/*logo container*/}
        <Link className="text-xl font-semibold" href="/">
          ENKAPUNE
        </Link>
      </div>
      <div className="flex flex-col ml-4 mt-6a">
      <Link
          className=" uppercase font-medium my-4"
          href="/home"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Home
        </Link>
      <Link
          className=" uppercase font-medium my-4"
          href="/about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Service
        </Link>
        <Link
          className=" uppercase font-medium my-4"
          href="/about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          About
        </Link>
        <Link
          className="uppercase font-medium my-4"
          href="/contact"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="backdrop-blur-lg bg-transparent fixed w-full z-20 top-0 left-0 px-4 lg:px-[60px]">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="flex items-center justify-between pt-4 pb-2 border-b border-[#453E3B] ">
        <Link className="text-2xl font-semibold" href="/">
          <Image src="/img/enkapune.svg" height={120} width={120} alt="enkapune logo" />
        </Link>


          <div
            className="z-50 flex relative w-7 h-5 flex-col justify-between items-center md:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {/* hamburger button */}
            <span
              className={`h-0.5 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
                open ? "rotate-45 translate-y-[9px]" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-white rounded-lg transition-all transform  duration-300 ease-in-out ${
                open ? "-translate-x-full opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
                open ? "-rotate-45 -translate-y-[9px]" : ""
              }`}
            />
          </div>

          <div className="hidden md:flex">
            <NavLink to="/contact">HOME</NavLink>
            <NavLink to="/contact">SERVICES</NavLink>
            <NavLink to="/about">ABOUT</NavLink>
            <NavLink to="/about">GALLERY</NavLink>
          </div>
          <div className="hidden md:flex">
            <div className="px-4 py-2 border border-[#EBB9A1]">
                <Link className="uppercase" href="#contact">Contact us</Link>
            </div>
          </div>
      </div>
    </nav>
  );
}

export default Navbar;
