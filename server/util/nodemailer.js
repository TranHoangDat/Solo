const nodemailer = require("nodemailer");
const config = require("../config/config");

const {user, password} = config.gmail;
const apiUrl = 'http://localhost:5000/api/auth'
const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: user,
    pass: password,
  },
});

module.exports.sendConfirmationEmail = (name, email, confirmationCode) => {
    console.log("Check");
    transport.sendMail({
      from: user,
      to: email,
      subject: "Please confirm your account",
      html: `<h1>Email Confirmation</h1>
          <h2>Hello ${name}</h2>
          <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
          <a href=${apiUrl}/confirm/${confirmationCode}> Click here</a>
          </div>`,
    }).catch(err => console.log(err));
  };