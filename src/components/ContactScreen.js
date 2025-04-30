import "../App.css"


function ContactScreen(){
    return (
        <div className = "ContactScreen-Container">
            <div className = "ProjectScreen-Header"> Contact Me </div>
        
                <form className = "ContactScreen-ContactForm">
                    <label htmlFor = "NameInput">Name</label>
                    <input type="text" id = "NameInput" placeholder="Type name here..."/>
                    <label htmlFor = "EmailInput">Email</label>
                    <input type="email" id = "EmailInput" placeholder="Type email here..."/>
                    <label htmlFor = "MessageInput">Message</label>
                    <input type="text" id = "MessageInput" placeholder="Type message here..."/>
                    <button> Send </button>
                </form>

          
        </div>
    );
}

export default ContactScreen