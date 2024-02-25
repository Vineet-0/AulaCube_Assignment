import React,{useState} from 'react'
import { FaStar,FaRegStar } from "react-icons/fa";

const Reply2 = ({key}) => {
    const [active,setActive] = useState(true);
    return (
        <div key={key} className='pl-6'>
            <div className='w-full flex flex-col items-start gap-1'>
                <div className='rounded-md p-3 border border-black bg-blue-200 relative'>
                    <h1 className='mr-6'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis facere saepe perferendis exercitationem molestias reiciendis excepturi qui placeat nobis!
                    </h1>
                    <button className='absolute top-4 right-4' onClick={()=>setActive(!active)}>
                        {active ? (
                                <FaStar size={16} className='text-yellow-400'/>
                            ) : ( 
                                <FaRegStar size={16}/>
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