
import "../App.css"

function AboutScreen(){
    return (
        <div className = "AboutScreen-Container">
            <div className = "Header">About</div>
            <div className = "AboutScreen-AboutBox">
               
                <img src="imgs/me.jpg" alt="Me" className = "AboutScreen-Image"/>
                <h1 className = "AboutScreen-CardHeader">Who Am I?</h1>
                <p1 className = "AboutScreen-Paragraph">This is my life story. Here I type random stuff to make up the needed words for a nice little paragraph.
                    Here are some more random words. Hopefully this is enough to fill up the box.
                </p1>
            </div>
            <div className = "AboutScreen-AboutBox">
                <div className="AboutScreen-CardHeader AboutScreen-SkillAboutBox">Technical Skills</div>
            </div>
        </div>
    );
}

export default AboutScreen;