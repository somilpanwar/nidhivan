"use client"
import { useParams } from 'next/navigation'
import React from 'react'
import { plans } from '@/helper/HelperArray';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';

const Plans = () => {
    const { id } = useParams()
    const plan = plans.find(p => p.id === parseInt(id as string));


    return <>
        {plan &&
            <div className='w-full h-screen p-2'>

                <div className="relative h-48">
                    <Image src={plan.image} alt={plan.title} layout="fill" objectFit="cover" />
                </div>
                <div className="p-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.title}</h3>
                    <p className="text-3xl font-semibold text-yellow-500 mb-4">{plan.price}</p>
                    <ul className="mb-6">
                        {plan.features.map((feature, index) => (
                            <li key={index} className="flex items-center mb-2">
                                <FaCheck className="text-green-500 mr-2" />
                                <span className="text-gray-600">{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="bg-gray-100 p-2 rounded-lg">
                        <p className="text-gray-600 italic mb-2">&quot;{plan.testimonial.text}&quot;</p>
                        <p className="text-gray-800 font-semibold">- {plan.testimonial.author}</p>
                    </div>
                </div>
            </div>
        }


    </>
}

export default Plans