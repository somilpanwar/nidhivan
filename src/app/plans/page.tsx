"use client"
import React from 'react';
import dynamic from 'next/dynamic';
import { cn } from '@/lib/utils';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Footer from '@/components/Footer';
import Link from 'next/link';
import {plans, FAQs}  from '@/helper/HelperArray';


const DynamicImage = dynamic(() => import('next/image'), { ssr: false });


const PlansPage = () => {
  return <>
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-96">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <video 
        className="w-full h-full object-center"
        src="/video/intro.mp4" 
        autoPlay 
        muted 
        loop 
        playsInline
      />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {plans.map((plan, index) => (
            <div key={index} className={cn("bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:scale-105")}>
              <div className="relative h-48 ">
                <DynamicImage src={plan.image} alt={plan.title} width={400} height={200} className="object-cover h-48 w-full" />
              </div>
              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{plan.title}</h3>
                <p className="text-gray-600 italic">&quot;{plan.testimonial.text}&quot;</p>
                <p className={cn("text-3xl font-bold text-yellow-500 mb-4")}>{plan.price}</p>
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
               <Link href={`/plans/${plan.id}`} className="bg-yellow-500 text-white py-2 px-4 rounded-lg text-center hover:bg-yellow-600 transition duration-200">
                  Select this Package
                </Link>
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
          <Accordion type="single" collapsible>
            {FAQs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>

      <Footer />
    </div>
  </>
};

export default PlansPage;