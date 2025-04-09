"use client"
import { Geist, Geist_Mono } from "next/font/google";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { useState } from "react";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function PlanLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    const [date, setDate] = useState<Date | undefined>()


 const [formData, setFormData] = useState({
        name: '',
        number: '',
        address: '',
        eventDetail: '',
        guestCount: '',
        email: '',
    })


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      //    we are using this to set the value acc to there name
      const { name, value } = e.target
      setFormData(prevState => ({
          ...prevState,
          [name]: value
      }))
  }

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      // Here you would typically send the data to your backend
      console.log({ ...formData, date })
  }
  return (

    <div
    className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col-reverse  md:flex-row-reverse  items-start justify-between px-4 md:px-12 py-8 gap-10`}
  >
    {/* Form Section */}
    <div className="w-full mt-5 md:w-1/2">
      <h2 className="text-2xl font-bold mb-4">User Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4 w-full">
        <Input
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <Input
          name="number"
          type="tel"
          placeholder="Phone Number"
          value={formData.number}
          onChange={handleInputChange}
          required
        />
        <Textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleInputChange}
          required
        />
        <Input
          name="eventDetail"
          placeholder="Event Details"
          value={formData.eventDetail}
          onChange={handleInputChange}
          required
        />
        <Input
          name="guestCount"
          type="number"
          placeholder="Approximate Number of Guests"
          value={formData.guestCount}
          onChange={handleInputChange}
          required
        />
        <Input
          name="email"
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <Button type="submit" className="ml-4">
          Send Request
        </Button>
      </form>
    </div>
  
    {/* Child Component (Content or Media) */}
    <div className="w-full md:w-1/2 flex justify-center items-center">
      {children}
    </div>
  </div>
  

  );
}
