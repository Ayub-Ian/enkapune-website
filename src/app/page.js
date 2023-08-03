import Hero from "@/components/hero";
import StyledInput from "@/components/styled-input";
import PickupRequest from "@/features/pickup-request";
import Image from "next/image";
import {
  EnvelopeIcon,
  FireIcon,
  GiftIcon,
  MapPinIcon,
  PhoneIcon,
  SparklesIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import single from "../../public/img/single-occupancy.jpg";
import double from "../../public/img/double-occupancy.jpg";
import { menu } from "@/utils/menu-data";
import Link from "next/link";

const rooms = [
  {
    id: 1,
    photo: single,
    title: "King deluxe suite",
    prices: [
      {
        id: 1,
        type: "bed/breakfast",
        amount: "5000",
      },
      {
        id: 2,
        type: "Half board",
        amount: "7,500",
      },
      {
        id: 3,
        type: "Full board",
        amount: "8,500",
      },
    ],
  },
  {
    id: 2,
    photo: double,
    title: "Superior double suite",
    prices: [
      {
        id: 1,
        type: "bed/breakfast",
        amount: "7000",
      },
      {
        id: 2,
        type: "Half board",
        amount: "11,000",
      },
      {
        id: 3,
        type: "Full board",
        amount: "13,000",
      },
    ],
  },
];

export default function Home() {

  const breakfasts = menu.breakfast;
  const drinks = menu.softDrinks;
  const map_url = "https://www.google.com/maps/place/Enkapune+Cowboy+park+resort/@-1.8231367,36.8199783,17z/data=!4m20!1m10!3m9!1s0x182fc5ab84384edd:0x8efbe78dc888b26e!2sEnkapune+Cowboy+park+resort!5m2!4m1!1i2!8m2!3d-1.8231421!4d36.8225532!16s%2Fg%2F11t4hnc75k!3m8!1s0x182fc5ab84384edd:0x8efbe78dc888b26e!5m2!4m1!1i2!8m2!3d-1.8231421!4d36.8225532!16s%2Fg%2F11t4hnc75k?entry=ttu"
  return (
    <main className="flex min-h-screen flex-col pt-16">
      <div className="mt-4">
        <Hero />
        {/* <PickupRequest /> */}
        <section className="bg-[#F36523] py-14">
          <div className="px-4 md:mx-auto lg:max-w-6xl">
            <form className="md:grid md:grid-cols-2 md:gap-4 md:items-end lg:grid-cols-4">
              <div className="flex flex-col mb-4 md:py-0">
                <label className="fs-4">Phone number</label>
                <StyledInput type={"text"} placeholder={"Mobile number"} />
              </div>
              <div className=" flex flex-col mb-4 md:py-0">
                <label className="fs-4">Fullname</label>
                <StyledInput type={"text"} placeholder={"Preferred names"} />
              </div>
              <div className=" flex flex-col mb-4 md:py-0">
                <label className="fs-4">Email</label>
                <StyledInput
                  type={"text"}
                  placeholder={"Personal email address"}
                />
              </div>
              <div className=" flex flex-col  mb-4 md:py-0">
                <label className="fs-4">Pickup date</label>
                <StyledInput type={"date"} placeholder={"Mobile number"} />
              </div>

              <button
                type="submit"
                className=" uppercase btn-secondary py-3 px-7 mb-4 w-full md:m-0 "
              >
                Request pickup
              </button>
              <Link href={map_url} target="_blank" className="bg-[#2C2421] py-3 px-7 border border-[#2C2421] w-full uppercase flex justify-center items-start gap-2">
                View directions
                <MapPinIcon className="h-5 w-5" />
              </Link>
            </form>
          </div>
        </section>

        <section id="#menu" className="bg-[#FCF7F1] py-14">
          <div className="px-4 md:mx-auto lg:max-w-6xl">
            <p className="fs-5 text-[#F36523] uppercase mb-2 monty text-center">
              MENU
            </p>
            <h2 className=" uppercase text-center fs-2 mb-4 monty font-extrabold text-[#2C2421] ">
              OUR KITCHEN{" "}
            </h2>
            <p className="mb-8 text-center md:mx-auto  md:max-w-[60ch] text-[#636774]">
              Enjoy fine dining from our restaurant at Enkapune Cowboy Park
              offering delicacies with menus that will delight your loved ones
              with our finger licking food.
            </p>
            <div className="md:flex w-full md:gap-9">
            <div className="mb-8 md:mb-0 flex-1 ">
              <h2 className="fs-3 text-[#2C2421] font-semibold mb-4 uppercase">Breakfast</h2>
              <div className="flex items-center text-[#2C2421] bg-[#EBB9A1] px-4 py-1.5 mb-2">
                <p className="flex-1">Item</p>
                <p className="flex-1.5">Price</p>
              </div>
              {breakfasts.map((breakfast) => (
                <div key={breakfast.id} className="text-black flex items-center gap-4 mb-1.5 px-4">
                  <p className="flex-1 capitalize">{breakfast.title}</p>
                  <p className="flex-1.5 bg-[#F36523] px-4">{breakfast.price}</p>
                </div>
              ))}
            </div>
            <div className="flex-1">
              <h2 className="fs-3 text-[#2C2421] font-semibold mb-4 uppercase">Soft Drinks</h2>
              <div className="flex items-center text-[#2C2421] bg-[#EBB9A1] px-4 py-1.5 mb-2">
                <p className="flex-1">Item</p>
                <p className="flex-1.5">Price</p>
              </div>
              {drinks.map((drink) => (
                <div key={drink.id} className="text-black flex items-center gap-4 mb-1.5 px-4">
                  <p className="flex-1 capitalize">{drink.title}</p>
                  <p className="flex-1.5 bg-[#F36523] px-4">{drink.price}</p>
                </div>
              ))}
            </div>
            </div>
          </div>
        </section>

        <div className="py-14">
          <div className="md:mx-auto ">
            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md: gap-8 ">
              <div className="bg-[#FFC83D] py-8 mb-5 md:mb-0 text-black flex justify-center items-center">
                <div className="text-center">
                  <p className="fs-2 font-extrabold uppercase">Book</p>
                  <p className="uppercase fs-3">&#123;your fabulous&#125;</p>
                  <p className="fs-2 font-extrabold uppercase">adventure</p>

                  <div className="flex flex-col items-start gap-2 mt-8">
                    <p className="uppercase font-medium">Enkapune Cowboy Park</p>

                    <div className="flex justify-start items-center gap-3 mb-3">
                      <PhoneIcon className="h-5 w-5" />
                      <a className="underline font-medium" href="tel:0720971119">0720971119</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#EED6B2] flex flex-col justify-center items-center mb-5 md:mb-0 py-4">
                <h2 className="text-[#2C2421] fs-3 mb-1 monty uppercase font-extrabold ">Upcoming events</h2>
                <div className="h-64">
                  <Image
                    src={"/img/cultural-day.jpg"}
                    alt="cultural day"
                    width={256}
                    height={256}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="bg-[#493A35] p-5 md:col-span-2 lg:col-auto">
                <h2 className="fs-2 mb-4 font-extrabold monty">
                  EXPERIENCES YOU GET WITH{" "}
                  <span className="text-[#F36523]">ENKAPUNE</span>
                </h2>
                <ul>
                  <li className="flex justify-start items-center gap-3 mb-3">
                    <SparklesIcon className="h-5 w-5" />
                    <p className="font-medium">VIP sitting room</p>
                  </li>
                  <li className="flex justify-start items-center gap-3 mb-3">
                    <SunIcon className="h-5 w-5" />
                    <p className="font-medium">Cowboy themed gazebos</p>
                  </li>
                  <li className="flex justify-start items-center gap-3 mb-3">
                    <GiftIcon className="h-5 w-5" />
                    <p className="font-medium">Choma buffet</p>
                  </li>
                  <li className="flex justify-start items-center gap-3 mb-3">
                    <FireIcon className="h-5 w-5" />
                    <p className="font-medium">Outdoor bonfire</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <section id="#rooms" className="bg-[#FCF7F1] py-14">
          <div className="px-4 md:mx-auto lg:max-w-6xl">
            <p className="fs-5 text-[#F36523] uppercase mb-2 monty text-center">
              Rooms
            </p>
            <h2 className=" uppercase text-center fs-2 mb-4 monty font-extrabold text-[#2C2421] ">
              OUR PACKAGES
            </h2>
            <p className="mb-8 text-center md:mx-auto  md:max-w-[60ch] text-[#636774]">
              Enkapune has various rooms in its private residence quarters with
              different configurations. Whether it’s just for the two of you or
              the extended family, you can spend in the luxurious spacious rooms
              and suites.
            </p>
            <ul className="mb-10">
              {rooms.map((room) => (
                <li key={room.id} className="mb-8 last:mb-0">
                  <div className="bg-slate-100 overflow-hidden rounded-xl md:flex md:items-center">
                    <figure className=" md:max-h-[250px] md:flex-1.5 ">
                      <Image
                        src={room.photo}
                        width={350}
                        height={350}
                        alt={room.title}
                        className="object-cover bg-bottom bg-no-repeat h-auto w-auto"
                      />
                    </figure>
                    <div className="px-5 py-[30px] md:p-10 md:flex-2">
                      <p className="mb-3 fs-3 text-[#636774] font-extrabold uppercase monty">{room.title}</p>
                      <ol className="text-black">
                      {room.prices.map((price) => (
                        <li key={price.id} className="text-black flex items-center gap-3 whitespace-nowrap">
                          <p className="capitalize">{price.type}</p>
                          <p>KSH {price.amount}</p>
                        </li>
                      ))}
                      </ol>
                    </div>
                    <div className="md:flex-1 text-center px-5 py-16  bg-[#FBD1BD]">
                      <p className="fs-2 monty font-extrabold mb-5 text-[#2C2421]">
                        Price 
                        <span className="fs-7 font-normal"> / per person</span>
                      </p>
                      <button className="bg-[#EBB9A1] uppercase py-3 px-8">
                        Book now
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <footer>
          <div className="py-14">
            <div className="px-4 md:grid md:grid-cols-2 md:gap-12 md:mx-auto  ">
              <div className="mb-8">
                <h2 className="uppercase fs-2 font-extrabold mb-5 text-[#EBB9A1]">
                  READY FOR AN UNFORGETTABLE EXPERIENCE. CONTACT US{" "}
                </h2>
              </div>
              <div className="mb-8">
                <p className="leading-4 mb-5 ">
                  Feel free to contact us regarding any information.
                </p>
                <ul>
                  <li className="flex justify-start items-center gap-3 mb-3">
                    <PhoneIcon className="h-5 w-5" />
                    <a href="tel:0720971119">0720971119</a>
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
