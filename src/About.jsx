import React from "react";
import web from "../src/images/aboutpage.jpg"
import "../src/index.css"
import { NavLink } from "react-router-dom";
import Common from "./Common";
import Footer from "./Footer";

const About = () => {
    return (
        <React.Fragment>
            <Common 
            name="About" 
            imgsrc={web}
            visit="/contact"
            btname= 'Contact Now'
            />
            <Footer/>
        </React.Fragment>
    )
}

export default About