import "../App.css"
import { useState } from "react";
import { useScroll, useMotionValueEvent } from "motion/react"

function ParallaxLayer ({layer = 0, scale = 3, className, style, children}) {
    const { scrollYProgress } = useScroll();
    //How far the layer should be moved considering scrollProgress
    const [ parallaxDistance, setParallaxDistance ] = useState(0);

    const rootStyle = getComputedStyle(document.documentElement);
    const mainLayer = rootStyle.getPropertyValue('--mainLayer');
    const computedLayer = mainLayer - layer;
    //The total distance the parallax object would move if scrollProgress = 1
    //Negative parallax factor means this layer is faster than the main layer (and appears closer). Positive is opposite
    const parallaxFactor = ((scale * 250)+ (250 * Math.abs(computedLayer))) * Math.sign(computedLayer)

    useMotionValueEvent(scrollYProgress, "change", (newValue) => {
        const newDistance = parallaxFactor * newValue;
        setParallaxDistance(newDistance)
    });

    return (
        <div className = {className} style = {{...{zIndex: layer, position: "absolute", transform: "translateY(" + parallaxDistance + "px)"}, ...style}}>
            {children}
        </div>
    )
}

export default ParallaxLayer