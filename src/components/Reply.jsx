import React,{useState} from 'react'
import Reply2 from './Reply2'
import { FaStar,FaRegStar } from "react-icons/fa";

const Reply = ({key}) => {
    const [active,setActive] = useState(false);
    return (
        <div key={key} className='pl-6'>
            <div className='w-full flex flex-col items-start gap-1'>
                <div className='rounded-md p-3 border border-black bg-blue-200 relative'>
                    <h1 className='mr-6'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis facere saepe perferendis exercitationem molestias reiciendis excepturi qui placeat nobis!
                    </h1>
                    {active ? (
                            <FaStar className='absolute top-4 right-4'/>
                        ) : ( 
                            <FaRegStar className='absolute top-4 right-4'/>
                        )
                    }
                </div>
                <div className='flex items-center justify-start gap-1 py-2'>
                    <button className="px-3 py-1 rounded-md text-sm text-white font-bold bg-green-500 hover:bg-green-600">Reply</button>
                    <button className="px-3 py-1 rounded-md text-sm text-white font-bold bg-red-500 hover:bg-red-600">DELETE</button>
                </div>
            </div>
            <div className='border-l-2 ml-6 flex flex-col gap-1 mt-1'>
                {
                    [1,2].map((index) => {
                        return (
                            <Reply2 key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Reply