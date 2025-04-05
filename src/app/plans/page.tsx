"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import {cn} from '@/lib/utils';
import Navbar from '@/components/Navbar';

const DynamicImage = dynamic(() => import('next/image'), { ssr: false });
const plans = [
  {
    title: "Intimate Gathering",
    price: "$999",
    features: ["Up to 50 guests", "4-hour venue rental", "Basic decor", "Ceremony setup"],
    image: "/image/image.png",
    testimonial: {
      text: "The Intimate Gathering package was perfect for our small wedding. Everything was beautiful!",
      author: "Emily & John"
    }
  },
  {
    title: "Elegant Celebration",
    price: "$1999",
    features: ["Up to 100 guests", "6-hour venue rental", "Premium decor", "Ceremony & reception setup", "Basic catering"],
    image: "/image/img2.jpg",
    testimonial: {
      text: "We couldn't have asked for a better experience. The Elegant Celebration package exceeded our expectations!",
      author: "Sarah & Michael"
    }
  },
  {
    title: "Grand Affair",
    price: "$2999",
    features: ["Up to 200 guests", "Full-day venue rental", "Luxury decor", "Full-service planning", "Premium catering", "Photography"],
    image: "/image/img3.jpeg",
    testimonial: {
      text: "Our Grand Affair wedding was truly magical. Every detail was perfect!",
      author: "Jessica & David"
    }
  },
];

const PlansPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  return <>
    <Navbar />
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-96">
        <Image 
          src="/image/hero-garden.jpg" 
          alt="Wedding Garden" 
          width={1920} 
          height={1080} 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">Choose Your Perfect Wedding Package</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {plans.map((plan, index) => (
            <div key={index} className={cn("bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:scale-105" )}>
              <div className="relative h-48 ">
                <DynamicImage src={plan.image} alt={plan.title} width={400} height={200} className="object-cover h-48 w-full" />
              </div>
              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{plan.title}</h3>
                <p className="text-gray-600 italic">"{plan.testimonial.text}"</p>
                <p className={cn("text-3xl font-bold text-yellow-500 mb-4" )}>{plan.price}</p>
                <ul className="text-gray-600 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="mb-2 flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => setSelectedPlan(plan)}
                  className={cn("w-full bg-yellow-400 text-white py-2 px-4 rounded-md hover:bg-yellow-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50")}
                >
                  Select This Package
                </button>
              </div>
             
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-8">Package Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-yellow-400">
                  <th className="p-3 text-white">Feature</th>
                  {plans.map((plan, index) => (
                    <th key={index} className="p-3 text-white">{plan.title}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {['Guests', 'Venue Rental', 'Decor', 'Catering', 'Photography'].map((feature, index) => (
                  <tr key={index} className={index % 2 != 0 ? 'bg-yellow-100' : ''}>
                    <td className="p-3 font-semibold">{feature}</td>
                    {plans.map((plan, planIndex) => (
                      <td key={planIndex} className="p-3 pl-10 sm:pl-16">
                        {plan.features.find(f => f.toLowerCase().includes(feature.toLowerCase())) ? <p className='text-green-400 font-semibold'>✓</p> : <p className='text-red-400 font-semibold'>X</p>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Can I customize my chosen package?</h3>
              <p className="text-gray-600">Yes, we offer customization options for all our packages. Please contact us for more information.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">What is your cancellation policy?</h3>
              <p className="text-gray-600">We offer full refunds for cancellations made 60 days or more before the event date. Please refer to our terms and conditions for more details.</p>
            </div>
            {/* Add more FAQ items as needed */}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Planning Your Dream Wedding?</h2>
          <p className="text-xl text-gray-600 mb-8">Contact us today to schedule a tour or discuss your wedding plans.</p>
          <button className="bg-yellow-400 text-white py-3 px-8 rounded-md text-lg font-semibold hover:bg-yellow-500 transition-colors duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
          </>
};

export default PlansPage;