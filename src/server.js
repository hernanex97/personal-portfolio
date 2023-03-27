const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();

const corsOptions = {
    origin: '*',
    methods: 'POST, GET',
    preflightContinue: false,
    optionsSuccessStatus: 204
};


app.use(cors(corsOptions));
app.use(express.json());
app.use("/", router);

const servMail = "hernancs10@gmail.com";
const servPass = "anihrjqorcusossm"

const contactEmail = nodemailer.createTransport({
    service: 'smtp.gmail.com',
    auth: {
        user: servMail,
        pass: servPass
    },
});

contactEmail.verify((error) => {
    if(error){
        console.log(error);
    }else{
        console.log("Ready to Send..")
    }
})

router.post("/contact", (req, res) => {
    const name = req.body.firstName + req.body.lastName
    const email = req.body.email
    const phone = req.body.phone
    const message = req.body.message
    const mail = {
        from: name,
        to: servMail,
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
        }else{
            res.json({code: 200, status: "Message Sent Ok"});
        }
    });
});

app.listen(5000, () => console.log("Server Running"));
