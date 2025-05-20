import "../App.css"
import { forwardRef, useState } from "react"

const Projects = forwardRef(({visible}, ref) => {
    const [pageNum, setPageNum] = useState(1)

    return(
        <div ref = {ref} className = "section gap" id = "Projects">
            <div className = {"projectsHeader transparent cardPdLeft cardPdRight " + (visible && "fadeInFast")}>
                <div className = "title">Proj<span className = "lightestBlue">ects</span></div>
                <div className = "pageMenu">
                    <button className = "smallIcon"><img className = "smallIcon" src = "imgs/leftArrow.png" alt = "left"/></button>
                    <div className = "medium"> {pageNum} </div>
                    <button className = "smallIcon"><img className = "smallIcon rightArrow" src = "imgs/leftArrow.png" alt = "right"/></button>
                </div>
            </div>
        </div>
    )
})

export default Projects