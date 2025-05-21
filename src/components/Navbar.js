import "../App.css"
import { useState, useRef } from "react";
import { useInView, useScroll, useMotionValueEvent } from "motion/react";

const Navitem = ({type, sectionInView, isMobile, toggleMenu}) => {
    const onClick = () => {
        if(isMobile && !sectionInView){
            toggleMenu(false);
        }
    }

    return (
         <a href= {"#" + type} className="relPos" onClick = {onClick}> 
            <div className={sectionInView ? (isMobile ? "lightestBlue" : "") : "upOnHover blueOnHover"}> {type} </div>
            {sectionInView && !isMobile && (<div className="navItemLine" />)}
        </a>
    )
}

function Navbar({ sections, isMobile }) {
    const hamburgerIcon = useRef();
    const {scrollYProgress } = useScroll();
    const [menuToggled, toggleMenu] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    //Threshold before navbar identifies a given section as the current section
    const viewThreshold = isMobile ? .4 : .2;
    const aboutInView = useInView(sections.about, {amount: viewThreshold})
    const contactInView = useInView(sections.contact, { amount: viewThreshold});
    const projectsInView = useInView(sections.projects, { amount: viewThreshold});
    
    const onClick = () => {
        toggleMenu(!menuToggled)
    }

    useMotionValueEvent(scrollYProgress, "change", (newValue) => {
        setScrollProgress(newValue);
    })

    return (
        <div className="navbar">
            <div className="navLogo">
                <a href="#Home">
                    <div className="yellow staticIcon upOnHover">
                        <img style = {{borderRadius: "60%"}}className="iconImage" src="imgs/angelIcon.png" alt="Logo"></img>
                        <div className="radialGlow" />
                    </div>
                </a>
                <div>N<span className="lightestBlue">A</span></div>
            </div>

            {!isMobile ? (
                <div className="navItems">
                    <Navitem type = "About" sectionInView = {aboutInView && !projectsInView && !contactInView} isMobile = {isMobile} toggleMenu = {toggleMenu}/>
                    <Navitem type = "Projects" sectionInView = {projectsInView && !contactInView} isMobile = {isMobile} toggleMenu = {toggleMenu}/>
                    <Navitem type = "Contact" sectionInView = {contactInView} isMobile = {isMobile} toggleMenu = {toggleMenu}/>
                </div>
            ) : (
                <div>
                    <button onClick={onClick}>
                        <img ref={hamburgerIcon} src={menuToggled ? "imgs/hamburgerToggled.png" : "imgs/hamburger.png"} alt="Menu" />
                    </button>
                    {menuToggled && (
                        <div className="navItemsMobile" >
                            <Navitem type = "About" sectionInView = {aboutInView && !projectsInView && !contactInView} isMobile = {isMobile} toggleMenu = {toggleMenu}/>
                            <Navitem type = "Projects" sectionInView = {projectsInView && !contactInView} isMobile = {isMobile} toggleMenu = {toggleMenu}/>
                            <Navitem type = "Contact" sectionInView = {contactInView} isMobile = {isMobile} toggleMenu = {toggleMenu}/>
                        </div>
                    )}
                </div>
            )
            }

            <div className = "scrollProgressBar" style = {{transform: "scaleX(" + scrollProgress + ")" }}/>
        </div>
    );
}

export default Navbar;

