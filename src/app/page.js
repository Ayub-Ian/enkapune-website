import Hero from "@/components/hero";
import PickupRequest from "@/features/pickup-request";
import Image from "next/image";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrown,
  faFire,
  faSun,
  faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";
import { frontGallery } from "@/utils/front-gallery";
import { getExperiences } from "../../sanity/utils/api/experience";
import { getRooms } from "../../sanity/utils/api/room";

const colorVariants = {
  gazebo: "text-[#F36523]",
  vip: "text-[#FFD700]",
  bonfire: "text-[#FF0000]",
  rooftop: "text-[#FFA500]",
};

const bgVariants = {
  gazebo: "bg-[#F36523]/20",
  vip: "bg-[#FFD700]/20",
  bonfire: "bg-[#FF0000]/20",
  rooftop: "bg-[#FFA500]/20",
};

const icons = {
  gazebo: <FontAwesomeIcon icon={faUmbrellaBeach} />,
  vip: <FontAwesomeIcon icon={faCrown} />,
  bonfire: <FontAwesomeIcon icon={faFire} />,
  rooftop: <FontAwesomeIcon icon={faSun} />,
};

export default async function Home() {
  const experiences = await getExperiences();
  const rooms = await getRooms();



  return (
    <main className="flex min-h-screen flex-col pt-16">
      <div className="mt-4">
        <Hero />

        <section id="#experiences" className="bg-[#FCF7F1] py-14">
          <div className="px-4 md:mx-auto lg:max-w-6xl">
            <p className="fs-5 text-[#F36523] uppercase mb-2 monty text-center">
              EXPERIENCES
            </p>
            <h2 className=" uppercase text-center fs-2 mb-4 monty font-extrabold text-[#2C2421] ">
              WHY YOU SHOULD VISIT US
            </h2>
            <p className="mb-8 text-center md:mx-auto  md:max-w-[90ch] text-[#636774]">
              Enjoy fine dining from our restaurant at Enkapune Cowboy Park
              offering delicacies with menus that will delight your loved ones
              with our finger licking food.
            </p>

            <div className=" w-full md:flex md:gap-5 max-h-min ">
              <div className="w-full md:pr-5 mb-5 md:mb-0">
                {experiences.map((experience, index) => (
                  <div key={experience.id} className=" mb-5 md:mb-8">
                    <span className="text-[#d9d9d9] font-black fs-3">
                      0{index + 1}
                    </span>
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className={` ${colorVariants[experience.ref]} ${
                          bgVariants[experience.ref]
                        } p-2.5 w-fit rounded-full flex justify-center items-center`}
                      >
                        <div className="h-5 w-5">{icons[experience.ref]}</div>
                      </div>
                      <h2 className="text-black fs-3 font-semibold monty tracking-wide">
                        {experience.name}
                      </h2>
                    </div>
                    <p className="text-black">{experience.description}</p>
                  </div>
                ))}
              </div>

              <div className="w-full md:h-fit  ">
                <ul className="grid grid-cols-2 gap-2.5 md:gap-5 h-screen ">
                  <li className="h-full">
                    <figure className=" w-full h-full relative ">
                      <Image
                        src="/img/shuttle.jpg"
                        alt={"Shuttle"}
                        className="rounded-lg object-cover object-center"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        fill
                      />
                    </figure>
                  </li>
                  <li>
                    <figure className=" w-full h-full relative ">
                      <Image
                        src="/img/gate-signage.jpg"
                        alt={"Shuttle"}
                        className="rounded-lg object-cover object-center"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        fill
                      />
                    </figure>
                  </li>
                  <li className="row-start-1 row-end-3">
                    <figure className=" w-full h-full relative ">
                      <Image
                        src="/img/skull.jpg"
                        alt={"Shuttle"}
                        className="rounded-lg object-cover object-center"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        fill
                      />
                    </figure>
                  </li>
                  <li>
                    <figure className=" w-full h-full relative ">
                      <Image
                        src="/img/vip.jpg"
                        alt={"Shuttle"}
                        className="rounded-lg object-cover object-center"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        fill
                      />
                    </figure>
                  </li>
                  <li>
                    <figure className=" w-full h-full relative ">
                      <Image
                        src="/img/outdoor.jpg"
                        alt={"Shuttle"}
                        className="rounded-lg object-cover object-center"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        fill
                      />
                    </figure>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="#rooms" className=" bg-[#FCF7F1] py-14">
          <div className="px-4 md:mx-auto lg:max-w-6xl">
            <p className="fs-5 text-[#F36523] uppercase mb-2 monty text-center">
              Rooms
            </p>
            <h2 className=" uppercase text-center fs-2 mb-4 monty font-extrabold text-[#2C2421] ">
              OUR PACKAGES
            </h2>
            <p className="mb-8 text-center md:mx-auto  md:max-w-[90ch] text-[#636774]">
              Enkapune has various rooms in its private residence quarters with
              different configurations. Whether it’s just for the two of you or
              the extended family, you can spend in the luxurious spacious rooms
              and suites.
            </p>
            <ul className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-5">
              {rooms.map((room) => (
                <li
                  key={room._id}
                  className="bg-black/10 backdrop-blur overflow-hidden rounded-lg flex flex-col px-5 py-10 gap-3 mb-5 md:mb-0 "
                >
                  <p className="mb-3 fs-4 text-[#636774] font-extrabold uppercase monty">
                    {room.name}
                  </p>

                  <figure className=" w-full h-64 relative ">
                    <Image
                      src={room.heroImg}
                      alt={room.altImg}
                      className="rounded-lg bg-cover bg-center  "
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                    />
                  </figure>
                  <div className="md:flex md:items-start md:justify-between">
                    <p className="fs-5 tracking-tight font-extrabold mb-5 md:mb-0 text-[#2C2421] flex flex-col items-start ">
                      Starting at KES {room.starting}
                      <span className="fs-7 font-normal"> / per person</span>
                    </p>
                    <Link
                      href={`/rooms/${room.slug}`}
                      className="bg-[#F36523] uppercase  rounded-lg px-5 py-2.5"
                    >
                      View details
                    </Link>
                  </div>
                </li>
              ))}
              
              <li className="bg-black/10 backdrop-blur overflow-hidden rounded-xl flex flex-col px-5 py-10 gap-3 mb-5 md:mb-0 ">
                <p className="mb-3 fs-4 text-[#636774] font-extrabold uppercase monty">
                  Camping
                </p>

                <figure className=" w-full h-64 relative ">
                  <Image
                    src={"/img/tent-camping.jpg"}
                    alt={"camping tent"}
                    className="rounded-lg"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                  />
                </figure>

                <button className="bg-[#2C2421] w-full uppercase  rounded-lg text-center py-2.5">
                  Offering soon !!
                </button>
              </li>
            </ul>
          </div>
        </section>

        <section className="py-14">
          <div className="px-4 md:mx-auto lg:max-w-6xl">
            <p className="fs-5 text-[#F36523] uppercase mb-2 monty text-center">
              PHOTO GALLERY
            </p>
            <h2 className=" uppercase text-center fs-2 mb-4 monty font-extrabold text-white ">
              PHOTO&apos;S FROM ENKAPUNE
            </h2>
            <p className="mb-8 text-center md:mx-auto  md:max-w-[90ch] text-white">
              Enkapune has various rooms in its private residence quarters with
              different configurations. Whether it’s just for the two of you or
              the extended family, you can spend in the luxurious spacious rooms
              and suites.
            </p>
            <ul className="grid grid-cols-2 lg:grid-cols-3 gap-5 min-h-[500px] ">
              {frontGallery.map((image, index) => (
                <li key={index} className=" relative rounded-lg gallery-item ">
                  <Image
                    src={image.src}
                    alt={image.title}
                    className="rounded-lg object-cover object-center md:object-top"
                    fill
                    sizes="(max-width: 640px) 100vw,
                      (max-width: 1280px) 50vw,
                      (max-width: 1536px) 33vw,
                      25vw"
                  />
                </li>
              ))}
            </ul>
            <span className="w-full flex justify-center items-center mt-8">
              <Link
                href={"/gallery"}
                className="bg-[#F36523] text-center py-2.5 w-full rounded-lg uppercase monty fs-3"
              >
                See more
              </Link>
            </span>
          </div>
        </section>

        <footer>
          <div className="py-14">
            <div className="px-4 lg:max-w-6xl md:grid md:grid-cols-2 md:gap-12 md:mx-auto  ">
              <div className="mb-8 w-full">
                <h2 className="uppercase fs-2 w-full font-extrabold mb-5 text-[#EBB9A1]">
                  READY FOR AN UNFORGETTABLE EXPERIENCE?
                </h2>
              </div>
              <div className="mb-8">
                <p className="leading-4 mb-5 ">
                  Feel free to contact us regarding any information.
                </p>
                <ul>
                  <li className="flex justify-start items-center gap-3 mb-3">
                    <PhoneIcon className="h-5 w-5" />
                    <a href="tel:0720971119">+254-741-334-334</a>
                  </li>
                  <li className="flex justify-start items-center gap-3 mb-3">
                    <PhoneIcon className="h-5 w-5" />
                    <a href="tel:0720971119">+254-700-222-122</a>
                  </li>
                  <li className="flex justify-start items-center gap-3 mb-3">
                    <EnvelopeIcon className="h-5 w-5" />
                    <a href="mailto:info@enkapune.co.ke">info@enkapune.co.ke</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-5 border-t border-[#453E3B]">
              <div className="px-4 text-center">
                <p>
                  2023 Enkapune Cowboy Park. | Made by{" "}
                  <span className="font-bold underline">Ayub Ian</span> All
                  Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
