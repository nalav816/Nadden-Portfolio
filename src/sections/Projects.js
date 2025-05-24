import "../App.css";
import AnimatedCard from "../components/AnimatedCard";
import { forwardRef, useState } from "react";

const projectList = [
    {
        name: "Probable Suspect (WIP)",
        icon: "imgs/probableSuspectIcon.png",
        completed: false,
        completionDate: "June 2025",
        tags: ["java", "independent", "medium"],
        caption: "A murder mystery game built on Java and the Swing framework. Made in VSCode. Currently a work in progress.",
        description: "  In Probable Suspect, following a murder, the player attains randomized clues through interrogating procedurally generated witnesses. Given these clues, the player is then tasked with choosing the correct suspect. \n    Though the lack of a game engine wasn’t ideal for the game’s scope, it has provided the opportunity to engage with and understand technologies often taken for granted, such as collision detection. In addition to those mentioned earlier, this game uses a variety of systems, including but not limited to branching character dialogue, event-driven gameplay, multithreading, and UI interpolation.",
        githubURL: "https://github.com/nalav816/Probable-Suspect"
    },

    {
        name: "Planet Sim",
        icon: "imgs/planetSimIcon.png",
        completed: true,
        completionDate: "December 2023",
        tags: ["java", "independent", "small"],
        caption: "A program which simulates planetary gravitational motion. Made in the Processing IDE.",
        description: " Write later",
        githubURL: " "
    },

    {
        name: "Space Invaders",
        icon: "imgs/spaceInvadersIcon.png",
        completed: true,
        completionDate: "January 2023",
        tags: ["java", "independent", "small"],
        caption: "A reimagination of the classic game Space Invaders. Developed in the Processing IDE.",
        description: "This project is a competitive reimagination of the classic arcade game Space Invaders. The gameplay consists of two players attempting to shoot each other down, but there are alien ships in the way that must be overcome first. However, these enemy ships aren’t just obstacles. Destroying them strengthens the player’s ship, adding a strategic element to the gameplay. \n    On the technical side, this project features modular object-oriented classes, sound integration using the Processing sound library, real-time input handling, and state management.",
        githubURL: "https://github.com/nalav816/Space-Invaders"
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
        (pageVariables.isPrevPage || pageVariables.isNextPage) && (
            <div className={"pageMenu transparent " + (visible && "fadeInFastest")}>
                <button className="smallIcon enlargeOnHover" style={{ visibility: pageVariables.isPrevPage ? "visible" : "hidden" }} onClick={() => onClick(true)}>
                    <img className="smallIcon" src="imgs/leftArrow.png" alt="left" />
                    <div className="radialGlow lightestBlue" />
                </button>
                <div className="medium"> {pageVariables.currentPageNum} </div>
                <button className="smallIcon enlargeOnHover" style={{ visibility: pageVariables.isNextPage ? "visible" : "hidden" }} onClick={() => onClick(false)}>
                    <img className="smallIcon rightArrow" src="imgs/leftArrow.png" alt="right" />
                    <div className="radialGlow lightestBlue" />
                </button>
            </div>)
    );
};

const ProjectCard = ({ visible, project, animationDelay = "0s" }) => {
    const [dropDownToggled, toggleDropdown] = useState(false);

    return (
        <AnimatedCard className="relPos" visible={visible} hasTitle={false} animationName="gridFadeIn" hasPadding={false} animationDelay={animationDelay}>
            <img className="projectImageIcon" src={project.icon} alt="project icon" />
            <div className="projectCardInfoContainer">
                <div className="medium"> {project.name} </div>
                <div className="small grey"> {(project.completed ? "Completion Date: " : "Expected Date: ") + project.completionDate} </div>

                <div className="tagContainer">
                    {project.tags.map((tag, i) => (
                        <div className={"projectTag " + projectTags[tag].color} key={i}> {projectTags[tag].name} </div>
                    ))}
                </div>
                <div className="small grey"> {project.caption} </div>
                <button onClick={() => toggleDropdown(true)} className="styledButton smallButton projectButton enlargeOnHover"> Learn More </button>
            </div>
            {dropDownToggled && (
                <div className="projectCardDropdown">
                    <div className="projectDescText" style={{ whiteSpace: "pre-wrap" }}> {project.description} </div>
                    <button onClick={() => toggleDropdown(false)} className="xButton medium enlargeOnHover"> X </button>
                    <a href={project.githubURL !== " " ? project.githubURL : undefined}
                        target="_blank" rel="noopener noreferrer"
                        className={(project.githubURL !== " " ? "styledButton blue enlargeOnHover " : "disabledButton ") + "smallButton projectButton"}
                    ><div className={"small" + (project.githubURL !== " " ? " white" : " grey")}>{project.githubURL !== " "  ? "Source" : "Coming Soon"}</div> </a>
                </div>
            )}
        </AnimatedCard>
    );
}

const Grid = ({ visible, page, pageNum }) => {
    return (
        <div className="projectGrid gap">
            {page.map((project, i) => (
                <ProjectCard key={`${pageNum} ${i}`} visible={visible} project={project} animationDelay={(i * .1) + "s"} />
            ))}
        </div>
    )
};


const Projects = forwardRef(({ visible, scale }, ref) => {
    const itemsPerPage = scale === 1 ? 2 : 6;
    const [pageNum, setPageNum] = useState(1)

    //edge case where screen is resized and there are less pages
    if (pageNum > Math.ceil(projectList.length / itemsPerPage)) {
        setPageNum(Math.ceil(projectList.length / itemsPerPage))
    }

    const projectsOnPage = projectList.slice((pageNum - 1) * itemsPerPage, ((pageNum - 1) * itemsPerPage) + itemsPerPage)
    //Gives pageMenu the packet of information it needs to function
    const pagePacket = {
        currentPageNum: pageNum,
        setCurrentPageNum: setPageNum,
        isPrevPage: pageNum !== 1,
        isNextPage: (pageNum) * itemsPerPage < projectList.length
    }

    return (
        <div ref={ref} className="section" id="Projects">
            {scale > 1 ? (
                <div className="flex col fullWidth fullHeight gap">
                    <div className={"projectsHeader textGlow transparent cardPdLeft cardPdRight " + (visible && "fadeInFastest")}>
                        <div className="title">Proj<span className="lightestBlue">ects</span></div>
                        <PageMenu pageVariables={pagePacket} visible={visible} />
                    </div>
                    <Grid visible={visible} page={projectsOnPage} pageNum={pageNum} />
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
                        <PageMenu pageVariables={pagePacket} visible={visible} />
                        <Grid visible={visible} page={projectsOnPage} pageNum={pageNum} />
                    </div>
                </div>
            )}
        </div>
    )
})

export default Projects