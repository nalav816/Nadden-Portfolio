import "../App.css"
import { useEffect, useState, useRef } from "react";

function Navbar(){
    const mobileScreenSize = 768;
    const hamburgerIcon = useRef();
    const [menuToggled, toggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth)
            if(window.innerWidth > mobileScreenSize && menuToggled){
                toggleMenu(false)
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize)
    })

    const onClick = () => {
        toggleMenu(!menuToggled)
    }

    return(
        <div className = "navbar">
            <div className = "navLogo">
                <a href="#Home">
                    <img className = "staticIcon yellowIconGlow upOnHover" src="imgs/angelIcon.png" alt = "Logo"></img>
                </a>
                <div>N<span className = "lightestBlue">A</span></div>
            </div>
           
            {screenWidth > mobileScreenSize ? (
                <div className = "navItems">
                    <a href="#About" className = "upOnHover blueOnHover"> About </a>
                    <a href="#Projects" className = "upOnHover blueOnHover"> Projects </a>
                    <a href="#Contact" className = "upOnHover blueOnHover"> Contact </a>
                </div>
                ) : (
                <div>
                    <button onClick= {onClick}>
                        <img ref = {hamburgerIcon} src = {menuToggled ? "imgs/hamburgerToggled.png" : "imgs/hamburger.png"} alt = "Menu"/>
                    </button>
                    { menuToggled && (
                        <div className = "navItemsMobile" >
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

