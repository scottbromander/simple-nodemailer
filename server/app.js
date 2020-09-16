require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

app.set('port', process.env.PORT || 5000);

app.use(express.static('server/public/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NODEMAILER_USERNAME, //YOUR GMAIL USER HERE -> EXAMPLE@gmail.com
    pass: process.env.NODEMAILER_PASSWORD, //YOUR GMAIL PASSWORD, DO NOT HOST THIS INFO ON GITHUB!
  },
});

app.post('/mail', async (req, res) => {
  const mailer = req.body;

  const mailOptions = {
    //example: from: '"Scott" scott@primeacademy.io',
    from: '', // sender address -> //YOUR GMAIL USER HERE IN STRING + email not in string! -> EXAMPLE@gmail.com
    to: mailer.toEmail, // list of receivers
    subject: mailer.subject, // Subject line
    text: mailer.message, // plain text body
    html: '<b>' + mailer.message + '</b>', // html body
  };

  try {
    await transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
    });

    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
  }
});

app.listen(app.get('port'), () => {
  console.log('Listening on port: ', app.get('port'));
});

module.exports = app;
