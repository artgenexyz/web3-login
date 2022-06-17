import React, { useState } from "react"
import { useWeb3 } from "@3rdweb/hooks"

import ConnectWeb3Modal from "./ConnectWeb3Modal"

type ButtonProps = { text: string, onClick: () => void }

type Props = {
    autoOpen: boolean
    showDisconnect?: boolean
    renderButton?: (props: ButtonProps) => JSX.Element
}

/**
 * ConnectWallet 
 * @param param0 - autoOpen - If true, the modal will be opened on page load
 * @param param0 - showDisconnect - If true, a button will be shown to disconnect
 * @param param0 - renderButton - If provided, you can control how a button is rendered
 * @returns {JSX.Element}
 */
export const ConnectWallet = ({ autoOpen = false, showDisconnect = false, renderButton }: Props): JSX.Element => {

    const [open, setOpen] = useState(autoOpen)

    const { disconnectWallet } = useWeb3()

    return <>
        <ConnectWeb3Modal open={open} setOpen={setOpen} />

        {renderButton
            ? renderButton({ text: "Connect Wallet", onClick: () => setOpen(true) })
            : <button onClick={() => setOpen(true)}>Connect Wallet</button>
        }

        {showDisconnect && (
            renderButton
                ? renderButton({ text: "Disconnect Wallet", onClick: () => disconnectWallet() })
                : <button onClick={() => disconnectWallet()}>Disconnect Wallet</button>
        )}

    </>
}

export default ConnectWallet
