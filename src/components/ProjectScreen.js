import "../App.css"



function ProjectScreen(){
    const projects = [
        {title: "Probable Suspect", 
        description: "This is some text to show what my description might look like",
        icon: "imgs/ProbableSuspectIcon.png",
        published: "August 16, 2006"},
        {title: "Probable Suspect", 
            description: "This is some text to show what my description might look like",
            icon: "imgs/ProbableSuspectIcon.png",
            published: "August 16, 2006"},
            {title: "Probable Suspect", 
                description: "This is some text to show what my description might look like",
                icon: "imgs/ProbableSuspectIcon.png",
                published: "August 16, 2006"},
               

    ];

    return (
        <div className="ProjectScreen-Container" id = "Project">
            <h1 className ="Header">Projects</h1>
            <div className = "HeaderSubtitle">This is some random text. This is where I will display my cool projects.</div>
                <div className = "ProjectScreen-ProjectContainer">
                    {projects.map((project, index) => (
                        <div className = "ProjectScreen-Card" key = {index}>
                            <img src = {project.icon} alt = "icon" className = "ProjectScreen-CardImg"/>
                            <div className = "ProjectScreen-CardTitle">Hello</div>
                            <div className = "ProjectScreen-CardSubTitle">{project.published}</div>
                            <div className = "ProjectScreen-CardTagContainer">
                                <div className = "ProjectScreen-CardTag ProjectScreen-JavaCardTag ProjectScreen-CardTagText">Java</div>
                                <div className = "ProjectScreen-CardTag ProjectScreen-IndependentCardTag ProjectScreen-CardTagText">Independent</div>
                                <div className = "ProjectScreen-CardTag ProjectScreen-MediumSizeCardTag ProjectScreen-CardTagText">Medium Size</div>
                            </div>
                            <div className = "ProjectScreen-CardDescription">{project.description}</div>
                            <button className = "ProjectScreen-CardButton">Learn More</button>


                        </div>
                    ))}
                    
                </div>
    

            
        </div>
    );
}

/**
 *  {projects.map((project, index) => (
                        
                            <Card className = "ProjectScreen-Card">
                                <Card.Img variant="top" src = {project.icon}></Card.Img>
                                <Card.Title> {project.title} </Card.Title>
                                <Card.Subtitle> Published: August 6, 2006 </Card.Subtitle>
                                <div>
                                    <p> Java </p>
                                </div>
                                <Card.Text> {project.description} </Card.Text>
                                <Button> Learn More </Button>
                            </Card>

                        
                    ))}
 */

export default ProjectScreen