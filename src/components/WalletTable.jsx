
export const WalletTable = () => {
    return (
        <div class="overflow-x-auto relative p-5">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="py-3 px-6">
                            Description
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Amount
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Type
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Buy Laptop
                        </th>
                        <td class="py-4 px-6">
                            $23,000.00
                        </td>
                        <td class="py-4 px-6">
                            Income
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}