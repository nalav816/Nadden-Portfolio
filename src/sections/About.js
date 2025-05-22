import "../App.css"
import AnimatedCard from "../components/AnimatedCard"
import LabeledIcon from "../components/LabeledIcon"
import ParallaxLayer from "../components/ParallaxLayer"
import { forwardRef } from "react"

const About = forwardRef(({visible, isMobile, scale}, ref) => {
    return(
        <div ref = {ref} className = "section gap" id = "About">
            {!isMobile && (
                <ParallaxLayer scale = {scale} layer = {6} className = {"portrait " + (visible && "portraitVisible")}>
                    <img className = "fullWidth fullHeight" src = "imgs/portrait.jpg" alt = "portrait"/>
                </ParallaxLayer>
            )}

            <AnimatedCard className = "relPos" visible = {visible} title = "About Me">
                {isMobile && (
                    <img className = "portrait" src = "imgs/portrait.jpg" alt = "portrait"/>
                )}
                <div className = "small grey descTextPd"> 
                    To create is to be impactful. 
                    Ever since I was a kid, I’ve loved taking things past face value. 
                    Plenty of useful things in our lives seemingly just exist, but how do they exist? 
                    Coupled with a love for technology, this curiosity for understanding the how translated into a passion for coding. 
                    After learning Java, I began to create. Of course, creation comes with its own set of challenges. 
                    Nonetheless, I enjoy it because to me, challenge is what gives life meaning. 
                </div>
            </AnimatedCard>
            <div className = "flex row fullWidth gap wrap">
                <AnimatedCard visible = {visible} className = "educationCard" animationDelay=".1s" titleType="subtitle" title = "Education">
                    <div className = "flex row relPos textPdBottom" style = {{marginTop: "auto"}}>
                        <img className = "novaIcon" src = "imgs/novaIcon.png" alt = "Villanova"/>
                        <img className = "novaIconShadow" src = "imgs/novaIcon.png" alt = "Shadow"/>
                        <div style = {{gap: "1%"}}className = "flex col cardPdLeft">
                            <div className = "big blue "> Villanova University </div>
                            <div className = "grey small" style = {{paddingRight: "10%"}}> Bachelor of Science In Computer Science</div>
                            <div className = "grey small"> June 2024 - May 2028 </div>
                            <div className = "small"> GPA: 3.83 </div>
                        </div>
                    </div>
                </AnimatedCard>
                <AnimatedCard visible = {visible} className = "skillCard" animationDelay=".2s" titleType="subtitle" title = "Skills">
                    <div className = "flex col">
                        <LabeledIcon className = "textPdBottom" color = "orange" textColor = "orange" text = "Java" description="Intermediate" src = "imgs/java.png"/>
                        <LabeledIcon className = "textPdBottom" color = "lightestBlue" textColor = "lightestBlue" text = "Python" description="Novice" src = "imgs/python.png"/>
                        <LabeledIcon className = "textPdBottom" color = "red" textColor = "red" text = "HTML" description="Novice" src = "imgs/html.png"/>
                        <LabeledIcon className = "textPdBottom" color = "blue" textColor = "blue" text = "CSS" description="Novice" src = "imgs/css.png"/>
                        <LabeledIcon className = "textPdBottom" color = "yellow" textColor = "yellow" text = "JavaScript" description="Novice" src = "imgs/javaScript.png"/>
                    </div>
                </AnimatedCard>
            </div>
        </div>
    )
});

export default About;