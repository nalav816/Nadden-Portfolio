import Navbar from "../components/Navbar.js";
import Home from "../sections/Home.js"
import Contact from "../sections/Contact.js"

function MainPage() {
    return(
        <div className = "homePage">
            <Navbar/>
            <Home/>
            <Contact/>
        </div>
    )
}

export default MainPage