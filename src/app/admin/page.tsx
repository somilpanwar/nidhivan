// app/components/Dashboard.tsx
"use client"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Calendar } from "@/components/ui/calendar";
import User_req from "@/components/User_req";


const Dashboard = () => {
 


  return (
    <>
      <div className="flex flex-col gap-4 p-4 h-full">
        <div className="w-full text-center flex justify-center flex-col">
        <h1 className="text-2xl font-bold text-amber-400">NIDHIVAN</h1>
        <h2 className="text-xl font-semibold text-gray-700">Admin Dashborad</h2>
        </div>
        {/* upper section */}
        <div className="flex gap-3 h-1/2 justify-stretch items-center">
          <div className="w-full ">
            <Card className=" bg-gradient-to-br from-amber-200 to-amber-400">
              <CardHeader>
                <CardTitle className="font-bold text-2xl text-gray-800 ">Totel Request</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-semibold">1500</p>
              </CardContent>
            </Card>

          </div>
          <div className="w-full ">
            <Card className=" bg-gradient-to-br from-amber-200 to-amber-400">
              <CardHeader>
                <CardTitle className="font-bold text-2xl text-gray-800">Total Booking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-semibold">150</p>
              </CardContent>
            </Card>

          </div>

        </div>
        {/* lower section */}
        <div className="flex flex-col gap-3 justify-between items-center sm:flex-row sm:items-start ">
          <div >
          <Calendar
            mode="single"
            initialFocus 
            className="border-2 border-amber-100 rounded-lg shadow-md"
            />
            </div>


        <div className="border-2 border-amber-100  w-full rounded-xl shadow-md">
          <User_req />
        </div>
        </div>
      </div>
    </>

  )
};

export default Dashboard;
