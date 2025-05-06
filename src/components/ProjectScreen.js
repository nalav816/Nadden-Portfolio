import "../App.css"
import projects from "../data/projects.json"



function ProjectScreen(){
    return (
        <div className="ProjectScreen-Container" id = "Project">
            <h1 className ="Header">Projects</h1>
            <div className = "HeaderSubtitle">This is some random text. This is where I will display my cool projects.</div>
                <div className = "ProjectScreen-ProjectContainer">
                    {projects.map((project, index) => (
                        <div className = "ProjectScreen-Card" key = {index}>
                            <img src = {project.icon} alt = "icon" className = "ProjectScreen-CardImg"/>
                            <div className = "ProjectScreen-CardTitle">{project.name}</div>
                            <div className = "ProjectScreen-CardSubTitle">{project.date}</div>
                            <div className = "ProjectScreen-CardTagContainer">
                                {project.tags.map((tag) => (
                                    <div className = {"ProjectScreen-CardTag ProjectScreen-CardTagText ProjectScreen-" +  tag.replaceAll(" ", "") + "CardTag"}>
                                        {tag}
                                    </div>
                                ))}  
                            </div>
                            <div className = "ProjectScreen-CardDescription">{project.description}</div>
                            <button className = "ProjectScreen-CardButton"
                             disabled = {!project.released}>
                                {project.released ? "Learn More" : "Comming Soon"}
                            </button>


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