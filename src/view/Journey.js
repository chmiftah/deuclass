import React, { useEffect } from 'react'
import App from '../layout/App'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { useState } from 'react/cjs/react.development'
import { Link } from 'react-router-dom'
import Loadinger from '../components/Loadinger'
export default function Journey() {

    const [subject, setSubject] = useState([]);
    const [topic, setTopic] = useState([]);
    const [mounted, setMounted] = useState(true);

    useEffect(() => {
        try {
            const getData = async () => {
                const data = await axios.get(`/api/subject`);
                const topic = await axios.get(`/api/topics/matematika`)
                setSubject(data.data.data);
                setTopic(topic.data.data);
                setMounted(false)
            }
            
            getData()

        } catch (error) {
            setMounted(true)
        }
    }, [])

    console.log(topic);

    return (
        <App>
            <section className="border-b-2 shadow-md bg-gray-500">
                <div className=" max-w-screen-2xl mx-auto py-20 px-4">
                    <p className="text-white text-6xl font-mono mb-2">Permudah Belajarmu dengan materi pilihan</p>
                    <p className="text-xl font-thin text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem labore velit pariatur totam ipsum minima! Temporibus laudantium quos voluptatibus quaerat, totam rerum? Nostrum unde dolorem odio quia sit facilis numquam.</p>
                </div>
            </section>

            <section className="max-w-screen-2xl mx-auto py-20 px-4">
                <div className="lg:flex">
                    <div className=" px-6 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-16">
                        {
                            !mounted ?
                                subject.map((data, index) => (
                                    <Link to={`/journey/${data.slug}`} className="mb-12 transform hover:scale-105 transition-shadow duration-75">
                                        <div className=" rounded-lg px-6 py-4 shadow-lg ">
                                            <div className=" mb-4 flex justify-center items-center">
                                                <div>
                                                    <div className="flex justify-center">
                                                        <img src="https://toppng.com/uploads/preview/open-book-free-vector-icon-designed-by-freepik-book-11562884680cuwtbpcq2w.png" className="w-1/3" alt={data.name} />
                                                    </div>
                                                    <div className="">
                                                        <p className="text-3xl font-mono font-semibold text-gray-600 mb-2 text-center">{data.name}</p>
                                                        <p className="text-2xl font-mono font-semibold text-gray-500 mb-2 text-center">SD-SMP-SMA</p>
                                                        <p className="mt-1 text-center text-gray-600 font-thin">{data.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="bg-indigo-300 rounded-full w-full py-1" />
                                    </Link>
                                ))
                                :

                                <Loadinger style={`lg:flex space-y-4 lg:space-y-0`} />
                        }

                    </div>
                </div>
            </section>
        </App>





    )
}
