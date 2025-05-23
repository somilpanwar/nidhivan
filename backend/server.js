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
        planDetails: planDetails
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

app.post('/reqAccept', async (req, res) => {
    const {email, name, packageName, startDate, endDate } = req.body;
    const mailOptions = {
        from: process.env.ADMIN_EMAIL,
        to: email,
        subject: 'Booking Confirmation - NIDHIVAN Garden',
        html:
            `<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #212529; max-width: 600px; margin: auto; padding: 30px; background-color: #f8f9fa; border-radius: 10px; border: 1px solid #dee2e6; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);">

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
  We are delighted to confirm your booking for the <strong>${packageName}</strong> package at <strong style="color: #0056b3;">NIDHIVAN Garden</strong>, scheduled from <strong>${startDate}</strong> to <strong>${endDate}</strong>.
</p>


  <p style="font-size: 16px; line-height: 1.6;">
    To ensure a smooth and personalized experience, we kindly request you to visit our venue within the next <strong>1–2 days</strong>. During your visit, we will complete the required formalities and proceed with the advance payment.
  </p>

  <p style="font-size: 16px; line-height: 1.6;">
    Our team will be available on-site to walk you through the event arrangements and answer any questions you may have.
    Please feel free to schedule your visit by replying to this email or calling our reservation desk directly.
  </p>

  <p style="font-size: 16px; line-height: 1.6;">
    We look forward to welcoming you and being a part of your special celebration.
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
    }

     transporter.sendMail(mailOptions, (error) => {
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log('Email sent!');
        }
    });
    res.status(200).json({ message: "email send!" });
}
)

app.post('/reqReject', async (req, res) => {
    const {email, name, packageName,reason } = req.body;
    const mailOptions = {
        from: process.env.ADMIN_EMAIL,
        to: email,
        subject: 'Booking Cancelled - NIDHIVAN Garden',
        html:
            `<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #212529; max-width: 600px; margin: auto; padding: 30px; background-color: #f8f9fa; border-radius: 10px; border: 1px solid #dee2e6; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);">

  <!-- Header -->
  <div style="text-align: center; margin-bottom: 20px;">
    <h2 style="color: #c82333; margin: 0; font-size: 28px; font-weight: 700;">NIDHIVAN</h2>
    <p style="margin: 5px 0 0; font-size: 16px; color: #6c757d;">Your Event. Our Commitment.</p>
    <hr style="border: none; border-top: 1px solid #ced4da; margin-top: 15px;" />
  </div>

  <!-- Greeting -->
  <p style="font-size: 16px;">Dear <strong>${name}</strong>,</p>

  <!-- Message Body -->
  <p style="font-size: 16px; line-height: 1.6;">
    Thank you for considering <strong style="color: #0056b3;">NIDHIVAN Garden</strong> for your upcoming event. We truly appreciate your interest and the trust you've placed in us.
  </p>

  <p style="font-size: 16px; line-height: 1.6;">
    After carefully reviewing your booking request for the <strong>${packageName}</strong> package, we regret to inform you that we are unable to confirm your reservation due to the following reason:
  </p>

  <p style="font-size: 16px; font-style: italic; color: #dc3545; line-height: 1.6;">
    "${reason}"
  </p>

  <p style="font-size: 16px; line-height: 1.6;">
    We understand this may come as a disappointment, and we sincerely apologize for any inconvenience this may cause. If your plans are flexible, we would be happy to discuss alternative dates or packages that may suit your needs.
  </p>

  <p style="font-size: 16px; line-height: 1.6;">
    Please don’t hesitate to reach out if you have any questions or if there's anything we can assist you with.
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
    }

     transporter.sendMail(mailOptions, (error) => {
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log('Email sent!');
        }
    });
    res.status(200).json({ message: "email send!" });
}
)