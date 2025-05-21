import './App.css';
import MainPage from "./pages/MainPage.js"

import { useEffect, useState } from 'react';



function App() {
  //Tracks if mobile since certain things are disabled or changed on mobile
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState();
 
  useEffect(() => {
     //Dyanmically scales images by integer values within the entire App 
    function updateScale() {
      const style = getComputedStyle(document.documentElement)
      const baseWidth = parseFloat(style.getPropertyValue('--baseWidth'));
      //Multiplied by a factor of 1.5 so that the window makes sure there is enough space for sections larger than base height before
      //Scaling components up
      const baseHeight = Math.floor(parseFloat(style.getPropertyValue('--baseHeight')) * 1.3);
      const vertPadding = parseFloat(style.getPropertyValue('--sectionGap'));
      const screenWidth = window.innerWidth;

      //Represents the minimum amount of padding accepted
      const sidePadding = window.innerWidth * .03;
      let multiplier = Math.max(1, Math.floor((screenWidth - (sidePadding * 2))/baseWidth));
      
      //Makes sure elements fit vertically in view
      while(baseHeight * multiplier > window.innerHeight - vertPadding && multiplier > 1){
        multiplier -= 1;
      }
     
      document.documentElement.style.setProperty('--scale', multiplier);
      setScale(multiplier);
    }

    const handleResize = () => {
      updateScale();
      setIsMobile(window.innerWidth <= 1024);
    }
    
    handleResize();
    window.addEventListener("resize", handleResize)
    return () => {window.removeEventListener("resize", handleResize)}
  }, [])

  return (
    <MainPage isMobile = {isMobile} scale = {scale}/>
  );
}

export default App;
