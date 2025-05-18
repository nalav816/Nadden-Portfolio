import Navbar from "../components/Navbar.js";
import Home from "../sections/Home.js"
import About from "../sections/About.js"
import Contact from "../sections/Contact.js"

import { useRef } from "react";
import { useInView } from "motion/react";



function MainPage() {
    const about = useRef()
    const contact = useRef()
    const aboutVisible = useInView(about, {amount: .1, once: true})
    const contactVisible = useInView(contact, {amount: .1, once: true})


    return(
        <div className = "homePage">
            <Navbar sections = {{about: about, contact: contact}}/>
            <Home/>
            <About visible = {aboutVisible} ref = {about}/>
            <Contact visible = {contactVisible} ref = {contact}/>
        </div>
    )
}

export default MainPage