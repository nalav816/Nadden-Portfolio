import "../App.css"
import { useEffect, useState, useRef } from "react";
import { useInView } from "motion/react";

function Navbar({ sections }) {
    const mobileScreenSize = 768;
    const hamburgerIcon = useRef();
    const [menuToggled, toggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const viewThreshold = .3;
    const aboutInView = useInView(sections.about, {amount: viewThreshold})
    const contactInView = useInView(sections.contact, { amount: viewThreshold});
    
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth)
            if (window.innerWidth > mobileScreenSize && menuToggled) {
                toggleMenu(false)
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize)
    })

    const onClick = () => {
        toggleMenu(!menuToggled)
    }

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

            {screenWidth > mobileScreenSize ? (
                <div className="navItems">
                    <a href="#About" className="relPos"> 
                        <div className={aboutInView && !contactInView ? "lightestBlue" : "upOnHover blueOnHover"}> About </div>
                        {aboutInView && !contactInView && (<div className="navItemLine" />)}
                    </a>

                    <a href="#Projects" className="upOnHover blueOnHover"> Projects </a>

                    <a href="#Contact" className="relPos">
                        <div className={contactInView ? "lightestBlue" : "upOnHover blueOnHover"}> Contact </div>
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
        </div>
    );
}

export default Navbar;

