const port = 5000
const cors = require("cors");
const dotenv = require("dotenv")
const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
const corsOptions = {
    origin: '*',
    methods: 'POST, GET',
    preflightContinue: false,
    optionsSuccessStatus: 204
};

dotenv.config()
app.use(express.json());
app.use(cors(corsOptions));

const myMail = "hernancs10@gmail.com";
const servPass = process.env.GMAIL_PASS_SMTP;

const contactEmail = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: myMail,
        pass: servPass,
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
        subject: "Contact Form Submission - Portfolio",
        html: `
          <html>
            <head>
              <style>
                body {
                  font-family: Georgia, serif;
                  background-color: #f2f2f2;
                  padding: 20px;
                }
                h1 {
                  color: #333;
                  font-weight: normal;
                }
                table {
                  margin-top: 20px;
                  width: 100%;
                  border-collapse: collapse;
                  border-spacing: 0;
                }
                td {
                  padding: 10px;
                  vertical-align: top;
                  border-bottom: 1px solid #ccc;
                }
                td.label {
                  font-weight: bold;
                  color: #666;
                  width: 20%;
                  text-align: right;
                  padding-right: 10px;
                }
                td.value {
                  width: 80%;
                }
              </style>
            </head>
            <body>
              <h1>Información de Contacto - Portfolio</h1>
              <table>
                <tr>
                  <td class="label">Name:</td>
                  <td class="value">${name}</td>
                </tr>
                <tr>
                  <td class="label">Email:</td>
                  <td class="value">${email}</td>
                </tr>
                <tr>
                  <td class="label">Phone:</td>
                  <td class="value">${phone}</td>
                </tr>
                <tr>
                  <td class="label">Message:</td>
                  <td class="value">${message}</td>
                </tr>
              </table>
            </body>
          </html>
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




