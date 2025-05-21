import "../App.css"
import { useState, useRef } from "react";
import { useInView, useScroll, useMotionValueEvent } from "motion/react";

function Navbar({ sections, isMobile }) {
    const hamburgerIcon = useRef();
    const { scrollYProgress } = useScroll();
    const [menuToggled, toggleMenu] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    //Threshold before navbar identifies a given section as the current section
    const viewThreshold = .2;
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
                    <a href="#About" className="relPos"> 
                        <div className={aboutInView && !projectsInView && !contactInView ? "" : "upOnHover blueOnHover"}> About </div>
                        {aboutInView && !projectsInView && !contactInView && (<div className="navItemLine" />)}
                    </a>

                    <a href="#Projects" className="relPos"> 
                        <div className={projectsInView && !contactInView ? "" : "upOnHover blueOnHover"}> Projects </div>
                        {projectsInView && !contactInView && (<div className="navItemLine" />)}
                    </a>

                    <a href="#Contact" className="relPos">
                        <div className={contactInView ? "" : "upOnHover blueOnHover"}> Contact </div>
                        {contactInView && (<div className="navItemLine" />)}
                    </a>
                </div>
            ) : (
                <div>
                    <button onClick={onClick}>
                        <img ref={hamburgerIcon} src={menuToggled ? "imgs/hamburgerToggled.png" : "imgs/hamburger.png"} alt="Menu" />
                    </button>
                    {menuToggled && (
                        <div className="navItemsMobile" >
                            <a href="#About"> About </a>
                            <a href="#Projects"> Projects </a>
                            <a href="#Contact"> Contact </a>
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

