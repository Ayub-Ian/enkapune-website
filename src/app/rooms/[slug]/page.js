"use client";

import { useRouter } from "next/navigation";
import {
  faCheck,
  faEnvelopeCircleCheck,
  faFan,
  faPercentage,
  faSquareParking,
  faWifiStrong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { deluxeImages } from "@/utils/king-deluxe-images";
import Image from "next/image";
import { getRoom } from "../../../../sanity/utils/api/room";

import ReservationForm from "@/components/reservation";

import RoomReservationModal from "@/components/features/RoomReservationModal";

const facilities = [
  {
    id: 1,
    title: "Free wifi",
    icon: <FontAwesomeIcon icon={faWifiStrong} />,
  },
  {
    id: 2,
    title: "Free parking",
    icon: <FontAwesomeIcon icon={faSquareParking} />,
  },
  {
    id: 3,
    title: "Air conditioner",
    icon: <FontAwesomeIcon icon={faFan} />,
  },
];

const otherFacilities = [
  {
    id: 1,
    title: "Room service",
  },
  {
    id: 2,
    title: "24 hr Reception",
  },
  {
    id: 3,
    title: "Shuttle services (for a fee)",
  },
  {
    id: 4,
    title: "Restaurant",
  },
  {
    id: 5,
    title: "Sports & Bar area",
  },
  {
    id: 6,
    title: "Smoking area",
  },
];

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

export default function RoomDetail({ params }) {
  const slug = params.slug;
  const router = useRouter();
  const [room, setRoom] = useState({});
  let [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  const getRoomDetails = useCallback(async () => {
    try {
      const room = await getRoom(slug);
      setRoom(room);
    } catch (error) {
      console.error(error);
    }
  }, [slug]);

  const navigate = () => {
    router.push("/");
  };

  useEffect(() => {
    if (slug) {
      getRoomDetails();
    }
  }, [getRoomDetails, slug]);

 

  return (
    <div className="bg-[#FCF7F1] min-h-screen pt-16">
      <section id="#rooms" className="bg-[#FCF7F1] py-2 lg:pt-4 text-[#2C2421]">
        <div className="px-4 lg:px-[60px]">
          <div className="mb-8 ">
            <div ref={sliderRef} className="keen-slider">
              {deluxeImages.map((image, index) => (
                <div
                  key={index}
                  className={`keen-slider__slide number-slide${index} relative`}
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    className="rounded-lg object-cover object-center "
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>

            <div ref={thumbnailRef} className="keen-slider thumbnail">
              {deluxeImages.map((image, index) => (
                <div
                  key={index}
                  className={`keen-slider__slide number-slide${index} relative`}
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    className="rounded-lg object-cover object-center  "
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
          <h2 className=" uppercase fs-2 mb-4 monty font-extrabold text-[#2C2421] ">
            {room?.name}
          </h2>

          <div className="md:flex md:gap-10">
            <div className="md:flex-[1.5] mb-12">
              <h3 className="uppercase monty fs-3 text-[#2C2421] mb-5 font-semibold">
                Description
              </h3>
              <p className="mb-8">{room.description}</p>
              <div className="mb-8">
                <h3 className="uppercase monty fs-3 text-[#2C2421] mb-5 font-semibold">
                  Facilities
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {facilities.map((facility) => (
                    <span
                      key={facility.id}
                      className="flex gap-2 text-[#008000]"
                    >
                      <div className="h-5 w-5">{facility.icon}</div>
                      <p>{facility.title}</p>
                    </span>
                  ))}
                </div>
                <p className="font-medium">Other facilities:</p>
                <div className="grid grid-cols-2 gap-4 mt-3">
                  {otherFacilities.map((item) => (
                    <div key={item.id} className="flex gap-2">
                      <div className="w-4 h-4">
                        <FontAwesomeIcon icon={faCheck} />
                      </div>
                      <p className="text-sm">{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="uppercase monty fs-3 text-[#2C2421] mb-5 font-semibold">
                Packages
              </h3>
              {room.package?.map((item, index) => (
                <div
                  key={item._key}
                  className="flex mb-4 items-end justify-between"
                >
                  <div>
                    <span className="text-[#d9d9d9] fs-3 font-black">
                      0{index + 1}
                    </span>
                    <p className="font-medium text-lg">{item.name}</p>
                    <ul className="list-disc pl-4">
                      {item.description.map((service, index) => (
                        <li key={index}>{service}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="flex flex-col items-start relative">
                      <p className="fs-2 font-medium monty before:content-['kes'] before:uppercase before:text-xs before:mr-1 ">
                        {item.price}
                      </p>
                      <span className="text-sm">/ person</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="md:flex-1 md:px-5">
              <ReservationForm slug={slug} homeNavigate={navigate} />

              <div className="mb-8">
                <div className="flex gap-2 items-center">
                  <div className=" text-[#F36523] bg-[#F36523]/20 flex justify-center items-center h-9 w-9 rounded-full ">
                    <FontAwesomeIcon
                      icon={faEnvelopeCircleCheck}
                      className="h-5 w-5"
                    />
                  </div>
                  <p className="font-semibold monty text-lg">Instant Booking</p>
                </div>
                <p className="text-[#8F8D8C] md:max-w-[38ch] mt-2 pl-[50px]">
                  After sending your reservation request, Enkapune respond
                  within 48hrs. When your booking is confirmed, we send you your
                  booking information and you can go on to enjoy your stay!
                </p>
              </div>
              <div className="mb-8">
                <div className="flex gap-2 items-center">
                  <div className=" text-[#F36523] bg-[#F36523]/20 flex justify-center items-center h-9 w-9 rounded-full ">
                    <FontAwesomeIcon icon={faPercentage} className="h-5 w-5" />
                  </div>
                  <p className="font-semibold monty text-lg">
                    Discounts and offers
                  </p>
                </div>
                <p className="text-[#8F8D8C] md:max-w-[38ch] mt-2 pl-[50px]">
                  We negotiate for the lowest available rates on the biggest
                  reservations to give you the best experience. With birthdays
                  or events, you always save a percentage or more on your
                  booking.
                </p>
              </div>
              <button
                onClick={toggleModal}
                className="uppercase md:hidden w-full rounded-lg py-2.5 mb-5 font-medium text-white bg-[#F36523]"
              >
                Book now
              </button>
            </div>
          </div>
        </div>
      </section>

      <RoomReservationModal
        isOpen={isOpen}
        toggleModal={toggleModal}
        slug={slug}
      />
    </div>
  );
}
