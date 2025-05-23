/* eslint-disable @typescript-eslint/no-require-imports */
const mongoose = require('mongoose');

const userRequest = new mongoose.Schema({
  userId:{
    type:String,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  number: {
    type: String, // keeping it String to support country codes and extensions
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  eventDetail: {
    type: String,
    required: true,
    trim: true,
  },
  guestCount: {
    type: Number,
    required: true,
    min: 1, // assuming you can't have less than 1 guest
  },
  from: {
    type: Date,
    required: true,
  },
  to: {
    type: Date,
    required: true,
  },
  presentDate:{
    type: Date,
    default: Date.now(),
  },
  planDetails: {
    id: Number,
    title: String,
    price: String,
    features:{},
    image: String,
    testimonial: {
        text: String,
        author: String,
    }
  },
  status: {
    type: String,
    enum: ['confirmed', 'cancelled'],
    default: 'cancelled',
  },
}, { timestamps: true }); // timestamps will automatically add createdAt and updatedAt

module.exports = mongoose.model('reqList', userRequest);
