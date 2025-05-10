import React from 'react'

interface UserReq {
    name: string,
    number: string,
    address: string,
    eventDetail: string,
    guestCount: string,
    email: string,
    userId: string,
}
type ReqListProps = {
    reqList: UserReq[]
}

const ReqList = ({ reqList }: ReqListProps) => {
    return (
        <div className=' w-full '>

            {reqList.length === 0 ?
                <div>
                    <div className="flex flex-col text-center py-12 bg-white rounded-lg shadow-md border border-gray-100">
                        <p className="text-gray-500 text-lg">No pending requests found</p>
                    </div>
                </div> :
                reqList.map((e, idx) => (
                    <div key={idx} className='flex  p-3 gap-4 border-1 border-gray-300 rounded-xl'>
                        <h1 className='text-gray-800 font-semibold'>{idx + 1}.</h1>
                        <div className='flex justify-between items-center w-full'>
                            <h1 className='text-black font-semibold'>{e.name}</h1>
                            <h2 className='text-gray-700 font-medium'>{e.eventDetail}</h2>
                            <h2 className='text-gray-700 font-medium'>{e.guestCount}</h2>
                        </div>

                    </div>
                ))}
        </div>
    )
}

export default ReqList