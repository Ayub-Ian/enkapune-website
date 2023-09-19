"use client";
import {
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useState } from "react";
import PickupForm from "./features/PickupForm";
import BookRoomModal from "./features/BookRoomModal";

function Hero() {
  let [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const map_url =
    "https://www.google.com/maps/place/Enkapune+Cowboy+park+resort/@-1.8231367,36.8199783,17z/data=!4m20!1m10!3m9!1s0x182fc5ab84384edd:0x8efbe78dc888b26e!2sEnkapune+Cowboy+park+resort!5m2!4m1!1i2!8m2!3d-1.8231421!4d36.8225532!16s%2Fg%2F11t4hnc75k!3m8!1s0x182fc5ab84384edd:0x8efbe78dc888b26e!5m2!4m1!1i2!8m2!3d-1.8231421!4d36.8225532!16s%2Fg%2F11t4hnc75k?entry=ttu";
  return (
    <div className=" px-4 lg:px-[60px]">
      <div className="w-full bg-hero-image min-h-[600px] bg-no-repeat bg-cover bg-center bg-black/70 bg-blend-overlay pt-32 text-center grid place-items-center ">
        <div className="px-4 md:max-w-xl md:mx-auto lg:max-w-3xl">
          <h2 className="mb-5 monty uppercase font-extrabold fs-1">
            PERFECT PLACE TO GETAWAY
          </h2>
          <p className="fs-5 mb-10">
            Perfectly located in Kajiado, Enkapune Cowboy Park is the place to
            visit and enjoy the cowboy experience with the beauty of surrounding
            nature, culture and the warm hospitality.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-2.5 md:gap-5">
            <div className="w-full md:w-fit  transition-all duration-200 ease-out btn-primary py-3 px-7 rounded-lg ">
              <button
                onClick={toggleModal}
                className="uppercase w-full flex gap-2 justify-center items-center"
              >
                Book a room now
                <CalendarDaysIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="w-full md:w-fit items-center justify-center  transition-all duration-200 ease-out border border-white/20  bg-white/20 backdrop-blur-sm py-3 px-7 rounded-lg flex gap-2">
              <a href={"#menu"} className="uppercase">
                Contact us
              </a>
              <ChatBubbleLeftRightIcon className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
      {/* <PickupRequest /> */}
      <section className="bg-[#F36523] py-14">
        <div className="md:flex md:flex-row-reverse gap-2 px-4 md:justify-center  ">
          <div className="bg-black/10 mb-4 md:mb-0 px-3 py-6 rounded-lg backdrop-filter backdrop-blur lg:flex-1">
            <h2 className="uppercase fs-3 font-semibold monty mb-2">
              Disclaimer
            </h2>

            <ul className=" list-disc px-4 space-y-1 mb-8 text-[#D9D9D9]">
              <li>Minimum 6 pax required to request pickup</li>
              <li>For group of 6 van is available</li>
              <li>For group of 7 upto 20 pax shuttle is available </li>
            </ul>
            <Link
              href={map_url}
              target="_blank"
              className="bg-[#EBB9A1] py-3 px-3 rounded-lg border border-[#EBB9A1] text-black w-full uppercase flex justify-center items-start gap-2"
            >
              View directions
              <MapPinIcon className="h-5 w-5" />
            </Link>
          </div>
          <div className="bg-black/10 px-3 py-6 rounded-lg backdrop-filter backdrop-blur lg:flex-[2] relative">
            <h2 className="uppercase fs-3 font-semibold monty mb-2">
              TRANSPORT for you and your friends
            </h2>

            <PickupForm />
          </div>
        </div>
      </section>

      <BookRoomModal isOpen={isOpen} toggleModal={toggleModal} />
    </div>
  );
}

export default Hero;
