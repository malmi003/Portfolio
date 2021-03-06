let express = require('express');
let router = express.Router();
let nodemailer = require('nodemailer');

let transport = {
  host: 'smtp.mailgun.org',
  auth: {
    user: process.env.REACT_APP_MAILGUN_LOGIN,
    pass: process.env.REACT_APP_MAILGUN_PW
  }
}

let transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  let name = req.body.name
  let email = req.body.email
  let message = req.body.message
  let content = `name: ${name}\nemail: ${email}\nmessage: ${message}`

  let mail = {
    from: name,
    to: 'amandamalmin@gmail.com',  //Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})

module.exports = router;