import React, { useEffect, useRef, useState } from 'react'
import bg from './bg.svg'

import { HomeIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

import App from '../layout/App';
import Loadinger from '../components/Loadinger';
import { Link } from 'react-router-dom';

export default function Home() {

    const [subjects, setSubject] = useState([])
    const [topics, setTopics] = useState([])
    const [mounted, setMounted] = useState(true);

    const settings = {

        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const settings1 = {
      
        infinite: true,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 2.5,
                    initialSlide: 2.5
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1.5,
                    initialSlide: 1.5
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1.5
                }


            }, {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }

            }
        ]
    };
    const sliderRef = useRef();
    function next() {
        sliderRef.current.slickNext();
    }
    function previous() {
        sliderRef.current.slickPrev();
    }


    useEffect(() => {
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
            setMounted(false)

        }

    }, [])

    return (
        <App title={'EduClass'}>
            <div>
                <div className="bg-gray-500 py-10">
                    <div className="lg:flex max-w-screen-2xl justify-between items-center mx-auto p-3">
                        <div className="lg:w-1/2 pl-6 ">
                            <p className=" text-7xl text-white font-extrabold font-sans leading-tight text-left">
                                Let's Grow Your <br />
                                <span className="text-green-300">Education</span> Level up <br />
                                with EduClass
                            </p>
                            <button className="bg-yellow-300 py-3 px-5 text-2xl my-4 font-semibold rounded-lg text-white">Learn Now</button>
                        </div>
                        <div className="lg:w-1/2 p-6">
                            <img src={bg} alt="" className="md:w-3/4" />
                        </div>
                    </div>

                </div>
            </div>

            <div className="max-w-screen-md lg:max-w-screen-2xl mx-auto py-20 bg-white ">
                <p className="text-4xl font-mono font-semibold text-gray-500 text-center mb-2 px-4 ">Lanjutkan belajarmu dengan berbagai mata pelajaran</p>
                <p className="text-xl text-gray-500 text-center font-thin  mb-8">Dapatkan jawaban lengkap dengan penjelasannya untuk soal-soal di buku sekolahmu, dijawab oleh pakar pendidikan</p>
                <div className="relative px-2">
                    <div>
                        <button className="button  absolute  flex h-48  items-center" onClick={previous}>
                            <div>
                                <ChevronLeftIcon className="h-12 w-12 text-gray-400 text-center bg-gray-200 rounded-full" />
                            </div>
                        </button>
                    </div>
                    <div className="px-12 mx-4">


                        {!mounted ?
                            <Slider {...settings} ref={sliderRef}>
                                {
                                    subjects.map((data, index) => (
                                        <Link  to={`/journey/${data.slug}`} key={index} className="transform hover:scale-105 hover:animate-pulse">
                                            <div className="bg-gray-50 mx-4 rounded-xl h-48 flex items-center justify-center">
                                                <div className="">
                                                    <div className="flex justify-center mb-2"> <img src="https://toppng.com/uploads/preview/open-book-free-vector-icon-designed-by-freepik-book-11562884680cuwtbpcq2w.png" alt={data.name} className="w-20 flex justify-center text-gray-600" /></div>
                                                    <div className="text-2xl text-gray-800 font-medium text-center ">{data.name}</div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </Slider>
                            :
                            <Loadinger style={`flex w-full justify-center`} />
                        }


                    </div>

                    <div>
                        <button className="button  absolute right-0 top-0 flex h-48 items-center pr-2" onClick={next}>
                            <div>
                                <ChevronRightIcon className="h-12 w-12 text-gray-400 text-center bg-gray-200 rounded-full" />
                            </div>
                        </button>
                    </div>


                    <div className="flex justify-center pt-12">
                        <Link to="/journey"className="bg-gray-300 px-4 py-3 text-lg text-gray-500 font-semibold shadow-md transform hover:scale-105 animate-pulse font-mono rounded-2xl">Lihat Semua</Link>

                    </div>
                </div>

            </div>



            <div className="max-w-screen-md lg:max-w-screen-2xl mx-auto py-20 ">
                <p className="text-4xl font-mono font-semibold text-gray-500 text-center mb-2 px-4 ">Temukan materi pelajaran terbaru</p>
                <p className="text-xl text-gray-500 text-center font-thin  mb-8">Dapatkan jawaban lengkap dengan penjelasannya untuk soal-soal di buku sekolahmu, dijawab oleh pakar pendidikan</p>
                <div className="relative px-2">
                    <div className="px-12">
                        {
                            !mounted ? <Slider {...settings1} className="">

                                {
                                    topics.map((data, index) => (
                                        <Link to={`/content/${data.subject.name}/${data.slug}`} key={index}>
                                            <div className="bg-white shadow-md mx-4 lg:w-96 w-56  flex border transform hover:scale-105 animate-pulse ">
                                                <div>
                                                    <div> <img src="https://www.educative.io/cdn-cgi/image/f=auto,fit=cover,w=620/v2api/collection/10370001/6565025153024000/image/4910260035780608" alt={data.title} className="w-full" /> </div>
                                                    <div className="p-4 lg:h-36 h-32">
                                                        <p className="text-xl">{data.title}</p>
                                                        <div className="flex justify-between items-center mt-6 ">
                                                            <p className="text-sm font-light leading-tight">
                                                                <span className="flex"><HomeIcon className="w-4 mx-1 text-gray-500" /> {data.class.name} </span>
                                                                <span className="flex"><HomeIcon className="w-4 mx-1 text-gray-500" /> {data.subject.name} </span>
                                                            </p>


                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </Slider>
                                :

                                <Loadinger style={`flex w-full justify-center`} />

                        }
                    </div>
                    <div className="flex justify-center pt-12">
                        <Link to="/explore" className="bg-gray-300 px-4 py-3 text-lg text-gray-500 font-semibold shadow-md transform hover:scale-105 animate-pulse font-mono rounded-2xl">Lihat Semua</Link>

                    </div>
                </div>


            </div>

        </App>
    )
}

