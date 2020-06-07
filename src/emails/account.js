const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
/* sgMail.send({
  to: "rtiryaki@hotmail.com",
  from: "rtiryaki@hotmail.com",
  subject: "Sending with Twilio SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
}); */

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "rtiryaki@hotmail.com",
    subject: "Thanks for joining in",
    text: `Welcome to the app ${name}.Let me know how you get along with app`,
  });
};

const seeYouAgainMail = (email, name) => {
  sgMail.send({
    to: email,
    from: "rtiryaki@hotmail.com",
    subject: "See you again soon",
    text: `We are very sorry to loose you ${name}.We hope to see you soon`,
  });
};

module.exports = { sendWelcomeEmail, seeYouAgainMail };
