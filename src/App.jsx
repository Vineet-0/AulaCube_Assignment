import Comment from "./components/Comment"

function App() {
    return (
        <div className="w-full min-h-screen bg-blue-300 flex justify-center pt-[70px]">
            <div className="w-full mx-4 md:mx-0 md:w-4/5 xl:w-3/5 max-h-3/4 h-full bg-white flex flex-col gap-4 p-6 rounded-lg">
                <div className="w-full pt-3">
                    <h1 className="text-3xl font-bold">Comment Section Component</h1>
                </div>
                <div className="w-full flex items-center justify-end">
                    <div className="flex-shrink-0 z-10 inline-flex items-center py-2.5 pl-4 pr-2 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-s-lg focus:ring-4 focus:outline-none focus:ring-gray-100">
                        Sort According to
                    </div>
                    <div>
                        <select id="states" class="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-e-lg border-s-gray-100 dark:border-s-gray-700 border-s-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="DP">Date Posted</option>
                            <option value="MR">Most Replied</option>
                        </select>
                    </div>
                </div>
                <div className="w-full h-[600px] overflow-y-auto rounded-md scrollbarHide flex flex-col gap-1">
                {
                    [1,2,3,4,5,6,7,8,9,10].map((index) => {
                        return (
                            <Comment key={index}/>
                        )
                    })
                }
                </div>
                <div className="w-full flex items-center justify-between gap-2">
                    <input type="text" className="w-full border border-black p-2 rounded-md" placeholder="What's on your mind?" />
                    <button className="px-5 py-2 rounded-md text-lg text-white font-bold bg-blue-500 hover:bg-blue-600">Comment</button>
                </div>
            </div>
        </div>
    )
}

export default App
