const nodemailer = require('nodemailer');

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).send("This api only accepts post request")
    }

    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.SENDER_USER,
            pass: process.env.SENDER_PASS
        }
    })

    const mail = {
        from: `"NPortfolio" <${process.env.SENDER_USER}>`,
        to: process.env.MY_USER,
        subject: `Portfolio Message From ${name}`,
        text: message,
        replyTo: email
    }

    try {
        await transporter.sendMail(mail);
        res.status(200).send("Mail sent successfully!")
    } catch (error) {
        console.log("An error has been encountered: " + error)
        res.status(500).send("There was an error sending the mail")
    }
}
