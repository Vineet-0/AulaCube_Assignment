import React,{useState} from 'react'
import Reply2 from './Reply2'
import { FaStar,FaRegStar } from "react-icons/fa";
import { BsReplyFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";

const Reply = ({key,content,timeStamp,isStared,replies}) => {
    const [active,setActive] = useState(isStared);

    const [showReplyInput, setShowReplyInput] = useState(false);
    const [replyText, setReplyText] = useState('');
    const [allReply,setAllReply] = useState(replies);

    const handleReplyClick = () => {
        setShowReplyInput(!showReplyInput);
    };

    const handleReplyChange = (e) => {
        setReplyText(e.target.value);
    };

    const handleCancel = () => {
        setReplyText("");
        setShowReplyInput(false);
    }
    
    const handleReply = () => {
        if (replyText.trim() !== "") {
            const newReply = {
                content: replyText,
                timeStamp: new Date().toLocaleString(),
                isStared: false,
                replies: [],
            };
    
          // Create a copy of the existing comments array and add the new comment
          const newAllReply = [...allReply, newReply];
    
          // Update the state with the new comments array
          setAllReply(newAllReply);
    
          // Clear the input field
          setReplyText("");
          setShowReplyInput(false);
        }
    };

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
                        <button onClick={handleReplyClick} className="flex items-center justify-between gap-1 px-3 py-1 rounded-md text-sm text-white font-bold bg-green-500 hover:bg-green-600"><BsReplyFill /> <h3 className="hidden md:block">REPLY</h3></button>
                        <button className="flex items-center justify-between gap-1 px-3 py-1 rounded-md text-sm text-white font-bold bg-red-500 hover:bg-red-600"><MdDelete /> <h3 className="hidden md:block">DELETE</h3></button>
                    </div>
                </div>
            </div>
            {showReplyInput && (
                <div className="pl-16 pb-2 w-full flex items-center justify-between gap-2">
                    <div className="w-full flex items-center justify-between gap-1 border shadow rounded-md">
                        <input
                            type="text"
                            className="w-full px-2 py-1"
                            placeholder="reply..."
                            value={replyText}
                            onChange={handleReplyChange}
                        />
                        <button
                            className="pr-2 py-2 rounded-md text-lg font-bold"
                            onClick={handleCancel}
                        >
                            <MdOutlineCancel />
                        </button>
                    </div>
                    <button
                        className="px-2 py-2 rounded-md text-lg text-white font-bold bg-blue-500 hover:bg-blue-600"
                        onClick={handleReply}
                    >
                        <BsReplyFill />
                    </button>
                </div>
            )}
            <div className='border-l-2 ml-8 flex flex-col gap-1 mt-1'>
                {
                    allReply.map((reply,index) => {
                        return (
                            <Reply2 key={index} content={reply.content} timeStamp={reply.timeStamp} isStared={reply.isStared} replies={reply.replies}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Reply