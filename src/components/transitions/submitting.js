import { Transition } from '@headlessui/react'
import React, { Fragment } from 'react'

function Submitting({submitting}) {
  return (
    <>
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
          <div className="flex flex-col justify-center items-center absolute top-0 left-0 h-full rounded-lg w-full bg-white bg-opacity-90">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-black"></div>
            <p className="mt-10 text-xl text-[#F36523] font-bold">SENDING...</p>
          </div>
        </Transition>
      )}
    </>
  )
}

export default Submitting