// app/components/Dashboard.tsx
"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar"; // Assuming you have your custom calendar component
import { useState } from "react";

// Sample user requests data
const userRequests = [
  { id: 1, name: "John Doe", status: "pending" },
  { id: 2, name: "Jane Smith", status: "pending" },
  { id: 3, name: "Alice Johnson", status: "pending" },
];

const Dashboard = () => {
  const [date, setDate] = useState<Date|undefined>();

  const handleAccept = (id: number) => {
    console.log(`Request with ID ${id} accepted.`);
  };

  const handleDeny = (id: number) => {
    console.log(`Request with ID ${id} denied.`);
  };

  return (
     <>
     Admin Dashboard
     </>
      
  )
};

export default Dashboard;
