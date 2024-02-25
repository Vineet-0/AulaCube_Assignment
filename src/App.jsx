import { useState } from "react";
import Comment from "./components/Comment"

function App() {
    const [inputText, setInputText] = useState("");
    const [comments, setComments] = useState([
        {
            content : "Hello I am Vineet",
            timeStamp : "25/02/2024, 11:31:23",
            isStared : true,
            replies : [
                {
                    content : "Hi I am Raghav",
                    timeStamp : "25/02/2024, 11:35:30",
                    isStared : false,
                    replies : [
                        {
                            content : "Hi Raghav",
                            timeStamp : "25/02/2024, 11:36:35",
                            isStared : true,
                            replies : []
                        }
                    ]
                },
                {
                    content : "Hi I am Abhinav",
                    timeStamp : "25/02/2024, 11:36:25",
                    isStared : false,
                    replies : [
                        {
                            content : "Hi Abhinav",
                            timeStamp : "25/02/2024, 11:37:45",
                            isStared : true,
                            replies : []
                        }
                    ]
                }
            ]
        },
    ]);

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };
    
    const handleComment = () => {
        if (inputText.trim() !== "") {
            const newComment = {
                content: inputText,
                timeStamp: new Date().toLocaleString(),
                isStared: false,
                replies: [],
            };
    
          // Create a copy of the existing comments array and add the new comment
          const newComments = [...comments, newComment];
    
          // Update the state with the new comments array
          setComments(newComments);
    
          // Clear the input field
          setInputText("");
        }
    };

    return (
        <div className="w-full min-h-screen flex justify-center p-0 md:pt-[70px] absolute">
            <div className="w-full h-screen h-9/10 md:h-full mx-0 md:w-4/5 xl:w-3/5 max-h-3/4 bg-white flex flex-col gap-4 p-6 rounded-lg border shadow">
                <div className="w-full pt-3">
                    <h1 className="text-3xl font-bold pb-3 md:pb-0">COMMENT SECTION</h1>
                </div>
                <div className="w-full flex items-center justify-end">
                    <div className="flex-shrink-0 z-10 inline-flex items-center py-2.5 pl-4 pr-2 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-s-lg focus:ring-4 focus:outline-none focus:ring-gray-100">
                        Sort According to
                    </div>
                    <div>
                        <select id="states" className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-e-lg border-s-gray-100 dark:border-s-gray-700 border-s-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="DP">Date Posted</option>
                            <option value="MR">Most Replied</option>
                        </select>
                    </div>
                </div>
                <div className="w-full md:h-[600px] overflow-y-auto rounded-md scrollbarHide flex flex-col gap-1">
                {
                    comments.map((comment,index) => {
                        return (
                            <Comment key={index} content={comment.content} timeStamp={comment.timeStamp} isStared={comment.isStared} replies={comment.replies}/>
                        )
                    })
                }
                </div>
                <div className="w-full flex items-center justify-between gap-2">
                    <input
                        type="text"
                        className="w-full border border-black p-2 rounded-md"
                        placeholder="What's on your mind?"
                        value={inputText}
                        onChange={handleInputChange}
                    />
                    <button
                        className="px-5 py-2 rounded-md text-lg text-white font-bold bg-blue-500 hover:bg-blue-600"
                        onClick={handleComment}
                    >
                        Comment
                    </button>
                </div>
            </div>
        </div>
    )
}

export default App
