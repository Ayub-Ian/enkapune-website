import { Transition } from '@headlessui/react';
import React, { Fragment } from 'react'

function Succedded({succeeded, homeNavigate, setSucceded}) {
  return (
    <>
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
          <div className="flex flex-col justify-center items-center absolute top-0 left-0 h-full w-full rounded-lg text-black bg-white">
            <p className='mb-4 text-xl animate-bounce'>🎉</p>
            <p className="text-xl text-[#F36523] font-bold">MESSAGE SENT!</p>
            <p className="text-lg my-5 text-center mx-5 max-w-[60ch]">
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
    </>
  )
}

export default Succedded