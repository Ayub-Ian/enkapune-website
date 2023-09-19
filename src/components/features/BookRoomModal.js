import { Dialog, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import React, { Fragment } from 'react'

function BookRoomModal({ isOpen , toggleModal }) {
  return (
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
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium monty leading-6 text-gray-900"
              >
                Book a room
              </Dialog.Title>

              <div className="mt-2">
                <form className="text-gray-900">
                  <input
                    placeholder="Fullname"
                    type="text"
                    className=" mb-2 w-full border border-slate-400 rounded-lg px-5 py-2.5 text-sm shadow-sm placeholder-slate-400 bg-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  />
                  <input
                    placeholder="Personal email"
                    type="text"
                    className=" mb-2 w-full border border-slate-400 rounded-lg px-5 py-2.5 text-sm shadow-sm placeholder-slate-400 bg-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  />
                  <input
                    placeholder="Phone number"
                    type="text"
                    className="mb-2 w-full border border-slate-400 rounded-lg px-5 py-2.5 text-sm shadow-sm placeholder-slate-400 bg-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  />
                  <label className="relative w-full">
                    <select className="mb-2 appearance-none w-full border border-slate-400 rounded-lg px-5 py-2.5 text-sm shadow-sm placeholder-slate-400 bg-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500">
                      <option>Choose room type</option>
                      <option value="king deluxe">KING DELUXE SUITE</option>
                      <option value="superior double">
                        SUPERIOR DOUBLE SUITE
                      </option>
                    </select>
                    <ChevronDownIcon className="h-5 w-5 absolute top-0.5 right-5" />
                  </label>
                  <label className="relative w-full">
                    <select className="mb-2 appearance-none w-full border border-slate-400 rounded-lg px-5 py-2.5 text-sm shadow-sm placeholder-slate-400 bg-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500">
                      <option>Choose package</option>
                      <option value="king deluxe">Full board</option>
                      <option value="superior double">Half board </option>
                      <option value="superior double">
                        Bed and Breakfast{" "}
                      </option>
                    </select>
                    <ChevronDownIcon className="h-5 w-5 absolute top-0.5 right-5" />
                  </label>
                  <div className="flex gap-2 mb-2">
                    <input
                      placeholder="No. of adults"
                      type="text"
                      className="w-full border border-slate-400 rounded-lg px-5 py-2.5 text-sm shadow-sm placeholder-slate-400 bg-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                    />
                    <input
                      placeholder="No. of children"
                      type="text"
                      className="w-full border border-slate-400 rounded-lg px-5 py-2.5 text-sm shadow-sm placeholder-slate-400 bg-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                    />
                  </div>
                  <div className="flex gap-2 mb-2">
                    <label className="text-gray-900 text-sm">
                      {" "}
                      Arrival date
                      <input
                        type="date"
                        className="mt-1 w-full border border-slate-400 rounded-lg px-5 py-2.5 text-sm shadow-sm placeholder-slate-400 bg-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                      />
                    </label>

                    <label className="text-gray-900 text-sm">
                      {" "}
                      Departure date
                      <input
                        type="date"
                        className="mt-1 w-full border border-slate-400 rounded-lg px-5 py-2.5 text-sm shadow-sm placeholder-slate-400 bg-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                      />
                    </label>
                  </div>
                </form>
              </div>

              <div className="mt-4 flex items-center gap-2 w-full">
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md border border-transparent bg-[#F36523]/30 px-4 py-2 text-sm font-medium text-[#F36523] hover:bg-[#F36523] focus:outline-none focus-visible:ring-2 hover:text-white focus-visible:ring-[#F36523]/60 focus-visible:ring-offset-2"
                  onClick={toggleModal}
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
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
  )
}

export default BookRoomModal