import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Disclosure } from '@headlessui/react'
import { ArrowDownIcon } from '@heroicons/react/solid'

export default function Smp() {

    const [topic, setTopic] = useState([])



    useEffect(() => {
        const getData = async () => {
            let responseTopic = await axios.get(`/api/topics/matematika`)
            setTopic(responseTopic.data.data)
        }
        getData()
    }, [])
    return (

        <div className="space-y-4">
            <Disclosure>
                <Disclosure.Button className="py-2 w-full bg-indigo-400 rounded-2xl p-6">
                    <p className="text-2xl font-mono text-white text-center py-2">    KELAS VII</p>
                    <div className="flex justify-center">
                        <ArrowDownIcon className="animate-bounce w-6 text-center text-white" />
                    </div>
                </Disclosure.Button>
                <Disclosure.Panel className="">

                    <p className="border-l-4 border-indigo-400 text-xl font-thin px-2">Semester 1</p>
                    <div className="border-l-4 border-indigo-400 py-4 px-2">
                        {
                            topic.map((data, index) => (
                                <div className="" key={index}>
                                    {
                                        data.class.slug === "vii-semester-1" ?
                                            <div className="flex items-start py-2">
                                                <div className="mr-2">
                                                    <div className="p-2 rounded-full bg-indigo-400">

                                                    </div>
                                                </div>
                                                <div className="-mt-1">
                                                    <p className="text-xl font-mono "> BAB {data.bab}. - {data.title}</p>
                                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit expedita reprehenderit error quasi magni rerum deleniti assumenda excepturi dicta, quae accusamus sint corporis voluptatem tenetur, obcaecati amet, dolorem repudiandae provident.</p>
                                                </div>
                                            </div> : ''
                                    }
                                </div>
                            ))
                        }
                    </div>



                    <p className="border-l-4 border-indigo-400 text-xl font-thin px-2">Semester 2</p>
                    <div className="border-l-4 border-indigo-400 py-4 px-2">
                        {
                            topic.map((data, index) => (
                                <div className="" key={index}>
                                    {
                                        data.class.slug === "vii-semester-2" ?
                                            <div className="flex items-start py-2">
                                                <div className="mr-2">
                                                    <div className="p-2 rounded-full bg-indigo-400">

                                                    </div>
                                                </div>
                                                <div className="-mt-1">
                                                    <p className="text-xl font-mono "> BAB {data.bab}. - {data.title}</p>
                                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit expedita reprehenderit error quasi magni rerum deleniti assumenda excepturi dicta, quae accusamus sint corporis voluptatem tenetur, obcaecati amet, dolorem repudiandae provident.</p>
                                                </div>
                                            </div> : ''
                                    }
                                </div>
                            ))
                        }
                    </div>
                </Disclosure.Panel>
            </Disclosure>


            <Disclosure>
                <Disclosure.Button className="py-2 w-full bg-indigo-400 rounded-2xl p-6">
                    <p className="text-2xl font-mono text-white text-center py-2">    KELAS VIII</p>
                    <div className="flex justify-center">
                        <ArrowDownIcon className="animate-bounce w-6 text-center text-white" />
                    </div>
                </Disclosure.Button>
                <Disclosure.Panel className="">
                    <p className="border-l-4 border-indigo-400 text-xl font-thin px-2">Semester 1</p>
                    <div className="border-l-4 border-indigo-400 py-4 px-2">
                        {
                            topic.map((data, index) => (
                                <div className="" key={index}>
                                    {
                                        data.class.slug === "vii-semester-1" ?
                                            <div className="flex items-start py-2">
                                                <div className="mr-2">
                                                    <div className="p-2 rounded-full bg-indigo-400">

                                                    </div>
                                                </div>
                                                <div className="-mt-1">
                                                    <p className="text-xl font-mono "> BAB {data.bab}. - {data.title}</p>
                                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit expedita reprehenderit error quasi magni rerum deleniti assumenda excepturi dicta, quae accusamus sint corporis voluptatem tenetur, obcaecati amet, dolorem repudiandae provident.</p>
                                                </div>
                                            </div> : ''
                                    }
                                </div>
                            ))
                        }
                    </div>



                    <p className="border-l-4 border-indigo-400 text-xl font-thin px-2">Semester 2</p>
                    <div className="border-l-4 border-indigo-400 py-4 px-2">
                        {
                            topic.map((data, index) => (
                                <div className="" key={index}>
                                    {
                                        data.class.slug === "vii-semester-2" ?
                                            <div className="flex items-start py-2">
                                                <div className="mr-2">
                                                    <div className="p-2 rounded-full bg-indigo-400">

                                                    </div>
                                                </div>
                                                <div className="-mt-1">
                                                    <p className="text-xl font-mono "> BAB {data.bab}. - {data.title}</p>
                                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit expedita reprehenderit error quasi magni rerum deleniti assumenda excepturi dicta, quae accusamus sint corporis voluptatem tenetur, obcaecati amet, dolorem repudiandae provident.</p>
                                                </div>
                                            </div> : ''
                                    }
                                </div>
                            ))
                        }
                    </div>
                </Disclosure.Panel>
            </Disclosure>


            <Disclosure>
                <Disclosure.Button className="py-2 w-full bg-indigo-400 rounded-2xl p-6">
                    <p className="text-2xl font-mono text-white text-center py-2">    KELAS IX</p>
                    <div className="flex justify-center">
                        <ArrowDownIcon className="animate-bounce w-6 text-center text-white" />
                    </div>
                </Disclosure.Button>
                <Disclosure.Panel className="">
                    <p className="border-l-4 border-indigo-400 text-xl font-thin px-2">Semester 1</p>
                    <div className="border-l-4 border-indigo-400 py-4 px-2">
                        {
                            topic.map((data, index) => (
                                <div className="" key={index}>
                                    {
                                        data.class.slug === "vii-semester-1" ?
                                            <div className="flex items-start py-2">
                                                <div className="mr-2">
                                                    <div className="p-2 rounded-full bg-indigo-400">

                                                    </div>
                                                </div>
                                                <div className="-mt-1">
                                                    <p className="text-xl font-mono "> BAB {data.bab}. - {data.title}</p>
                                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit expedita reprehenderit error quasi magni rerum deleniti assumenda excepturi dicta, quae accusamus sint corporis voluptatem tenetur, obcaecati amet, dolorem repudiandae provident.</p>
                                                </div>
                                            </div> : ''
                                    }
                                </div>
                            ))
                        }
                    </div>



                    <p className="border-l-4 border-indigo-400 text-xl font-thin px-2">Semester 2</p>
                    <div className="border-l-4 border-indigo-400 py-4 px-2">
                        {
                            topic.map((data, index) => (
                                <div className="" key={index}>
                                    {
                                        data.class.slug === "vii-semester-2" ?
                                            <div className="flex items-start py-2">
                                                <div className="mr-2">
                                                    <div className="p-2 rounded-full bg-indigo-400">

                                                    </div>
                                                </div>
                                                <div className="-mt-1">
                                                    <p className="text-xl font-mono "> BAB {data.bab}. - {data.title}</p>
                                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit expedita reprehenderit error quasi magni rerum deleniti assumenda excepturi dicta, quae accusamus sint corporis voluptatem tenetur, obcaecati amet, dolorem repudiandae provident.</p>
                                                </div>
                                            </div> : ''
                                    }
                                </div>
                            ))
                        }
                    </div>
                </Disclosure.Panel>
            </Disclosure>

     





        </div>
    )
}
