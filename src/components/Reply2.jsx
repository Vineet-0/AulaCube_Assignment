import React,{useState} from 'react'
import { FaStar,FaRegStar } from "react-icons/fa";

const Reply2 = ({key,content,timeStamp,isStared,replies}) => {
    const [active,setActive] = useState(isStared);
    return (
        <div key={key} className='pl-8'>
            <div className='w-full flex flex-col items-start gap-1'>
                <div className='rounded-md p-4 border border-black bg-blue-200 relative w-full min-h-14'>
                    <h1 className='mr-6'>
                        {content} , {timeStamp}
                    </h1>
                    <button className='absolute top-4 right-4' onClick={()=>setActive(!active)}>
                        {active ? (
                                <FaStar size={20} className='text-yellow-400'/>
                            ) : ( 
                                <FaRegStar size={20}/>
                            )
                        }
                    </button>
                </div>
                <div className='flex items-center justify-start gap-1 py-2'>
                    <button className="px-3 py-1 rounded-md text-sm text-white font-bold bg-red-500 hover:bg-red-600">DELETE</button>
                </div>
            </div>
        </div>
    )
}

export default Reply2