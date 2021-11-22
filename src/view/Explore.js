import { ArrowRightIcon, BookOpenIcon, GlobeIcon, HomeIcon } from '@heroicons/react/solid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loadinger from '../components/Loadinger'
import App from '../layout/App'

export default function Explore() {

    const [subjects, setSubject] = useState([])
    const [topics, setTopics] = useState([])
    const [slug, setSlug] = useState();
    const [mounted, setMounted] = useState(false);
    console.log(slug);

    const clickSubject = async (e) => {
        setSlug(e);
        console.log(e);
        let responseTopics = await axios.get(`/api/topics/${e}`)
        setTopics(responseTopics.data.data);
    }

    const searchTopic = async (e) => {

        const data = topics.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(e.toLowerCase())
        })

        setTopics(data)

    }


    useEffect(() => {
        setMounted(true)
        try {
            const getData = async () => {
                let responseSubjects = await axios.get(`/api/subject`)
                let responseTopics = await axios.get(`/api/topics`)
                setSubject(responseSubjects.data.data);
                setTopics(responseTopics.data.data);
                setMounted(false)
            }
            
            getData()
        } catch (error) {
            setMounted(true)
        }


    }, [])


    return (
        <App title={'explore'}>
            <section className="border-b-2 shadow-md">
                <div className=" max-w-screen-2xl mx-auto ">
                    <div className="pt-20">
                        <div className="relative px-4">
                            <p className="text-4xl text-indigo-800 font-semibold font-mono mb-4">Mau Belajar Apa?</p>
                            <input type="search" onChange={(e) => searchTopic(e.target.value)} className="w-full p-4 border-2 border-gray-400 focus:outline-none" />
                            <button className="bg-indigo-800 text-white py-4 text-lg -ml-24 px-6 absolute" style={{ marginTop: -1 }}>search</button>
                        </div>

                        <div className="py-6 px-4 flex items-center">
                            <Link to="/explore" className="flex items-center space-x-1 mr-5">
                                <GlobeIcon className="w-6" /> <p className="text-lg font-mono  ">All</p>
                            </Link>
                            <div className="flex space-x-6 px-2 gap-x-6 -mt-1 overflow-x-auto  scrollbar-hide drop-shadow-sm">
                                {
                                    subjects.map((data, index) => (
                                        <div key={index} className="flex items-center space-x-1 relative">
                                            <img src="https://toppng.com/uploads/preview/open-book-free-vector-icon-designed-by-freepik-book-11562884680cuwtbpcq2w.png" className="w-6" alt={data.name} />  <p className="text-lg pt-1 font-mono" >{data.name}</p>
                                            <button className="py-4 px-8 w-full z-10 absolute" value={data.slug} onClick={(e) => clickSubject(e.target.value)} ></button>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-screen-2xl py-20 mx-auto px-12 lg:px-0 ">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-8 lg:px-12">

                        {
                            !mounted ?
                            topics.map((data, index) => (
                                <Link to={`/content/${data.subject.name}/${data.slug}`} key={index}>
                                    <div className="bg-white shadow-md mx-4  lg:w-80   flex border ">
                                        <div>
                                            <div> <img src="https://www.educative.io/cdn-cgi/image/f=auto,fit=cover,w=620/v2api/collection/10370001/6565025153024000/image/4910260035780608" alt={data.title} className="w-full" /> </div>
                                            <div className="p-4">
                                                <p className="text-2xl">{data.subject.name} - Bab {data.bab} {data.title}</p>
                                                <div className="flex justify-between items-end mt-6 ">
                                                    <p className="text-sm font-light leading-tight">
                                                        <span className="flex"><BookOpenIcon className="w-4 mx-1 text-gray-500" /> {data.subject.name} </span>
                                                        <span className="flex"><HomeIcon className="w-4 mx-1 text-gray-500" />{data.class.name}</span></p>
                                                    <button className="shadow-lg text-gray-500 px-3 py-2 border flex items-center space-x-2">
                                                        <span className="text-md"> Lihat </span>
                                                        <ArrowRightIcon className="w-6" />
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
