import React, { useEffect, useState } from 'react'
import { Clock, Mail, Phone, MapPin, Users, Calendar } from 'lucide-react';


interface UserRequest {
  _id: string;
  name: string;
  number: string;
  address: string;
  eventDetail: string;
  guestCount: string;
  email: string;
  from: string;
  to: string;
  presentDate: string;
  planDetail: {
    id: number,
    title: string,
    price: string,
    features:[],
    image: string,
    testimonial: {
      text:string,
      author: string,
    }
  }
  
}

const User_req = () => {
  const [userRequest, setUserRequest] = useState<UserRequest[]>([]);

  useEffect(() => {
    const list = async () => {
      const res = await fetch('http://localhost:5000/userReq', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      setUserRequest(data);
    };

    list();
  }, [userRequest]);

  const handleAccept = (id: string) => {
    console.log('Accepted ID:', id);
    // Future: send a request to the backend to update status
  };

  const handleReject = (id: string) => {
    console.log('Rejected ID:', id);
    // Future: send a request to the backend to update status
  };

  return (
    <div className="p-5 max-w-6xl mx-auto  rounded-xl">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-4 ">Event Requests</h2>
      
      {userRequest.length === 0 ? (
        <div className="flex flex-col text-center py-12 bg-white rounded-lg shadow-md border border-gray-100">
          <p className="text-gray-500 text-lg">No pending requests found</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {userRequest.map((req) => (
            <div
              key={req._id}
              className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden transition-all hover:shadow-lg"
            >
              <div className="border-b border-gray-100 bg-yellow-100 px-6 py-4">
                <h3 className="text-xl font-semibold text-gray-800">{req.name}</h3>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
                  {/* Left column - Contact info */}
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-700">
                      <Mail className="w-4 h-4 mr-2 text-gray-400" />
                      <p className="text-sm">{req.email}</p>
                    </div>

                     <div className="flex items-center text-gray-700">
                      <Mail className="w-4 h-4 mr-2 text-gray-400" />
                      <p className="text-sm">{req.planDetail.title}</p>
                    </div>
                    
                    <div className="flex items-center text-gray-700">
                      <Phone className="w-4 h-4 mr-2 text-gray-400" />
                      <p className="text-sm">{req.number}</p>
                    </div>
                    
                    <div className="flex items-start text-gray-700">
                      <MapPin className="w-4 h-4 mr-2 mt-1 text-gray-400 flex-shrink-0" />
                      <p className="text-sm">{req.address}</p>
                    </div>
                  </div>
                  
                  {/* Right column - Event details */}
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-700">
                      <Users className="w-4 h-4 mr-2 text-gray-400" />
                      <p className="text-sm">
                        <span className="font-medium">Guests:</span> {req.guestCount}
                      </p>
                    </div>
                    
                    <div className="flex items-center text-gray-700">
                      <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                      <p className="text-sm">
                        <span className="font-medium">Dates:</span>{' '}
                        {new Date(req.from).toLocaleDateString()} - {new Date(req.to).toLocaleDateString()}
                      </p>
                    </div>
                    
                    <div className="flex items-start text-gray-700">
                      <Clock className="w-4 h-4 mr-2 mt-1 text-gray-400 flex-shrink-0" />
                      <p className="text-sm">
                        <span className="font-medium">Details:</span>{' '}
                        {req.eventDetail.length > 80 ? `${req.eventDetail.substring(0, 80)}...` : req.eventDetail}
                      </p>
                    </div>
                    <div className="flex items-start text-gray-700">
                      
                      <p className="text-sm">
                        <span className="font-medium">Requested Date:</span>{' '}
                       {
                        req.presentDate.toString().slice(0,10)
                       }
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Action buttons */}
                <div className="mt-6 flex space-x-4">
                  <button
                    className="flex-1 bg-amber-300 text-white py-2 px-4 rounded-md shadow-sm hover:bg-amber-500 transition-colors font-medium"
                    onClick={() => handleAccept(req._id)}
                  >
                    Accept
                  </button>
                  <button
                    className="flex-1 bg-white text-gray-700 border border-gray-300 py-2 px-4 rounded-md shadow-sm hover:bg-gray-50 transition-colors font-medium"
                    onClick={() => handleReject(req._id)}
                  >
                    Decline
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default User_req;
