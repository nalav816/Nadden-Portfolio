import './App.css';
import HomeScreen from './components/HomeScreen.js';
import AboutScreen from './components/AboutScreen.js'
import ProjectScreen from './components/ProjectScreen.js'
import NavBar from './components/NavBar.js';
import ContactScreen from './components/ContactScreen.js';

function App() {
  return (
    <div>
      <NavBar />
      <HomeScreen />
      <AboutScreen />
      <ProjectScreen />
      <ContactScreen />
      
    </div>
    
  );
}

export default App;
