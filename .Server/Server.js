/*  import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';  

dotenv.config(); 
const app = express();
const port = 3001;


app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  secure: false,
  auth: {
    user:"itsmepiglet05@gmail.com",
    pass:"mebl qwes sbrr vxhm"
  }
});
//add req and res
app.post('/send-email', (req, res) => {
  // Extract email details from request body
  const { from, text, html, firstName, lastName } = req.body; 

  const mailOptions = { 
    from,
    to:'itsmepiglet05@gmail.com',//
    subject: `Message From (${from})`, 
    text: `Message from ${firstName} ${lastName}: ${text}`,
    html: `<span className="fw-semibold fs-4">Message from</span> <p className="fs-5 "> ${firstName} ${lastName}: ${html}</p>`
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
  */