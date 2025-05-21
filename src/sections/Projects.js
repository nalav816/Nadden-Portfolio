import "../App.css"
import AnimatedCard from "../components/AnimatedCard"
import { forwardRef, useState } from "react"

const projectList = [
    {
        name: "Probable Suspect",
        icon: "imgs/probableSuspectIcon.png",
        completed: false,
        completionDate: "June 2025",
        tags: ["java", "independent", "medium"],
        caption: "A murder mystery game built on Java and the Swing framework.",
        description: "  In Probable Suspect, following a murder, the player attains randomized clues through interrogating procedurally generated witnesses. Given these clues, the player is then tasked with choosing the correct suspect. \n    Though the lack of a game engine wasn’t ideal for the game’s scope, it has provided the opportunity to engage with and understand technologies often taken for granted, such as collision detection. In addition to those mentioned earlier, this game uses a variety of systems, including but not limited to branching character dialogue, event-driven gameplay, multithreading (through Java Swing), and UI interpolation.",
        githubURL: "https://github.com/nalav816/Probable-Suspect"
    },

    {
        name: "Planet Sim",
        icon: "imgs/planetSimIcon.png",
        completed: false,
        completionDate: "December 2023",
        tags: ["java", "independent", "small"],
        caption: "A program which simulates planetary gravitational motion.",
        description: " Write later",
        githubURL: " Add later"
    },

    {
        name: "Choclateer At War",
        icon: "imgs/choclateerAtWarIcon.png",
        completed: true,
        completionDate: "March 2023",
        tags: ["gml", "independent", "medium"],
        caption: "A platforming game with combat and a story. Made in GameMaker Studio 2.",
        description: "  Add later",
        githubURL: "https://github.com/nalav816/Choclateer-At-War"
    },

    {
        name: "Coco Clicker",
        icon: "imgs/cocoClickerIcon.png",
        completed: true,
        completionDate: "February 2023",
        tags: ["gml", "independent", "small"],
        caption: "An idle clicker game. Made in GameMake Studio 2.",
        description: "  Coco Clicker is an idle clicker game directly inspired by Cookie Clicker. In it, you gather chocolates, which you can then reinvest into minions which help you get more chocolates. Key systems include upgrades, powerups, and idle-worker handling.",
        githubURL: "https://github.com/nalav816/Coco-Clicker"
    },

    {
        name: "Space Invaders",
        icon: "imgs/spaceInvadersIcon.png",
        completed: false,
        completionDate: "January 2023",
        tags: ["java", "independent", "small"],
        caption: "A reimagination of the classic game Space Invaders. Developed in the Processing IDE.",
        description: "Add later",
        githubURL: "Add later"
    }
]

const projectTags = {
    java: { name: "Java", color: "red" },
    gml: { name: "GML", color: "lightestBlue" },
    independent: { name: "Independent", color: "blue" },
    medium: { name: "Medium", color: "yellow" },
    small: { name: "Small", color: "green" }
}

const PageMenu = ({ visible, pageVariables }) => {
    const onClick = (isLeft) => {
        pageVariables.setCurrentPageNum(pageVariables.currentPageNum + (isLeft ? -1 : 1))
    }

    return (
        <div className={"pageMenu transparent " + (visible && "fadeInFastest")}>
            <button className="smallIcon enlargeOnHover" style = {{visibility: pageVariables.prevPage ? "visible" : "hidden"}} onClick = {() => onClick(true)}>
                <img className="smallIcon" src="imgs/leftArrow.png" alt="left" />
                <div className="radialGlow lightestBlue" />
            </button>
            <div className="medium"> {pageVariables.currentPageNum} </div>
            <button className="smallIcon enlargeOnHover" style = {{visibility: pageVariables.nextPage ? "visible" : "hidden"}} onClick = {() => onClick(false)}>
                <img className="smallIcon rightArrow" src="imgs/leftArrow.png" alt="right" />
                <div className="radialGlow lightestBlue" />
            </button>
        </div>
    );
};

const ProjectCard = ({ visible, project, animationDelay = "0s" }) => {
    const [dropDownToggled, toggleDropdown] = useState(false);

    return (
        <AnimatedCard className="relPos" visible={visible} hasTitle={false} animationName="gridFadeIn" hasPadding={false} animationDelay={animationDelay}>
            <img className="projectImageIcon" src={project.icon} alt="project icon" />
            <div className="projectCardInfoContainer">
                <div className="medium"> {project.name} </div>
                <div className="small lightGrey"> {(project.completed ? "Completion Date: " : "Expected Date: ") + project.completionDate} </div>

                <div className="tagContainer">
                    {project.tags.map((tag, i) => (
                        <div className={"projectTag " + projectTags[tag].color} key={i}> {projectTags[tag].name} </div>
                    ))}
                </div>
                <div className="small lightGrey"> {project.caption} </div>
                <button onClick={() => toggleDropdown(true)} className="styledButton smallButton projectButton enlargeOnHover"> Learn More </button>
            </div>
            {dropDownToggled && (
                <div className="projectCardDropdown">
                    <div className="projectDescText" style={{ whiteSpace: "pre-wrap" }}> {project.description} </div>
                    <button onClick={() => toggleDropdown(false)} className="xButton medium enlargeOnHover"> X </button>
                    <a href={project.completed ? project.githubURL : undefined}
                        target="_blank" rel="noopener noreferrer"
                        className={(project.completed ? "styledButton darkBlue enlargeOnHover " : "disabledButton ") + "smallButton projectButton"}
                    ><div className="small white">{project.completed ? "Source" : "Coming Soon"}</div> </a>
                </div>
            )}
        </AnimatedCard>
    );
}

const Grid = ({ visible, page }) => (
    <div className="projectGrid gap">
        {page.map((project, i) => (
            <ProjectCard visible={visible} project={project} key={i} animationDelay={(i * .1) + "s"} />
        ))}
    </div>
);


const Projects = forwardRef(({ visible, scale }, ref) => {
    const itemsPerPage = scale === 1 ? 2 : 6;
    const [pageNum, setPageNum] = useState(1)

    //edge case where screen is resized and there are less pages
    if(pageNum > Math.ceil(projectList.length/itemsPerPage)){
        setPageNum(Math.ceil(projectList.length/itemsPerPage))
    }

    const projectsOnPage = projectList.slice((pageNum - 1) * itemsPerPage, ((pageNum - 1) * itemsPerPage) + itemsPerPage)
    //Gives pageMenu the packet of information it needs to function
    const pagePacket = {
        currentPageNum: pageNum,
        setCurrentPageNum: setPageNum,
        prevPage: pageNum != 1,
        nextPage: (pageNum) * itemsPerPage < projectList.length
    }

    return (
        <div ref={ref} className="section" id="Projects">
            {scale > 1 ? (
                <div className="flex col fullWidth fullHeight gap">
                    <div className={"projectsHeader textGlow transparent cardPdLeft cardPdRight " + (visible && "fadeInFastest")}>
                        <div className="title">Proj<span className="lightestBlue">ects</span></div>
                        {itemsPerPage <= projectList.length && <PageMenu pageVariables={pagePacket} visible={visible} />}
                    </div>
                    <Grid visible={visible} page={projectsOnPage} />
                </div>
            ) : (
                <div className="flex row fullWidth fullHeight">
                    <div className="mobileProjectTitle">
                        <div className={"homeTitle transparent textGlow " + (visible && "fadeInFastest")}> P </div>
                        <div style={{ animationDelay: ".05s" }} className={"homeTitle transparent textGlow " + (visible && "fadeInFastest")}> R </div>
                        <div style={{ animationDelay: ".1s" }} className={"homeTitle transparent textGlow " + (visible && "fadeInFastest")}> O </div>
                        <div style={{ animationDelay: ".15s" }} className={"homeTitle transparent textGlow " + (visible && "fadeInFastest")}> J </div>
                        <div style={{ animationDelay: ".2s" }} className={"homeTitle transparent textGlow lightestBlue " + (visible && "fadeInFastest")}> E </div>
                        <div style={{ animationDelay: ".25s" }} className={"homeTitle transparent textGlow lightestBlue " + (visible && "fadeInFastest")}> C </div>
                        <div style={{ animationDelay: ".3s" }} className={"homeTitle transparent textGlow lightestBlue " + (visible && "fadeInFastest")}> T </div>
                        <div style={{ animationDelay: ".35s" }} className={"homeTitle transparent textGlow lightestBlue " + (visible && "fadeInFastest")}> S </div>
                    </div>
                    <div className="flex col gap alignEnd">
                        {itemsPerPage <= projectList.length && <PageMenu pageVariables={pagePacket} visible={visible} />}
                        <Grid visible={visible} page= {projectsOnPage}/>
                    </div>
                </div>
            )}
        </div>
    )
})

export default Projects