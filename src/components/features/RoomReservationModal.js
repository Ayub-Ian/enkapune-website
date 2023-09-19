import { Dialog, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import React, { Fragment, useState } from "react";
import Error from "../transitions/error";
import Submitting from "../transitions/submitting";
import Succedded from "../transitions/succedded";
import { useForm } from "react-hook-form";

function RoomReservationModal({ isOpen, toggleModal, slug }) {
  const router = useRouter();

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
  const navigate = () => {
    router.push("/");
  };

  const onSubmit = async (formData) => {
    // console.log({formData})
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
      reset();
    } catch (error) {
      setError(true);
    }
  };
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 " onClose={toggleModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center  p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full relative max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium monty leading-6 text-gray-900"
                  >
                    Make reservation
                  </Dialog.Title>

                  <div className="mt-2">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="text-gray-900"
                    >
                      <input
                        placeholder="Fullname"
                        type="text"
                        {...register("fullname", {
                          required: "Fullname is required",
                        })}
                        className=" mb-2 w-full border border-slate-400 rounded-lg px-5 py-2.5 text-sm shadow-sm placeholder-slate-400 bg-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                      />
                      {errors.fullname?.message && (
                        <small className="text-red-400 after:content-['*']">
                          {errors.fullname.message}
                        </small>
                      )}

                      <input
                        placeholder="Personal email"
                        type="text"
                        {...register("email", {
                          required: "Email is required",
                          validate: {
                            matchPattern: (v) =>
                              /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                                v
                              ) || "Email address must be a valid address",
                          },
                        })}
                        className=" mb-2 w-full border border-slate-400 rounded-lg px-5 py-2.5 text-sm shadow-sm placeholder-slate-400 bg-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                      />
                      {errors.email?.message && (
                        <small className="text-red-400 after:content-['*']">
                          {errors.email.message}
                        </small>
                      )}

                      <input
                        placeholder="Phone number"
                        type="text"
                        {...register("phone", {
                          required: "Phone number is required",
                        })}
                        className="mb-2 w-full border border-slate-400 rounded-lg px-5 py-2.5 text-sm shadow-sm placeholder-slate-400 bg-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                      />
                      {errors.phone?.message && (
                        <small className="text-red-400 after:content-['*']">
                          {errors.phone.message}
                        </small>
                      )}

                      <label className="relative w-full">
                        <select
                          {...register("package", {
                            required: "Package is required",
                          })}
                          className="mb-2 appearance-none w-full border border-slate-400 rounded-lg px-5 py-2.5 text-sm shadow-sm placeholder-slate-400 bg-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                        >
                          <option>Choose package</option>
                          <option value="king deluxe">Full board</option>
                          <option value="superior double">Half board </option>
                          <option value="superior double">
                            Bed and Breakfast{" "}
                          </option>
                        </select>
                        <ChevronDownIcon className="h-5 w-5 absolute top-0.5 right-5" />
                      </label>
                      {errors.package?.message && (
                        <small className="text-red-400 after:content-['*']">
                          {errors.package.message}
                        </small>
                      )}

                      <div className="flex gap-2 mb-2">
                        <label>
                          <input
                            placeholder="No. of adults"
                            {...register("adults", {
                              required: "Adult pax is required",
                            })}
                            type="number"
                            className="w-full border border-slate-400 rounded-lg px-5 py-2.5 text-sm shadow-sm placeholder-slate-400 bg-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                          />
                          {errors.adults?.message && (
                            <small className="text-red-400 after:content-['*']">
                              {errors.adults.message}
                            </small>
                          )}
                        </label>
                        <label className="w-full">
                          {" "}
                          <input
                            placeholder="No. of children"
                            type="number"
                            {...register("children", {
                              required: "Children pax is required",
                            })}
                            className="w-full border border-slate-400 rounded-lg px-5 py-2.5 text-sm shadow-sm placeholder-slate-400 bg-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                          />{" "}
                          {errors.children?.message && (
                            <small className="text-red-400 after:content-['*']">
                              {errors.children.message}
                            </small>
                          )}
                        </label>
                      </div>
                      <div className="flex gap-2 mb-2">
                        <label className="text-gray-900 text-sm">
                          {" "}
                          Check in
                          <input
                            type="date"
                            {...register("checkIn", {
                              required: "Check in is required",
                            })}
                            className="mt-1 w-full border border-slate-400 rounded-lg px-5 py-2.5 text-sm shadow-sm placeholder-slate-400 bg-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                          />
                          {errors.checkIn?.message && (
                            <small className="text-red-400 after:content-['*']">
                              {errors.checkIn.message}
                            </small>
                          )}
                        </label>

                        <label className="text-gray-900 text-sm">
                          {" "}
                          Check out
                          <input
                            type="date"
                            {...register("checkOut", {
                              required: "Check out is required",
                            })}
                            className="mt-1 w-full border border-slate-400 rounded-lg px-5 py-2.5 text-sm shadow-sm placeholder-slate-400 bg-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                          />
                          {errors.checkOut?.message && (
                            <small className="text-red-400 after:content-['*']">
                              {errors.checkOut.message}
                            </small>
                          )}
                        </label>
                      </div>
                      <label>
                        <input
                          {...register("pickup")}
                          type="checkbox"
                          className="mr-2 mb-2"
                        />
                        Request pickup
                      </label>
                      <div className="mt-4 flex items-center gap-2 w-full">
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-[#F36523]/30 px-4 py-2 text-sm font-medium text-[#F36523] hover:bg-[#F36523] focus:outline-none focus-visible:ring-2 hover:text-white focus-visible:ring-[#F36523]/60 focus-visible:ring-offset-2"
                        >
                          Make reservation
                        </button>
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-purple-100 px-4 py-2 text-sm font-medium text-purple-400 hover:bg-purple-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
                          onClick={toggleModal}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                  {error && <Error error={error} setError={setError} />}
                  {submitting && <Submitting submitting={submitting} />}
                  {succeeded && (
                    <Succedded
                      succeeded={succeeded}
                      homeNavigate={navigate}
                      setSucceded={setSucceded}
                    />
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default RoomReservationModal;
