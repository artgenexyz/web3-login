import React, { useEffect, useState } from "react"
import { useWeb3 } from "@3rdweb/hooks"

import { LogoutOutlined } from "@mui/icons-material"
import { Box, Button, Typography } from "@mui/material"

import ConnectWeb3Modal from "./ConnectWeb3Modal"
import AddressView from "./AddressView"

type ButtonProps = {
    children: JSX.Element
    onClick: () => void
}

type Props = {
    autoOpen: boolean
    showDisconnect?: boolean
    renderButton?: (props: ButtonProps) => JSX.Element
}

const defaultRenderButton = ({ children, onClick }: ButtonProps) => (
    <Button variant="text" onClick={onClick} sx={{ px: 0, mx: 2, color: "rgba(0,0,0,0.6)" }}>
        {children}
    </Button>
)

/**
 * ConnectWallet 
 * @param param0 - autoOpen - If true, the modal will be opened on page load
 * @param param0 - showDisconnect - If true, a button will be shown to disconnect
 * @param param0 - renderButton - If provided, you can control how a button is rendered
 * @returns {JSX.Element}
 */
export const ProfileView = ({ autoOpen = false, showDisconnect = true, renderButton = defaultRenderButton }: Props): JSX.Element => {

    const [open, setOpen] = useState(false)

    useEffect(() => {
        // we do it here instead of default value so that the modal is opened on page load ONLY
        if (autoOpen) {
            setOpen(true)
        }
    }, [])

    const { address, disconnectWallet } = useWeb3()

    const copyAddress = () => {
        navigator.clipboard.writeText(address)

        // TODO: show a snackbar
        window.alert("Address copied to clipboard")
    }

    return <Box display="flex" alignItems="center">
        <ConnectWeb3Modal open={open} setOpen={setOpen} />

        {!address && (renderButton({
            children: <>Connect Wallet</>,
            onClick: () => setOpen(true),
        }))}

        {/* <Box > */}
        {address && <Typography
            sx={{ py: 3, cursor: "pointer", color: "rgba(0,0,0,0.6)" }}
            fontWeight={500}
            onClick={copyAddress}
        >
            <AddressView />
        </Typography>}

        {showDisconnect && address && (renderButton({
            children: <LogoutOutlined fontSize="small" />,
            onClick: () => disconnectWallet(),
        }))}

    </Box>
}


// renderButton
//     ? renderButton({
//         children: <LogoutOutlined fontSize="small" />,
//         onClick: () => disconnectWallet()
//     })
//     : <button onClick={() => disconnectWallet()}>
//         <LogoutOutlined fontSize="small" />
//     </button>
// )}

export default ProfileView
