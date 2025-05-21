import "../App.css";
import { forwardRef} from "react"

const Contact = forwardRef(({visible}, ref) => {
    return (
        <div ref = {ref} className="section gap" id="Contact">
            <div className="contactInfo gap">
                <div className={"title transparent textGlow cardPdLeft" + (visible && " fadeInFastest")}> Contact <span className="lightestBlue"> Me </span></div>
                <div className= {"card transparent contactCard cardPdBottom cardPdTop cardPdLeft" + (visible && " fadeInFast")}>
                    <div className="subtitle lightestBlue textPdLeft textPdTop textPdBottom"> Socials </div>

                    <a href="https://www.linkedin.com/in/nadden-auguste-laventure-0662a6314/" target="_blank" rel="noopener noreferrer">
                        <div className="textPdLeft textPdBottom iconWithText enlargeOnHover">
                            <div className = "lightestBlue icon">
                                <img className = "iconImage" src="imgs/linkedinIcon.png" alt="LinkedIn" />
                                <div className = "radialGlow"/>
                            </div>
                
                            <div className="iconText">
                                <div className="medium">LinkedIn</div>
                                <div className="small lightGrey">Nadden Auguste-Laventure</div>
                            </div>
                        </div>
                    </a>

                    <a href="https://github.com/nalav816" target="_blank" rel="noopener noreferrer">
                        <div className="textPdLeft iconWithText enlargeOnHover">
                            <div className = "black icon">
                                <img className="iconImage" src="imgs/githubIcon.png" alt="Github" />
                                <div className = "radialGlow"/>
                            </div>
                            
                            <div className="iconText">
                                <div className="medium">Github</div>
                                <div className="small lightGrey">@nalav816</div>
                            </div>
                        </div>
                    </a>
                </div>

                <div className={"card transparent contactCard cardPdBottom cardPdTop cardPdLeft" + (visible && " fadeInFast")} style = {{animationDelay: ".1s"}}>
                    <div className="subtitle lightestBlue textPdLeft textPdTop textPdBottom"> Contact Info </div>
                    <div className="textPdLeft textPdBottom iconWithText enlargeOnHover">
                        <div className = "lightestBlue icon">
                            <img className="iconImage" src="imgs/phoneIcon.png" alt="Phone" />
                            <div className = "radialGlow"/>
                        </div>
                        
                        <div className="iconText">
                            <div className="medium">Phone</div>
                            <div className="small lightGrey">929-424-9627</div>
                        </div>
                    </div>

                    <div className="textPdLeft textPdBottom iconWithText enlargeOnHover">
                        <div className = "lightestBlue icon">
                            <img className="iconImage" src="imgs/emailIcon.png" alt="Email" />
                            <div className = "radialGlow"/>
                        </div>

                        <div className="iconText">
                            <div className="medium">Email</div>
                            <div className="small lightGrey">nalaventure123@gmail.com</div>
                        </div>
                    </div>

                    <div className="textPdLeft iconWithText enlargeOnHover">
                         <div className = "lightestBlue icon">
                            <img className="iconImage" src="imgs/locationIcon.png" alt="Location" />
                            <div className = "radialGlow"/>
                        </div>

                        <div className="iconText">
                            <div className="medium">Location</div>
                            <div className="small lightGrey">Brooklyn, NY, USA</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"card transparent contactCard cardFillHeight messageCard cardPdTop cardPdLeft cardPdBottom cardPdRight" + (visible && " fadeInFast")} style = {{animationDelay: ".2s"}}>
                <div className="subtitle lightestBlue textPdBottom"> Direct Message </div>
                <form>
                    <div>
                        <label htmlFor = "name" className = "medium"> Name </label>
                        <input className = "small" type = "text" placeholder = "Type your name here..." id = "name" required/>
                    </div>
                    <div>
                        <label htmlFor = "email" className = "medium"> Email </label>
                        <input className = "small" type = "text" placeholder = "Type your email here..." id = "email" inputMode="email" required/> 
                    </div>
                    <div>
                        <label htmlFor = "message" className = "medium"> Message </label>
                        <textarea className = "small" placeholder = "Type your message here..." id = "message" required/> 
                    </div>
                    
                    <button className = "styledButton bigButton enlargeOnHover" type = "submit"> Send </button>
                </form>
            </div>
        </div>
    )
})

export default Contact