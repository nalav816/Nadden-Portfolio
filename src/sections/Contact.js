import "../App.css";
import AnimatedCard from "../components/AnimatedCard";
import LabeledIcon from "../components/LabeledIcon"
import { forwardRef, useRef, useCallback, useState, useEffect } from "react"

const SubmissionPopup = ({ success, deactivatePopup }) => {
    return (
        (success ? (
            <div className="popup" onAnimationEnd={deactivatePopup}>
                <div className="small"> Message <span className="lightestBlue"> Sucessfully Sent </span></div>
            </div>
        ) : (
            <div className="popup" onAnimationEnd={deactivatePopup}>
                <div className="small"> An <span className="lightRed"> Error Occured </span></div>
            </div>
        ))
    )
}

const Contact = forwardRef(({ visible }, ref) => {
    const form = useRef();
    const timer = useRef();
    //To prevent submission spam. Number in parenthesis is seconds.
    const formSubmissionCooldown = (15) * 1000;
    const [isPopupActive, setPopupActive] = useState(false);
    const [sucessStatus, setSuccessStatus] = useState();
    const [isButtonActive, setIsButtonActive] = useState(true);
    const [buttonText, setButtonText] = useState("Send");

    const submit = async (e) => {
        e.preventDefault();
        const curr = form.current;
        const submittedData = {
            name: curr.name.value,
            email: curr.email.value,
            message: curr.message.value
        }

        try {
            setButtonText("Sending...");
            setIsButtonActive(false);
            const res = await fetch("/api/contactManager", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(submittedData)
            })

            if (res.ok) {
                curr.reset();
                setSuccessStatus(true);
                startButtonCooldown();
            } else {
                setSuccessStatus(false);
                setButtonText("Send");
                setIsButtonActive("True");
                console.log("There's been an error");
            }
        } catch (err) {
            setSuccessStatus(false);
            setButtonText("Send");
            setIsButtonActive("True");
            console.log("POST failed: ", err)
        }
        setPopupActive(true);
    }

    const startButtonCooldown = useCallback((expirDate = null) => {
        const handle = () => {
            const timeLeft = expirDate - Date.now();
            if (timeLeft <= 0) {
                //time is up
                clearInterval(timer.current);
                localStorage.removeItem("expirDate");
                setButtonText("Send");
                setIsButtonActive(true);
            } else {
                //time is not up
                setButtonText(`Wait ${Math.ceil(timeLeft / 1000)}s`);
                setIsButtonActive(false);
            }
        }

        if (expirDate === null) {
            expirDate = Date.now() + formSubmissionCooldown;
            localStorage.setItem("expirDate", expirDate);
        }

        handle();
        timer.current = setInterval(handle, 1000);
    }, [formSubmissionCooldown]);

    useEffect(() => {
        const cooldownExpiration = localStorage.getItem("expirDate");
        if (cooldownExpiration !== null) {
            startButtonCooldown(cooldownExpiration)
        }
        return () => clearInterval(timer.current)
    }, [startButtonCooldown])

    return (
        <div ref={ref} className="section gap" id="Contact">
            <div className="contactInfo gap">
                <div className={"title transparent textGlow cardPdLeft" + (visible && " fadeInFastest")}> Contact <span className="lightestBlue"> Me </span></div>
                <AnimatedCard className="contactCard" visible={visible} titleType="subtitle" title="Socials">
                    <a href="https://www.linkedin.com/in/nadden-auguste-laventure-0662a6314/" target="_blank" rel="noopener noreferrer">
                        <LabeledIcon className="textPdBottom" src="imgs/linkedinIcon.png" text="Linkedin" description="Nadden Auguste-Laventure" />
                    </a>

                    <a href="https://github.com/nalav816" target="_blank" rel="noopener noreferrer">
                        <LabeledIcon color="black" src="imgs/githubIcon.png" text="Github" description="@nalav816" />
                    </a>
                </AnimatedCard>

                <AnimatedCard className="contactCard" visible={visible} titleType="subtitle" title="Contact Info" animationDelay=".1s">
                    <LabeledIcon className="textPdBottom" src="imgs/phoneIcon.png" text="Phone" description="929-424-9627" />
                    <LabeledIcon className="textPdBottom" src="imgs/emailIcon.png" text="Email" description="nalaventure123@gmail.com" />
                    <LabeledIcon src="imgs/locationIcon.png" text="Location" description="Brooklyn, NY, USA" />
                </AnimatedCard>
            </div>
            <AnimatedCard className="contactCard cardFillHeight messageCard" visible={visible} titleType="subtitle" title="Direct Message" animationDelay=".2s" rightPadded={true}>
                <form ref={form} onSubmit={submit}>
                    <div>
                        <label htmlFor="name" className="medium"> Name </label>
                        <input className="small" type="text" placeholder="Type your name here..." id="name" name="name" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="medium"> Email </label>
                        <input className="small" type="text" placeholder="Type your email here..." id="email" name="email" inputMode="email" required />
                    </div>
                    <div>
                        <label htmlFor="message" className="medium"> Message </label>
                        <textarea className="small" placeholder="Type your message here..." id="message" name="message" required />
                    </div>
                    <button className={"bigButton " + (isButtonActive ? "styledButton enlargeOnHover" : "disabledButton")}
                        type="submit" style={{ marginTop: "auto" }}
                        disabled={!isButtonActive}>
                        {buttonText}
                    </button>
                </form>
            </AnimatedCard>
            {isPopupActive && (<SubmissionPopup success={sucessStatus} deactivatePopup={() => setPopupActive(false)} />)}
            {/*footer */}
            <a className="small darkBlue footer" href="https://github.com/nalav816/nadden-portfolio" target="_blank" rel="noopener noreferrer">
                This website was made using ReactJS. Interested in how? You can click here to view the source code.
            </a>
        </div>
    )
})

export default Contact