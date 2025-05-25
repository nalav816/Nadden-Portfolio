import "../App.css"
import Comet from "../components/Comet.js"
import Star from "../components/Star.js"

import { useMemo } from "react"

const starCount = 150

function Home(){
     const stars = useMemo(() => {
        return new Array(starCount).fill(0).map((_, i) => <Star key={i} />)
    }, []);

    return (
        <div className= "section relPos firstLayer" id = "Home">
            <div className = "card homeCard">
                <img className="homeImage" src = "imgs/homeBackground.png" alt = "Home Art"/>
                <div className = "homeLayeredImage  clipContent">
                    {stars}
                    <Comet />
                    <Comet />
                </div>
                <img className = "homeLayeredImage" src = "imgs/homeClouds.png" alt = "Home Art"/>
                <img className = "homeLayeredImage" src = "imgs/homeObjects.png" alt = "Home Art"/>
                <img className="homeLayeredImage angel" src = "imgs/angel.png" alt = "Angel"/>

                 <div className = "titleBox">
                    <div className = "homeTitle textGlow fadeInFast"> Portfolio </div>
                    <div className = "medium textGlow fadeIn">Nadden  <span className="lightestBlue"> Auguste Laventure </span></div>
                    <div className = "small descTextPd fadeInSlow">
                        I’m a Computer Science student looking for real-world experience to further refine my skillset. 
                        I have been coding independently for two years now, and I am eager to contribute to something larger and meaningful, 
                        whether it be game development, web development, or any other aspect of software engineering.
                    </div>
                    <a href = "#Contact" className = "styledButton medButton enlargeOnHover"> Get In Touch </a>
                </div>

            </div>
            <img className = "pointer" src = "imgs/pointer.png" alt = "pointer"/>
        </div>
    );
}

export default Home