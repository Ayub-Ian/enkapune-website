import { Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

function ReservationForm({ slug, homeNavigate }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullname: "",
      email: "",
      phone: "",
      pickup: false,
      checkIn: "",
      checkOut: "",
      adults: "",
      children: "",
      package: "",
      roomType: slug,
    },
  });

  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceded] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async (formData) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (!((res.status >= 200) & (res.status <= 299))) {
        setError(true);
        setSubmitting(false);
        return;
      }
      setSubmitting(false);
      setSucceded(true);
    } catch (error) {
      setError(true);
    }
  };


  return (
    <div className="hidden relative md:block rounded-lg bg-black/10 backdrop-blur backdrop-filter p-4 mb-8 ">
      <h2 className="uppercase fs-3 text-[#F36523]">BOOK NOW</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="rounded-lg bg-white/60 py-2.5 px-5 mt-2.5 w-full text-black placeholder:text-black backdrop-blur-xs backdrop-filter "
          type={"text"}
          {...register("fullname", { required: "Fullname is required" })}
          placeholder={"Fullname"}
        />
        {errors.fullname?.message && <small className="text-red-400 after:content-['*']">{errors.fullname.message}</small>}
        <input
          className="rounded-lg bg-white/60 py-2.5 px-5 mt-2.5 w-full text-black placeholder:text-black backdrop-blur-xs backdrop-filter "
          type={"email"}
          {...register("email", {
            required: "Email is required",
            validate: {
              matchPattern: (v) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                "Email address must be a valid address",
            },
          })}
          placeholder={"Email address"}
        />
        {errors.email?.message && <small className="text-red-400 after:content-['*']">{errors.email.message}</small>}
        <input
          className="rounded-lg bg-white/60 py-2.5 px-5 mt-2.5 w-full text-black placeholder:text-black backdrop-blur-xs backdrop-filter "
          type={"text"}
          {...register("phone", { required: "Phone number is required" })}
          placeholder={"Phone number"}
        />
        {errors.phone?.message && <small className="text-red-400 after:content-['*']">{errors.phone.message}</small>}

        <select
          {...register("package", { required: "Package is required" })}
          className="rounded-lg bg-white/60 py-2.5 px-5 mt-2.5 w-full text-black placeholder:text-black backdrop-blur-xs backdrop-filter "
        >
          <option value="">Choose package</option>
          <option value={"full board"}>Full board</option>
          <option value={"half board"}>Half board</option>
          <option value={"bed and breakfast"}>Bed & Breakfast</option>
        </select>
        {errors.package?.message && <small className="text-red-400 after:content-['*']">{errors.package.message}</small>}

        <div className="flex gap-2">
          <label className="w-full">
            <input
              className="rounded-lg bg-white/60 py-2.5 px-5 mt-2.5 w-full text-black placeholder:text-black backdrop-blur-xs backdrop-filter "
              type={"number"}
              {...register("adults", {
                required: "Adult pax is required",
              })}
              placeholder={"No. of Adults"}
            />
            {errors.adults?.message && <small className="text-red-400 after:content-['*']">{errors.adults.message}</small>}
          </label>
          <label className="w-full">
            <input
              className="rounded-lg bg-white/60 py-2.5 px-5 mt-2.5 w-full text-black placeholder:text-black backdrop-blur-xs backdrop-filter "
              type={"number"}
              {...register("children", { required: "Children pax is required" })}
              placeholder={"No. of Children"}
            />
            {errors.children?.message && (
              <small className="text-red-400 after:content-['*']">{errors.children.message}</small>
            )}
          </label>
        </div>
        <div className="flex gap-2 my-2.5">
          <label>
            Check in
            <input
              className="rounded-lg bg-white/60 py-2.5 px-5 mt-0.5 w-full text-black placeholder:text-black backdrop-blur-xs backdrop-filter "
              type={"date"}
              {...register("checkIn", { required: "Check in is required" })}
            />
            {errors.checkIn?.message && <small className="text-red-400 after:content-['*']">{errors.checkIn.message}</small>}
          </label>
          <label>
            Check out
            <input
              className="rounded-lg bg-white/60 py-2.5 px-5 mt-0.5 w-full text-black placeholder:text-black backdrop-blur-xs backdrop-filter "
              type={"date"}
              {...register("checkOut", { required: "Check out is required" })}
            />
            {errors.checkOut?.message && (
              <small className="text-red-400 after:content-['*']">{errors.checkOut.message}</small>
            )}
          </label>
        </div>
        <label className="flex gap-2">
          <input
            type="checkbox"
            {...register("pickup")}
            className="accent-[#F36523]"
          />
          Request pickup
        </label>
        <button
          type="submit"
          className="bg-[#F36523] text-white w-full rounded-lg py-2.5 mt-2.5"
        >
          Make reservation
        </button>
      </form>

      {submitting && (
        <Transition
          as={Fragment}
          show={submitting}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div className="flex flex-col justify-center items-center absolute top-0 left-0 h-full rounded-lg w-full bg-[#F36523] bg-opacity-90">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
            <p className="mt-10 text-xl text-white font-bold">SENDING...</p>
          </div>
        </Transition>
      )}
      {succeeded && (
        <Transition
          as={Fragment}
          show={succeeded}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div className="flex flex-col justify-center items-center absolute top-0 left-0 h-full w-full rounded-lg text-white bg-[#F36523]">
            <p className="mt-10 text-xl text-accent font-bold">MESSAGE SENT!</p>
            <p className="text-lg my-5 text-center mx-10">
              We can&apos;t wait for you to visit us here at Enkapune! Please
              look out for a response email within the next 48hrs.
            </p>

            <button
              onClick={() => {
                setSucceded(false);
                homeNavigate();
              }}
              className="rounded-lg bg-black px-6 py-2 font-bold uppercase text-white hover:bg-black"
            >
              RETURN HOME
            </button>
          </div>
        </Transition>
      )}
      {error && (
        <Transition
          as={Fragment}
          show={error}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div className="flex justify-center items-center flex-col mx-auto space-y-2 h-full  inset-0 absolute  text-white bg-red-600 rounded-lg bg-opacity-90">
            <p className="mt-10 text-xl text-center monty font-bold">
              We apologize for the inconvenience, something went wrong.
            </p>
            <p className="text-lg">Please try again in a few minutes.</p>
            <button
              onClick={() => setError(false)}
              className="rounded-lg bg-black px-6 py-2 font-bold uppercase text-white hover:bg-black"
            >
              try again
            </button>
          </div>
        </Transition>
      )}
    </div>
  );
}

export default ReservationForm;
