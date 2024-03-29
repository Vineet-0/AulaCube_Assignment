import React,{useState} from 'react'
import { FaStar,FaRegStar } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Reply2 = ({key,content,timeStamp,isStared,replies}) => {
    const [active,setActive] = useState(isStared);
    return (
        <div key={key} className='pl-8'>
            <div className='w-full flex flex-col items-start gap-1'>
                <div className='rounded-md p-4 border shadow relative w-full min-h-14'>
                    <h1 className='mr-6'>
                        {content}
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
                <div className='w-full flex items-center justify-between'>
                    <div>
                        {timeStamp}
                    </div>
                    <div className='flex items-center gap-1 py-2'>
                        <button className="flex items-center justify-between gap-1 px-3 py-1 rounded-md text-sm text-white font-bold bg-red-500 hover:bg-red-600"><MdDelete /> <h3 className="hidden md:block">DELETE</h3></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reply2