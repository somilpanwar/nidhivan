/* eslint-disable @typescript-eslint/no-require-imports */
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb+srv://SOMIL:1234@cluster0.gbpym2y.mongodb.net/nidhivan").then(() => console.log("Mongodb Connected")).catch((err) => console.log("error", err));
const UserRequest = require('./userReq_Schema.js');
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.PASSWORD
    }

})
app.post('/userReq', (req) => {
    const { name,
        number,
        address,
        eventDetail,
        guestCount,
        email,
        from, to, userId } = req.body;

    const newReq = new UserRequest({
        userId: userId,
        name: name,
        number: number,
        address: address,
        eventDetail: eventDetail,
        guestCount: guestCount,
        email: email,
        from: from,
        to: to
    })
    newReq.save()
    const mailOptions = {
        from: process.env.ADMIN_EMAIL,
        to: email,
        subject: 'Thank You - Garden Booking Request Received',
        html: `
   <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; padding: 20px; background-color: #f9f9f9; border-radius: 8px; border: 1px solid #e0e0e0;">
  <h2 style="color: #FFDF00; text-align: center; margin-bottom: 5px;">NIDHIVAN</h2>
  <h4 style="color: #FFDF00; text-align: center; margin-top: 0;">Booking Request Received</h4>
  
  <p style="font-size: 15px;">Dear ${name},</p>
  
  <p style="font-size: 15px; line-height: 1.5;">
    Thank you for your interest in <strong style="color: #FFDF00;">NIDHIVAN Garden</strong>.  
    We have successfully received your booking request. Our team will review the details and you can expect a confirmation within the next <strong>24 hours</strong>.
  </p>
  
  <p style="font-size: 15px; line-height: 1.5;">
    We appreciate you considering us to be part of your special occasion and look forward to assisting you in making your event truly memorable.
  </p>
  
  <p style="font-size: 15px;">Best regards,<br/>
    <strong style="color: #FFDF00;">Team NIDHIVAN</strong>
  </p>
</div>

    `
    };

    transporter.sendMail(mailOptions, (error) => {
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log('Email sent:');
        }
    });

    
})

app.get('/userReq', async (req, res) => {
    const list = await UserRequest.find({})
    res.status(200).json(list);
})

app.post('/reqList', async (req, res) => {
    const { userId } = req.body;
    await UserRequest.find({ userId: userId }).then((data) => {
        res.status(200).json(data);
    }).catch((err) => {
        console.log(err);
    })

})