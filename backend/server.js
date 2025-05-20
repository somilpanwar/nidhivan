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
app.post('/userReq', (req, res) => {
    const { name,
        number,
        address,
        eventDetail,
        guestCount,
        email,
        from,
        to,
        userId,
        planDetails
    } = req.body;
    const newReq = new UserRequest({
        userId: userId,
        name: name,
        number: number,
        address: address,
        eventDetail: eventDetail,
        guestCount: guestCount,
        email: email,
        from: from,
        to: to,
        planDetails: planDetails || {}
    })
    newReq.save()
    const mailOptions = {
        from: process.env.ADMIN_EMAIL,
        to: email,
        subject: 'Thank You - Garden Booking Request Received',
        html: `
  <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #212529; max-width: 600px; margin: auto; padding: 30px; background-color: #f8f9fa; border-radius: 10px; border: 1px solid #dee2e6; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);">
  
  <!-- Header -->
  <div style="text-align: center; margin-bottom: 20px;">
    <h2 style="color: #0056b3; margin: 0; font-size: 28px; font-weight: 700;">NIDHIVAN</h2>
    <p style="margin: 5px 0 0; font-size: 16px; color: #6c757d;">Your Event. Our Commitment.</p>
    <hr style="border: none; border-top: 1px solid #ced4da; margin-top: 15px;" />
  </div>

  <!-- Greeting -->
  <p style="font-size: 16px;">Dear <strong>${name}</strong>,</p>

  <!-- Message Body -->
  <p style="font-size: 16px; line-height: 1.6;">
    Thank you for choosing <strong style="color: #0056b3;">NIDHIVAN Garden</strong>.
    We’ve successfully received your booking request for the <strong>${planDetails.title}</strong> package.
  </p>

  <p style="font-size: 16px; line-height: 1.6;">
    Our reservations team is currently reviewing the details of your request. You’ll receive a confirmation email within the next <strong>24 hours</strong>.
  </p>

  <p style="font-size: 16px; line-height: 1.6;">
    We're excited to be a part of your special occasion and are dedicated to making it truly memorable.
    If you have any questions in the meantime, feel free to reply to this message.
  </p>

  <!-- Signature -->
  <p style="font-size: 16px; margin-top: 30px;">
    Warm regards,<br/>
    <strong style="color: #0056b3;">Team NIDHIVAN</strong>
  </p>

  <!-- Footer -->
  <div style="margin-top: 30px; text-align: center; font-size: 13px; color: #6c757d;">
    © ${new Date().getFullYear()} NIDHIVAN Garden. All rights reserved.
  </div>
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
    res.status(200).json({ message: "Request received" });

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