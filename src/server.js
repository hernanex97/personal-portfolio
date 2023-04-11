const express = require("express");
// const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();
const port = 5000

const corsOptions = {
    origin: '*',
    methods: 'POST, GET',
    preflightContinue: false,
    optionsSuccessStatus: 204
};


app.use(cors(corsOptions));
app.use(express.json());
// app.use("/", router);

const myMail = "hernancs10@gmail.com";
const servPass = process.env.GMAIL_PASS_SMTP;
//const servPass = process.env.SMTP_PASS;

const contactEmail = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: myMail, // generated ethereal user
      pass: servPass, // generated ethereal password
    },
  });

contactEmail.verify((error) => {
    if(error){
        console.log(error);
    }else{
        console.log("Ready to Send..")
    }
})



app.get('/status', (req, res) => {
    res.send('Status OK!')
})


app.post("/contact", (req, res) => {
    const name = req.body.firstName + " " + req.body.lastName
    const email = req.body.email
    const phone = req.body.phone
    const message = req.body.message
    const mail = {
        from: name,
        to: myMail,
        subject: "Contact From Submission - Portfolio",
        html: `<p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Phone: ${phone}</p>
               <p>Message: ${message}</p>
            `,
    };
    contactEmail.sendMail(mail, (error) => {
        if(error){
            res.json(error);
            console.log(error);
        }else{
            res.json({code: 200, status: "Message Sent Ok"});
            console.log(res.json({code: 200, status: "Message Sent Ok"}));
        }
    });
});


app.listen(port, () => console.log("Server Running on port: " + port));
// console.log(process.env.EMAIL_USER)
// console.log(process.env.EMAIL_PASS)




