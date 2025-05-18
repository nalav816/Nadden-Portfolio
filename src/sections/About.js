import "../App.css"
import AnimatedCard from "../components/AnimatedCard"
import LabeledIcon from "../components/LabeledIcon";
import { forwardRef } from "react"

const About = forwardRef(({visible}, ref) => {
    return(
        <div ref = {ref} className = "section gap" id = "About">
            <AnimatedCard className = "relPos" visible = {visible} title = "About Me">
                <img className = "portrait" src = "imgs/portrait.jpg" alt = "portrait"/>
                <div className = "small lightGrey descTextPd"> Hi, I'm Nadden. I'm orginally from Brooklyn, NY. I've loved tech ever since I was a kid and that has turned into a passion for coding. I'm particularly interested in game development, although I am open to exploring other fields as well.</div>
            </AnimatedCard>
            <div className = "flex row fullWidth gap wrap">
                <AnimatedCard visible = {visible} className = "educationCard" animationDelay=".1s" titleType="subtitle" title = "Education">
                    <div className = "flex row relPos">
                        <img className = "novaIcon" src = "imgs/novaIcon.png" alt = "Villanova"/>
                        <img className = "novaIconShadow" src = "imgs/novaIcon.png" alt = "Shadow"/>
                        <div className = "flex col cardPdLeft" style = {{gap: "1%"}}>
                            <div className = "big blue "> Villanova University </div>
                            <div className = "lightGrey small" style = {{paddingRight: "10%"}}> Bachelor of Science In Computer Science</div>
                            <div className = "lightGrey small"> June 2024 - May 2028 </div>
                            <div className = "small"> GPA: 3.83 </div>
                        </div>
                    </div>
                </AnimatedCard>
                <AnimatedCard visible = {visible} className = "skillCard" animationDelay=".2s" titleType="subtitle" title = "Skills">
                    <div className = "flex col" style = {{gap: "2.5%"}}>
                        <LabeledIcon color = "orange" textColor = "orange" text = "Java" description="Intermediate" src = "imgs/java.png"/>
                        <LabeledIcon color = "lightestBlue" textColor = "lightestBlue" text = "Python" description="Novice" src = "imgs/python.png"/>
                        <LabeledIcon color = "red" textColor = "red" text = "HTML" description="Novice" src = "imgs/html.png"/>
                        <LabeledIcon color = "blue" textColor = "blue" text = "CSS" description="Novice" src = "imgs/css.png"/>
                        <LabeledIcon color = "yellow" textColor = "yellow" text = "JavaScript" description="Novice" src = "imgs/javaScript.png"/>
                    </div>
                    

                </AnimatedCard>
            </div>
        </div>
    )
});

export default About;