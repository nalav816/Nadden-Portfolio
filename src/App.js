import './App.css';
import HomeScreen from './components/HomeScreen.js';
import AboutScreen from './components/AboutScreen.js'
import ProjectScreen from './components/ProjectScreen.js'
import NavBar from './components/NavBar.js';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <HomeScreen />
      <AboutScreen />
      <ProjectScreen />
      
    </div>
    
  );
}

export default App;
