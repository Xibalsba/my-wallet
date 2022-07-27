import { useState } from "react"
import { Navbar } from "./components/Navbar"
import { WalletAdd } from "./components/WalletAdd"
import { WalletTable } from "./components/WalletTable"

export const MyWallet = () => {

    const [ savings, setSavings ] = useState( 0 );

    return (
        <>
            <Navbar 
                savings={ savings }/>

            <WalletAdd />

            <WalletTable />
        </>
    )
}
