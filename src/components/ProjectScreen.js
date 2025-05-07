import "../App.css";
import projects from "../data/projects.json";
import { useState, useRef, useEffect } from "react";

function ProjectScreen() {
    const grid = useRef();
    const [page, setPage] = useState(1);
    const [elemCount, setElemCount] = useState(0);
    const start = (page - 1) * elemCount;
    const end = start + elemCount;
    const lastPage = Math.ceil(projects.length / elemCount);

    if (page > lastPage) {
        setPage(lastPage);
    }

    const rowCount = 2;

    const computeElementCount = () => {
        const gridElement = grid.current;
        const styles = window.getComputedStyle(gridElement);
        const cardWidth = 300;
        const gap = parseFloat(styles.gap);
        const usableWidth =
            gridElement.getBoundingClientRect().width -
            parseFloat(styles.paddingLeft) -
            parseFloat(styles.paddingRight);
        const perRow =
            Math.floor((usableWidth - cardWidth) / (cardWidth + gap)) + 1;
        const count = perRow * rowCount;
        if (elemCount != count) {
            setElemCount(count);
        }
        console.log(count);
    };

    useEffect(() => {
        computeElementCount();
        window.addEventListener("resize", computeElementCount);
        return () => {
            window.removeEventListener("resize", computeElementCount);
        };
    }, []);

    const displayedProjects = projects.slice(start, end);

    return (
        <div className="ProjectScreen-Container" id="Project">
            <h1 className="Header">Projects</h1>
            <div className="HeaderSubtitle">
                Here you can find all of my past projects as well as those that I am currently working on
            </div>
            <div ref={grid} className="ProjectScreen-ProjectContainer">
                {displayedProjects.map((project, index) => (
                    <div className="ProjectScreen-Card" key={index}>
                        <img
                            src={project.icon}
                            alt="icon"
                            className="ProjectScreen-CardImg"
                        />
                        <div className="ProjectScreen-CardTitle">{project.name}</div>
                        <div className="ProjectScreen-CardSubTitle">
                            {(project.released ? "Released Date: " : "Expected Date: ") +
                                project.date}
                        </div>
                        <div className="ProjectScreen-CardTagContainer">
                            {project.tags.map((tag, index) => (
                                <div
                                    className={
                                        "ProjectScreen-CardTag ProjectScreen-" +
                                        tag.replaceAll(" ", "") +
                                        "CardTag"
                                    }
                                    key={index}
                                >
                                    {tag}
                                </div>
                            ))}
                        </div>
                        <div className="ProjectScreen-CardDescription">
                            {project.description}
                        </div>
                        <button
                            className="ProjectScreen-CardButton"
                            disabled={!project.released}
                        >
                            {project.released ? "Learn More" : "Coming Soon"}
                        </button>
                    </div>
                ))}
            </div>
            <div className="ProjectScreen-PageMenu">
                <button
                    className="ProjectScreen-PageToggleButton"
                    onClick={() => setPage(page - 1)}
                    disabled={page == 1}
                >
                    <img
                        className="ProjectScreen-PageToggle"
                        src="imgs/PageToggleIcon.png"
                        alt="Left Arrow"
                    />
                </button>

                <div>{page}</div>

                <button
                    className="ProjectScreen-PageToggleButton"
                    onClick={() => setPage(page + 1)}
                    disabled={page == lastPage}
                >
                    <img
                        className="ProjectScreen-PageToggle ProjectScreen-PageToggleRight"
                        src="imgs/PageToggleIcon.png"
                        alt="Right Arrow"
                    />
                </button>
            </div>
        </div>
    );
}

export default ProjectScreen;
