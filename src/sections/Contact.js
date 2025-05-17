import "../App.css"

function Contact() {
    return (
        <div className="section gap" id="Contact">

            <div className="contactInfo gap">
                <div className="title textPdLeft textPdTop"> Contact <span className="lightestBlue"> Me </span></div>
                <div className="card contactCard cardPdBottom">
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

                <div className="card contactCard cardPdBottom">
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

            <div className="card contactCard cardFillHeight messageCard">
                <div className="subtitle textPdLeft textPdTop lightestBlue textPdBottom"> Direct Message </div>
            </div>
        </div>
    )
}

export default Contact