import "../App.css";

function AnimatedCard({ visible, className = "", hasPadding = true, rightPadded = false, animationName = "fadeInFast", animationDelay = "0s",
    titleType = "title", title = "Title", hasTitle = true, style = {}, children }) {
    const classes = [
        "card transparent",
        hasPadding ? "cardPdTop cardPdLeft cardPdBottom" : "",
        className,
        visible ? animationName : "",
        rightPadded ? "cardPdRight" : ""
    ].join(" ")

    //Makes it so that first word is colored white and rest blue if the title type is "title" and not "subtitle"
    const titleWords = title.split(" ");
    const firstTitleWord = titleWords[0];
    const remaining = titleWords.slice(1).join(" ");

    return (
        <div className={classes} style={{ ...{ animationDelay: animationDelay }, ...style }}>
            {hasTitle && (titleType === "title" ?
                (
                    <div className="title textGlow textPdBottom"> {firstTitleWord} <span className="lightestBlue"> {remaining} </span></div>
                ) : (
                    <div className="subtitle lightestBlue textPdBottom"> {title} </div>
                )
            )}
            {children}
        </div>
    )
}

export default AnimatedCard