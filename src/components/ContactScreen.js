import "../App.css"
import emailjs from "@emailjs/browser"
import { useRef } from 'react'


function ContactScreen(){
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            "service_7a2dbtg", //Service ID
            "template_q7fa2bi", //Template ID
            form.current, //Form
            "upjj8GU1w7As6WR33", //API Public Key
        ).then(
            () => {
                form.current.reset()
                alert("Message sent!");
            },
            (error) => {
                console.log(error.text)
                alert("An error occured.");
            }
        )
    };

    return (
        <div className = "ContactScreen-Container" id = "Contact">
            <div className = "Header"> Contact Me </div>
                <div className = "HeaderSubtitle"> You can find me at the socials linked below or you can email me directly using the form</div>
                <div className = "SubHeader"> My Socials </div>
                <div className = "ContactScreen-Icons">
                    <a href = "https://github.com/nalav816" target="_blank" rel="noopener noreferrer">
                        <img src = "imgs/Github.png" alt = "Github" className = "ContactScreen-Icon"/>
                    </a>
                    <a href = "https://www.linkedin.com/in/nadden-auguste-laventure-0662a6314" target="_blank" rel="noopener noreferrer">
                        <img src = "imgs/Linkedin.png" alt = "Linkedin" className = "ContactScreen-Icon"/>
                    </a>
                </div>
                <div className = "SubHeader"> Send A Direct Message </div>
                <form ref = {form} className = "ContactScreen-ContactForm" onSubmit= {sendEmail}>
                    <label htmlFor = "NameInput" className = "ContactScreen-InputLabel">Name</label>
                    <input type="text" id = "NameInput" placeholder="Type your name here..." className = "ContactScreen-InputBox ContactScreen-InputBoxSmall" name = "name" required/>
                    <label htmlFor = "EmailInput" className = "ContactScreen-InputLabel">Email</label>
                    <input type="email" id = "EmailInput" placeholder="Type your email here..." className = "ContactScreen-InputBox ContactScreen-InputBoxSmall" name = "email" required/>
                    <label htmlFor = "MessageInput" className = "ContactScreen-InputLabel">Message</label>
                    <textarea id = "MessageInput" placeholder="Type your message here..." className = "ContactScreen-InputBox ContactScreen-InputBoxLarge" name = "message" required/>
                    <button className = "ContactScreen-SendButton" type = "submit"> Send </button>
                </form>

          
        </div>
    );
}

export default ContactScreen