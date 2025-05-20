import Navbar from "../components/Navbar.js";
import Background from "../components/Background.js"
import Home from "../sections/Home.js"
import About from "../sections/About.js"
import Contact from "../sections/Contact.js"

import { useRef } from "react";
import { useInView } from "motion/react";



function MainPage({isMobile}) {
    const about = useRef()
    const contact = useRef()
    const aboutVisible = useInView(about, {amount: .5, once: true})
    const contactVisible = useInView(contact, {amount: .5, once: true})

    return(
        <div className = "homePage relPos">
            <Navbar sections = {{about: about, contact: contact}} isMobile = {isMobile}/>
            <Home/>
            <About visible = {aboutVisible} ref = {about} isMobile = {isMobile}/>
            <Contact visible = {contactVisible} ref = {contact}/>
            <div className = "clipContent" style = {{zIndex: 0, position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}}>
                <Background isMobile = {isMobile}/> 
            </div>
        </div>
    )
}

export default MainPage