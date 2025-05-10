/* eslint-disable @typescript-eslint/no-require-imports */
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb+srv://SOMIL:1234@cluster0.gbpym2y.mongodb.net/nidhivan").then(() => console.log("Mongodb Connected")).catch((err) => console.log("error", err));
const UserRequest = require('./userReq_Schema.js');
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

app.post('/userReq', (req, res) => {
    const { name,
        number,
        address,
        eventDetail,
        guestCount,
        email,
    from,to,userId } = req.body;

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
    
    res.status(200).json({ message: "Data received successfully" });

})

app.get('/userReq', async(req, res) => {
const list =await UserRequest.find({})
res.status(200).json(list);
})

app.post('/reqList',async(req,res)=>{
    const {userId} = req.body;
    await UserRequest.find({userId:userId}).then((data)=>{
        res.status(200).json(data);
    }).catch((err)=>{
       console.log(err);
    })

})