
import "../App.css"

function AboutScreen(){
    return (
        <div className = "AboutScreen-Container">
            <div className = "Header">About</div>
            <div className = "HeaderSubtitle">Random text hahaha.</div>
            <div className = "AboutScreen-AboutBox">
                <h1 className = "AboutScreen-CardHeader">Who Am I?</h1>
                <img src="imgs/me.jpg" alt="Me" className = "AboutScreen-Image"/>
                
                <p1 className = "AboutScreen-Paragraph">This is my life story. Here I type random stuff to make up the needed words for a nice little paragraph.
                    Here are some more random words. Hopefully this is enough to fill up the box.
                </p1>
            </div>
            <div className = "AboutScreen-AboutBox AboutScreen-SkillAboutBox ">
                <div className="AboutScreen-CardHeader">Education</div>
            </div>
            <div className = "AboutScreen-AboutBox AboutScreen-SkillAboutBox ">
                <div className="AboutScreen-CardHeader">Technical Skills</div>
            </div>
        </div>
    );
}

export default AboutScreen;