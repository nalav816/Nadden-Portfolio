import "../App.css"


function ContactScreen(){
    return (
        <div className = "ContactScreen-Container">
            <div className = "Header"> Contact Me </div>
                <div className = "SubHeader"> My Socials </div>
                <div className = "SubHeader"> Send A Direct Message </div>
                <form className = "ContactScreen-ContactForm">
                    <label htmlFor = "NameInput" className = "ContactScreen-InputLabel">Name</label>
                    <input type="text" id = "NameInput" placeholder="Type your name here..." className = "ContactScreen-InputBox ContactScreen-InputBoxSmall"/>
                    <label htmlFor = "EmailInput" className = "ContactScreen-InputLabel">Email</label>
                    <input type="email" id = "EmailInput" placeholder="Type your email here..." className = "ContactScreen-InputBox ContactScreen-InputBoxSmall"/>
                    <label htmlFor = "MessageInput" className = "ContactScreen-InputLabel">Message</label>
                    <textarea id = "MessageInput" placeholder="Type your message here..." className = "ContactScreen-InputBox ContactScreen-InputBoxLarge"/>
                    <button className = "ContactScreen-SendButton"> Send </button>
                </form>

          
        </div>
    );
}

export default ContactScreen