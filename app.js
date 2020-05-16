const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const path=require("path");

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));
// app.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
//   });
const details={
  "email": "sharmanitin1492",
  "password": "14920914"
}

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'));

app.get("/", (req, res) => {
  res.send(
    "<h1 style='text-align: center'>Nodemailer server for sending mails</h1><br>"
  );
});

app.post("/sendmail", (req, res) => {
  console.log("request came");
  console.log(req.body);
  let user = req.body;

  sendMail(user, info => {
    console.log(`The mail has beed send 😃`);
    res.send(info);
  });
});

async function sendMail(user, callback) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    service: 'gmail',
    auth: {
      user: details.email,
      pass: details.password
    }
  });

  let mailOptions = {
    from: '"Nation Innovation User"<example.gimail.com>', // sender address
    to: 'sharmanitin1492@gmail.com', // list of receivers
    subject: "User Querry NationInnovation", // Subject line
    html: `<h4>Hi,</h4>
    <h4>${user.message}</h4>
    <h4>Thanks & Regards,</h4>
    <h4>${user.Name}</h4> 
    <h4>${user.Email}</h4> 
    <h4>Contact- ${user.contact}</h4>`
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}

// main().catch(console.error);
