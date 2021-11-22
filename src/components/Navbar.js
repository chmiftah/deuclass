import { AcademicCapIcon, MenuIcon } from '@heroicons/react/solid'
import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Dialog, Transition } from '@headlessui/react'

export default function Navbar() {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    return (
        <div>
            <nav className="bg-white border-b-2">
                <div className="flex max-w-screen-2xl justify-between items-center mx-auto p-4">

                    <div className="flex">
                        <AcademicCapIcon className="w-8" />
                        <Link to="/" className="italic text-2xl font-semibold">
                            EduClass
                        </Link>
                    </div>

                    <div className=" space-x-4 items-center flex ">
                        <div className="hidden md:flex lg:flex">
                            <Link to="/explore" className="font-medium px-2 text-md">
                                Explore
                            </Link>
                            <Link to="/journey" className="font-medium px-4 text-md">
                                Journey
                            </Link>
                        </div>
                        <div className="lg:hidden md:hidden flex ">
                            <button
                                type="button"
                                onClick={openModal}
                                className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                            >
                                <MenuIcon className="w-6" />
                            </button>
                        </div>
                    </div>

                </div>
            </nav>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className=" px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-80" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className=" align-top"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className=" w-full   p-6 overflow-hidden  transition-all transform bg-white shadow-xl">

                                <div className="mt-2 w-full flex justify-center">

                                    <div className="w-full">
                                        <div className="hover:bg-gray-200 rounded-xl p-2">
                                         
                                            <Link to="/explore" className="font-medium text-xl">
                                                Explore
                                            </Link>
                                        </div>
                                        <div className="hover:bg-gray-200 rounded-xl p-2">
                                            <Link to="/journey" className="font-medium  text-xl">
                                                Journey
                                            </Link>
                                        </div>
                                    </div>

                                </div>

                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="top-0 absolute right-2 "
                                        onClick={closeModal}
                                    >
                                        <p className="text-red-500 text-3xl">x</p>
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}
