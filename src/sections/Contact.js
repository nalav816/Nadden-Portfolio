import "../App.css";
import AnimatedCard from "../components/AnimatedCard";
import LabeledIcon from "../components/LabeledIcon"
import { forwardRef, useRef } from "react"

const Contact = forwardRef(({ visible }, ref) => {
    const form = useRef()

    const submit = async (e) => {
        e.preventDefault();
        const curr = form.current;
        const submittedData = {
            name: curr.name.value,
            email: curr.email.value,
            message: curr.message.value
        }

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(submittedData)
            })

            if (res.ok) {
                curr.reset()
            } else {
                console.log("There's been an error");
            }
        } catch (err) {
            console.log("POST failed: ", err)
        }
    }

    return (
        <div ref={ref} className="section gap" id="Contact">
            <div className="contactInfo gap">
                <div className={"title transparent textGlow cardPdLeft" + (visible && " fadeInFastest")}> Contact <span className="lightestBlue"> Me </span></div>
                <AnimatedCard className = "contactCard" visible={visible} titleType="subtitle" title="Socials">
                    <a href="https://www.linkedin.com/in/nadden-auguste-laventure-0662a6314/" target="_blank" rel="noopener noreferrer">
                        <LabeledIcon className="textPdBottom" src="imgs/linkedinIcon.png" text="Linkedin" description="Nadden Auguste-Laventure" />
                    </a>

                    <a href="https://github.com/nalav816" target="_blank" rel="noopener noreferrer">
                        <LabeledIcon color="black" src="imgs/githubIcon.png" text="Github" description="@nalav816" />
                    </a>
                </AnimatedCard>

                <AnimatedCard className = "contactCard" visible={visible} titleType="subtitle" title="Contact Info" animationDelay=".1s">
                    <LabeledIcon className="textPdBottom" src="imgs/phoneIcon.png" text="Phone" description="929-424-9627" />
                    <LabeledIcon className="textPdBottom" src="imgs/emailIcon.png" text="Email" description="nalaventure123@gmail.com" />
                    <LabeledIcon src="imgs/locationIcon.png" text="Location" description="Brooklyn, NY, USA" />
                </AnimatedCard>
            </div>
            <AnimatedCard className = "contactCard cardFillHeight messageCard" visible={visible} titleType="subtitle" title="Direct Message" animationDelay=".2s" rightPadded = {true}>
                <form ref={ref} onSubmit={submit}>
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
                    <button className="styledButton bigButton enlargeOnHover" type="submit" style = {{marginTop: "auto"}}> Send </button>
                </form>
            </AnimatedCard>

        </div>
    )
})

export default Contact