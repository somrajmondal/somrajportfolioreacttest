import React from "react";
import web from "../src/images/homeimage.jpg"
import "../src/index.css"
import { NavLink } from "react-router-dom";
import Common from "./Common";
import Footer from "./Footer";
import Aboutsomraj from "./Abouthome";
import Social from "./Socialmedia";


const Home = () => {
    return (
        <React.Fragment>

            <Common
                name="Hi Guys, Welcome to"
                imgsrc={web}
                visit="/service"
                btname='Get Started'
            />
            <Aboutsomraj />
            <Social/>
            <Footer />

        </React.Fragment>
    )
}

export default Home