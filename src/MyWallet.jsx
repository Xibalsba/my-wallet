import { Navbar } from "./components/Navbar"
import { WalletAdd } from "./components/WalletAdd"
import { WalletTable } from "./components/WalletTable"

export const MyWallet = () => {
    return (
        <>
            <Navbar />

            <WalletAdd />

            <WalletTable />
        </>
    )
}
