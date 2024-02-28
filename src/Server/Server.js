import ('dotenv').config();
import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'process.env.itsmepiglet05@gmail.com',
    pass: 'process.env.ysfg enfr shzc ipty'
  }
});


app.post('/send-email', (req, res) => {
  // Extract email details from request body
  const { from, text, html, firstName, lastName } = req.body; 

  const mailOptions = { 
    from,
    to:'itsmepiglet05@gmail.com',
    subject: 'Message from Contact Form', 
    text: `Message from ${firstName} ${lastName}: ${text}`,
    html: `<p>Message from ${firstName} ${lastName}: ${html} ${from}</p>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully');
    }
  });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

