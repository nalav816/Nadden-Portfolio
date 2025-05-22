import "../App.css"


function LabeledIcon({color = "lightestBlue", textColor = "white", src = "imgs/phoneIcon.png", text = "Icon", description = "This is an icon", className = ""}) {
    return (
        <div className = {"iconWithText enlargeOnHover " + className}>
            <div className = {"icon " + color}>
                <img className = "iconImage" src = {src} alt = "Icon"/>
                <div className = "radialGlow"/>
            </div>

            <div className = "iconText">
                <div className = {"medium " + textColor}> {text} </div>
                <div className = "small grey"> {description} </div>
            </div>
        </div>
    );
}

export default LabeledIcon