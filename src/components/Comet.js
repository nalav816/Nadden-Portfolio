
import "../App.css"
import { useEffect, useRef } from "react";

function Comet() {
    const comet = useRef();

    useEffect(() => {
        const el = comet.current
        if(!el) return;
        const rollXPosition = () => {
            const baseWidth = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--baseWidth'));
            const appScale = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--scale'));
            const actualWidth = baseWidth * appScale;
            const leftX = actualWidth * .3, rightX = actualWidth * .9;
            const choosenX = (rightX - leftX) * Math.random() + leftX;
            return choosenX;
        }

        const updateAnim = () => {
            el.style.animation = "none";
            void el.offsetWidth; // hacky method to prevent the browser batching these two anims
            el.style.animation = "comet " + (Math.random() * 2.5 + 3) + "s ease forwards";
            el.style.left = rollXPosition() + "px";
        }

        updateAnim();
        el.addEventListener("animationend", updateAnim);
        return () => el.removeEventListener("animationend", updateAnim);
    }, [])

    return(
        <img ref = {comet} className = "comet" src = "imgs/comet.png" alt = "comet"/>
    )
}

export default Comet;