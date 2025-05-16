import "../App.css"
import Comet from "../components/Comet.js"
import Star from "../components/Star.js"

const starCount = 150

function Home(){
    const stars = new Array(starCount).fill(0);
    return (
        <div className= "section" id = "Home">
            <div className = "card">
                <img className="homeImage" src = "imgs/homeBackground.png" alt = "Home Art"/>
                <div className = "homeLayeredImage  clipContent">
                    {stars.map((v, i) => (
                        <Star key = {i}/>
                    ))}
                    <Comet />
                    <Comet />
                </div>
                <img className = "homeLayeredImage" src = "imgs/homeClouds.png" alt = "Home Art"/>
                <img className = "homeLayeredImage" src = "imgs/homeObjects.png" alt = "Home Art"/>
                <img className="homeLayeredImage angel" src = "imgs/angel.png" alt = "Angel"/>

                 <div className = "titleBox">
                    <div className = "homeTitle blueTextGlow"> Portfolio </div>
                    <div className = "medium blueTextGlow">Nadden  <span className="lightestBlue"> Auguste Laventure </span></div>
                    <div className = "small descTextPd">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </div>
                    <a href = "#Contact" className = "styledButton medButton"> Get In Touch </a>
                </div>

            </div>
        </div>
    );
}

export default Home