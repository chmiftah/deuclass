import React, { useEffect, useState } from 'react'
import { ArrowLeftIcon, BookOpenIcon, HomeIcon } from '@heroicons/react/solid'
import { useNavigate, useParams } from 'react-router'
import axios from 'axios'
import App from '../layout/App'
export default function Content() {

    const { slug } = useParams()
    const [content, setContent] = useState([])
    const [topic, setTopic] = useState([])
    const navigate = useNavigate()




    useEffect(() => {
        const getData = async () => {

            let responseContent = await axios.get(`/api/topics/content/${slug}`)
            setContent(responseContent.data.data);

            let responseTopic = await axios.get(`/api/topics/kimia`)
            setTopic(responseTopic.data.data);



        }
        getData()

    }, [slug])

    return (
        <App>
            <div>
                <section className="border-b-2 shadow-md bg-indigo-900">
                    <div className=" max-w-screen-2xl mx-auto py-20 px-4">
                        <p className="text-white text-5xl font-mono mb-2">Kimia - BAB 1. {content.title}</p>
                        <p className="text-xl font-thin text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem labore velit pariatur totam ipsum minima! Temporibus laudantium quos voluptatibus quaerat, totam rerum? Nostrum unde dolorem odio quia sit facilis numquam.</p>
                    </div>
                </section>

                <section className="max-w-screen-2xl mx-auto py-20 px-4">
                    <div className="lg:flex">
                        <div className="lg:w-2/3 px-6">

                            <div>
                                <hr className="bg-indigo-400 rounded-full w-full py-1" />
                                <div className="bg-gray-50  rounded-lg p-6">

                                    <div className="flex items-center mb-4">
                                        <div><BookOpenIcon className="w-8 mr-2 text-gray-400" /></div>
                                        <div className="font-thin text-lg">BAB {content.bab}</div>
                                    </div>
                                    <div>
                                        <p className="text-4xl font-mono font-semibold text-gray-500 mb-2">BAB {content.bab}. {content.title}</p>
                                        <p className="-mt-1 text-gray-600 font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consequatur laborum recusandae repudiandae fuga, voluptatum illum! Accusantium temporibus excepturi dolor in sequi dicta. Ipsa possimus sunt culpa sed mollitia itaque!</p>
                                    </div>
                                </div>
                                <div className="border border-gray-200  px-6 py-6">
                                    <p className="text-lg font-thin" dangerouslySetInnerHTML={{ __html: `${content.body}` }}></p>
                                </div>
                            </div>

                        </div>
                        <div className="lg:w-1/3 px-4">
                            <div className="flex  items-center mb-4">
                                <ArrowLeftIcon className="w-8 mx-4 " />
                                <p className="text-4xl" onClick={() => navigate(-1)}>Kembali Materi </p>
                            </div>

                            <hr />

                            <div className="py-4 text-3xl">Materi Terkait</div>

                            {
                                topic.map((data, index) => (
                                    <div key={index}>
                                        <div className="bg-white shadow-md mb-4    flex border ">
                                            <div className="w-full">
                                                <div className="p-4 ">
                                                    <p className="text-xl">{data.title}</p>
                                                    <div className="  justify-between items-center mt-4 lg:mt-0  ">
                                                        <span className="flex"><BookOpenIcon className="w-4 mx-1 text-gray-500" /> {data.subject.name} </span>
                                                        <span className="flex"><HomeIcon className="w-4 mx-1 text-gray-500" />{data.class.name}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>


            </div>
        </App>
    )
}
