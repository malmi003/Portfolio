let express = require('express');
let router = express.Router();
let nodemailer = require('nodemailer');
const creds = require("../config/config");

let transport = {
  host: 'smtp.mailgun.org',
  // port: 587,
  // secure: false,
  auth: {
    user: creds.USER,
    pass: creds.PASS
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

// route to get process.env variables
router.get('/key', (req, res) => {
  res.json(process.env.REACT_APP_GOOGLE_MAPS_KEY)
});

module.exports = router;