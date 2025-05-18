import Navbar from "../components/Navbar.js";
import Home from "../sections/Home.js"
import Contact from "../sections/Contact.js"
import { useRef } from "react";
import { useInView } from "motion/react";



function MainPage() {
    const contact = useRef()
    const contactVisible = useInView(contact, {amount: .1, once: true})

    return(
        <div className = "homePage">
            <Navbar sections = {{contact: contact}}/>
            <Home/>
            <Contact visible = {contactVisible} ref = {contact}/>
        </div>
    )
}

export default MainPage