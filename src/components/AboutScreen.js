
import "../App.css"
import skills from "../data/skills.json";

function AboutScreen(){
    return (
        <div className = "AboutScreen-Container" id = "About">
            <div className = "Header">About</div>
            <div className = "HeaderSubtitle">Here you can learn a little bit about me and what I can offer</div>
            <div className = "AboutScreen-AboutBox">
                <h1 className = "AboutScreen-CardHeader">Who Am I?</h1>
                <img src="imgs/me.jpg" alt="Me" className = "AboutScreen-Image"/>
                
                <div className = "AboutScreen-Paragraph">Hi, I'm Nadden. I'm orginally from Brooklyn, NY. I've loved tech ever since I was a kid and that has turned into a passion for coding. I'm particularly interested in game development, although I am open to exploring other fields as well.
                </div>
            </div>
            <div className = "AboutScreen-AboutBox">
                <div className="AboutScreen-CardHeader">Education</div>
                <div className = "AboutScreen-EducationRow">
                    <img className = "AboutScreen-EducationIcon" src = "imgs/VillanovaIcon.png" alt = "Villanova"/>
                    <div className = "AboutScreen-EducationDescriptionColumn">
                        <div className = "AboutScreen-SchoolName"> Villanova University </div>
                        <div className = "AboutScreen-DegreeName"> Bachelor of Science In Computer Science </div>
                        <div className = "AboutScreen-DateOfAttendance"> June 2024 - May 2028 </div>
                        <div className = "AboutScreen-GPA"> GPA: 3.91 </div>
                    </div>
                </div>
            </div>
            <div className = "AboutScreen-AboutBox">
                <div className="AboutScreen-CardHeader">Technical Skills</div>
                <div className="AboutScreen-SkillRow">
                    {skills.map((skill, index) => (
                        <div className = "AboutScreen-SkillColumn" key = {index}>
                            <img className = "AboutScreen-SkillImage" src = {skill.icon} alt = {skill.skill}/>
                            <div className = "AboutScreen-SkillText">{skill.skill}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AboutScreen;