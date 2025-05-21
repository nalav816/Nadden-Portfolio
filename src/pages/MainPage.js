import Navbar from "../components/Navbar.js";
import Background from "../components/Background.js"
import Home from "../sections/Home.js"
import About from "../sections/About.js"
import Projects from "../sections/Projects.js"
import Contact from "../sections/Contact.js"

import { useRef } from "react";
import { useInView } from "motion/react";



function MainPage({isMobile, scale}) {
    const about = useRef();
    const contact = useRef();
    const projects = useRef();
    const visibleThreshold = .4;
    const aboutVisible = useInView(about, {amount: visibleThreshold, once: true});
    const contactVisible = useInView(contact, {amount: visibleThreshold, once: true});
    const projectsVisible = useInView(projects, {amount: visibleThreshold, once: true});

    return(
        <div className = "homePage relPos">
            <Navbar sections = {{about: about, projects: projects, contact: contact}} isMobile = {isMobile}/>
            <Home/>
            <About scale = {scale} visible = {aboutVisible} ref = {about} isMobile = {isMobile}/>
            <Projects scale = {scale} visible = {projectsVisible} ref = {projects}/>
            <Contact visible = {contactVisible} ref = {contact}/>
            <div className = "clipContent" style = {{zIndex: 0, position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}}>
                <Background scale = {scale} isMobile = {isMobile}/> 
            </div>
        </div>
    )
}

export default MainPage