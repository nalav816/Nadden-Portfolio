import "../App.css";

function AnimatedCard({visible, className = "", rightPadded = false, animationDelay = "0s", titleType = "title", title = "Title", children}) {
    const classes = [
        "card transparent cardPdTop cardPdLeft cardPdBottom",
        className,
        visible ? "fadeInFast" : "",
        rightPadded ? "cardPdRight" : ""
    ].join(" ")

    //Makes it so that first word is colored white and rest blue if the title type is "title" and not "subtitle"
    const titleWords = title.split(" ");
    const firstTitleWord = titleWords[0];
    const remaining = titleWords.slice(1).join(" ");

    return(
        <div className = {classes} style = {{animationDelay: animationDelay}}>
            {titleType === "title" ?
                (
                    <div className = "title textPdBottom"> {firstTitleWord} <span className = "lightestBlue"> {remaining} </span></div>
                ) : (
                    <div className = "subtitle lightestBlue textPdBottom"> {title} </div>
                )
            }
            {children}
        </div>
    )
}

export default AnimatedCard