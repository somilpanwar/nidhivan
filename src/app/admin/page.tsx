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
        {/* upper section */}
        <div className="flex gap-3 h-1/2 justify-stretch items-center">
          <div className="w-full">
            <Card className="bg-amber-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Total Revenue</CardTitle>
                
              </CardHeader>
              <CardContent>
                <p className="text-xl font-semibold">$ 5,000</p>
              </CardContent>
            </Card>
          </div>


          <div className="w-full ">
            <Card className="bg-amber-300">
              <CardHeader>
                <CardTitle className="font-bold text-2xl text-white">Totel Request</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-semibold">1500</p>
              </CardContent>
            </Card>

          </div>

        </div>
        {/* lower section */}
        <div className="flex  gap-3 justify-between items-start ">
          <div >
          <Calendar
            mode="single"
            initialFocus 
            className="border-2 border-amber-300 rounded-lg"
            />
            </div>


        <div className="border-2 border-amber-300 w-full rounded-xl h-full ">
          <User_req />
        </div>
        </div>
      </div>
    </>

  )
};

export default Dashboard;
