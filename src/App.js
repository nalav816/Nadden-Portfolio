import './App.css';
import MainPage from "./pages/MainPage.js"

import { useEffect } from 'react';

function App() {
  //Dyanmically scales images by integer values within the entire App (done to preserve pixel-art fidelity)
  useEffect(() => {
    const updateScale = () => {
      const style = getComputedStyle(document.documentElement)
      const baseWidth = parseFloat(style.getPropertyValue('--baseWidth'));
      const baseHeight = parseFloat(style.getPropertyValue('--baseHeight'));
      const topPadding = parseFloat(style.getPropertyValue('--topPadding')), bottomPadding = parseFloat(style.getPropertyValue('--bottomPadding'));
      const screenWidth = window.innerWidth;
      
      //Represents the minimum amount of padding accepted
      const sidePadding = window.innerWidth * .03;
      let multiplier = Math.max(1, Math.floor((screenWidth - (sidePadding * 2))/baseWidth));

      //Makes sure elements fit vertically in view
      while(baseHeight * multiplier > window.innerHeight - topPadding - bottomPadding && multiplier > 1){
        multiplier -= 1;
      }

      document.documentElement.style.setProperty('--scale', multiplier);
    }
    
    updateScale();
    window.addEventListener("resize", updateScale)
    return () => {window.removeEventListener("resize", updateScale)}
  }, [])

  return (
    <MainPage />
  );
}

export default App;
