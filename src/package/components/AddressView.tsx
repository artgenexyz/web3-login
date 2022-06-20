import React from "react"
import { useWeb3 } from "../"

type Props = {
    isShort?: boolean
}

/**
 * AddressView is used to display the current address.
 * It should be used inside Web3Provider so that it picks up address
 * @param isShort - If true, the address is displayed in short format: 0xff...abcd
 * @returns {JSX.Element}
 */
export const AddressView = ({ isShort = true }: Props): JSX.Element => {
    const { address } = useWeb3()

    if (!address) return null

    // TODO: parse ENS here

    return <>
        {isShort ? `${address.slice(0, 4)}...${address.slice(-4)}` : address}
    </>

}

export default AddressView
