import React from 'react'
import { Helmet } from "react-helmet";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function App(props) {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{props.title}</title>
                <meta
                    name={props.name}
                    content={props.description}
                />
            </Helmet>

            <div className="">
                <Navbar/>
                {props.children}
                <Footer/>
            </div>

        </div>

    )
}
