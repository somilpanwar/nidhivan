"use client"
import { Geist, Geist_Mono } from "next/font/google";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function PlanLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  const [startingDate, setStartingdate] = useState<Date | undefined>()
  const [endingDate, setEndingdate] = useState<Date | undefined>()
  const [reqSend, setreqSend] = useState(false);
  const { user } = useUser()
  const phoneNumber = Number(user?.phoneNumbers?.[0]?.phoneNumber.replace('+91', ' '));
  const name = user?.fullName;
  const email = user?.emailAddresses?.[0]?.emailAddress;
  const [formData, setFormData] = useState({
    name: name || '',
    number: phoneNumber || '',
    address: '',
    eventDetail: '',
    guestCount: '',
    email: email || '',
    userId: user?.id,
  })

  useEffect(() => {
    setFormData({
      name: name || '',
      number: phoneNumber || '',
      address: '',
      eventDetail: '',
      guestCount: '',
      email: email || '',
      userId: user?.id,
    })
  }, [user, email, phoneNumber, name])

  const bookedDates = [
    new Date(2025, 3, 10),
    new Date(2025, 3, 11),
    new Date(2025, 3, 12),
    new Date(2025, 3, 20),
    new Date(2025, 3, 21),
  ]
const router = useRouter();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //    we are using this to set the value acc to there name
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    const res = await fetch('http://localhost:5000/userReq', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...formData, from: startingDate, to: endingDate })
    })
    console.log(res);
    toast.success("Request Sent Successfully!")
    setreqSend(true);
    router.push('/')
    
  }
  return (
    <>
      <Navbar />
      <div
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col   md:flex-row-reverse  items-center justify-between px-4 md:px-3  py-3 gap-5 gap-y-1 md:gap-y-0`}
      >
        {/* Form Section */}
        

          <div className="w-full  md:w-1/2  p-2">
            <h2 className="text-2xl font-bold mb-4">User Details</h2>
            <form onSubmit={handleSubmit} className="space-y-4 w-full flex flex-col items-center">
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
                pattern="[0-9]{10}"
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
              <div>

                <span className="font-bold ">From - </span>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {startingDate ? format(startingDate, "PPP") : <span>Pick a start date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">

                    <Calendar
                      mode="single"
                      selected={startingDate}
                      onSelect={setStartingdate}
                      initialFocus
                      modifiers={
                        {
                          booked: bookedDates,
                        }
                      }
                      disabled={bookedDates}
                      modifiersClassNames={
                        {
                          booked: "bg-red-500 text-white ",
                        }
                      }

                    />
                  </PopoverContent>
                </Popover>

                <span className="font-bold"> To - </span>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {endingDate ? format(endingDate, "PPP") : <span>Pick a end date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">

                    <Calendar
                      mode="single"
                      selected={endingDate}
                      onSelect={setEndingdate}
                      initialFocus
                      modifiers={
                        {
                          booked: bookedDates,
                        }
                      }
                      disabled={bookedDates}
                      modifiersClassNames={
                        {
                          booked: "bg-red-500 text-white ",
                        }
                      }

                    />
                  </PopoverContent>
                </Popover>

              </div>
              <div className="flex gap-3">

                <Button type="submit" className={cn("ml-4  transition delay-75 duration-100 ease-in-out ", { "bg-green-500": reqSend })}>
                  {reqSend ? "Slot Requested" : "Request a Slot"}
                </Button>
                {reqSend && <Button variant="destructive" className="ml-4 transition delay-150 duration-300 ease-in-out" onClick={() => { setreqSend(false); toast.error("Request Cancelled!") }}>
                  cancel Request
                </Button>}
              </div>
            </form>
          </div>

          {/* Child Component (Content or Media) */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            {children}
          </div>
        </div>

    </>

  );
}
