
const inputClasses = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';

export const WalletAdd = () => {
    return (
        <form>

            <h2 className="text-center text-gray-700 text-3xl my-7">Create a new registry</h2>

            <div className="w-5/5 flex justify-center">
                <div className="grid gap-6 mb-6 md:grid-cols-4">
                    <div className="p-3">
                        <input 
                            type="number"
                            step="any"
                            placeholder="Amount"
                            className={ inputClasses } />
                    </div>
                    <div className="p-3">
                        <input 
                            type="text"
                            placeholder="Description"
                            className={ inputClasses } />
                    </div>
                    <div className="p-3">
                        <select 
                             className={ inputClasses } >
                            <option selected disabled>Choose an type</option>
                            <option>income</option>
                            <option>egress</option>
                        </select>
                    </div>
                    <div className="flex items-center p-3">
                        <button 
                            type="submit" 
                            className="w-full text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add</button>
                    </div>
                </div>
            </div>

        </form>
    )
}
