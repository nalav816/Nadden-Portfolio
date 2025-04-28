import "../App.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function ProjectScreen(){
    const projects = [
        {title: "Probable Suspect", 
        description: "This is some text to show what my description might look like",
        icon: "imgs/ProbableSuspectIcon.png"},
        {title: "Probable Suspect", 
            description: "This is some text to show what my description might look like",
            icon: "imgs/ProbableSuspectIcon.png"},
            {title: "Probable Suspect", 
                description: "This is some text to show what my description might look like",
                icon: "imgs/ProbableSuspectIcon.png"},
                {title: "Probable Suspect", 
                    description: "This is some text to show what my description might look like",
                    icon: "imgs/ProbableSuspectIcon.png"},
                    {title: "Probable Suspect", 
                        description: "This is some text to show what my description might look like",
                        icon: "imgs/ProbableSuspectIcon.png"},
    ];

    return (
        <div className="ProjectScreen-Container">
            <h1 className ="ProjectScreen-Header">Projects</h1>
            
                <div className = "ProjectScreen-Grid">
                    {projects.map((project, index) => (
                        <div key = {index}>
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

                        </div>
                    ))}
                </div>

            
        </div>
    );
}

export default ProjectScreen