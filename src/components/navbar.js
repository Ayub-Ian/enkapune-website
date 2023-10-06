"use client";

import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
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
          href="/"
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
          href="/"
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
          href="/"
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
          href="/gallery"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Gallery
        </Link>
      </div>
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="backdrop-blur-lg bg-[#2C2421] fixed w-full z-20 top-0 left-0 px-4 lg:px-[60px] group ">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="flex items-center justify-between pt-4 pb-2 border-b border-[#453E3B] ">
        <Link className="text-2xl font-semibold" href="/">
          <Image src="/img/enkapune.svg" height={120} width={120} alt="enkapune logo" className="h-auto w-auto" />
        </Link>


          <div
            className="z-50 flex relative w-7 h-5 flex-col justify-between items-center md:hidden "
            onClick={() => {
              setOpen(!open);
            }}
          >
            {/* hamburger button */}
            <span
              className={`h-0.5 w-full bg-[#F36523] rounded-lg transform transition duration-300 ease-in-out ${
                open ? "rotate-45 translate-y-[9px] bg-white" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-[#F36523] rounded-lg transition-all transform  duration-300 ease-in-out ${
                open ? "-translate-x-full opacity-0 bg-white" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-[#F36523] rounded-lg transform transition duration-300 ease-in-out ${
                open ? "-rotate-45 -translate-y-[9px] bg-white" : ""
              }`}
            />
          </div>

          <div className="hidden md:flex monty font-medium">
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/">SERVICES</NavLink>
            <NavLink to="/">ABOUT</NavLink>
            <NavLink to="/gallery">GALLERY</NavLink>
          </div>
          <div className="hidden md:flex">
            <div className=" group/item px-3 py-2 border border-[#F36523] flex items-center gap-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-[#F36523]">
                <Link className="uppercase text-white hover:transition-all hover:duration-300 hover:ease-in-out monty text-sm" href="#contact">Contact us</Link>
                <ArrowSmallRightIcon className="w-5 h-5 text-[#F36523] group/iocn transition-transform group-hover/item:translate-x-1 group-hover/item:text-white hover:transition-all hover:duration-300 hover:ease-in-out" />
            </div>
          </div>
      </div>
    </nav>
  );
}

export default Navbar;
