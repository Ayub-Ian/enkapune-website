import { Transition } from "@headlessui/react";
import React, { Fragment } from "react";

function Error({ error, setError }) {
  return (
    <>
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
            <p className="mt-10 text-xl monty font-bold ">
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
    </>
  );
}

export default Error;
