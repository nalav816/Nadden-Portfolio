import "../App.css"

const positionRange = [2, 98];
const pulseSpeedRange = [1, 6];
//brightness means a larger glow radius
const brightnessRange = [1, 2];
//Solid color in first index, glow color in second index
const starColors = [["#5f7799", "rgba(95, 119, 153, .4)"], 
                    ["#76b4cc", "rgba(118, 180, 204, .4)"]
                   ];

function Star() {
    const rollProperty = (property) => {
        return property[Math.floor(Math.random() * property.length)]
    }

    const rollRange = (range) => {
        const start = range[0];
        const end = range[1];
        return start + Math.floor(Math.random() * (end - start));
    }

    const x = rollRange(positionRange), y = rollRange(positionRange);
    const pulseSpeed = rollRange(pulseSpeedRange);
    const brightness = rollRange(brightnessRange);
    const color = rollProperty(starColors);
    const pulses = Math.floor(Math.random() * 8) != 0;

    return(
        <div className = "star" style = {
            {
                left: x + "%",
                top: y + "%",
                backgroundColor: color[0],
                "--brightness": brightness + "px",
                "--glowColor": color[1],
            }
        }/>
    );
}

export default Star