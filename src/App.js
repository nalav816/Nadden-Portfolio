import './App.css';
import MainPage from "./pages/MainPage.js"

import { useEffect, useState } from 'react';



function App() {
  //Tracks if mobile since certain things are disabled or changed on mobile
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState();
 
  useEffect(() => {
    const handleResize = () => {
      const style = getComputedStyle(document.documentElement)
     
      setScale(parseInt(style.getPropertyValue('--scale')));
      setIsMobile(window.innerWidth <= 1024);
    }
    
    handleResize();
    window.addEventListener("resize", handleResize)
    return () => {window.removeEventListener("resize", handleResize)}
  }, [])

  console.log(scale)

  return (
    <MainPage isMobile = {isMobile} scale = {scale}/>
  );
}

export default App;
