
import "../App.css"

function AboutScreen(){
    return (
        <div className = "AboutScreen-Container">
            <div className = "AboutScreen-AboutBox">
                
                <img src="imgs/me.jpg" alt="Me" className = "AboutScreen-Image"/>
                <h1 className = "AboutScreen-Header">About Me</h1>
                <p1 className = "AboutScreen-Paragraph">This is my life story. Here I type random stuff to make up the needed words for a nice little paragraph.
                    Here are some more random words. Hopefully this is enough to fill up the box.
                </p1>
            </div>
        </div>
    );
}

export default AboutScreen;