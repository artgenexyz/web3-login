import React, { useState } from "react"
import { Typography } from "@mui/material"
import { useWeb3 } from "@3rdweb/hooks"

import { MagicEmailModal } from "./MagicEmailModal"
import { ConnectButton } from "./ConnectButton"
import { Modal } from "./Modal"
import styles from "./Modal/Modal.module.css"

import { connectorsMetadata } from "../connectors"

export const ConnectWeb3Modal = ({ open, setOpen }) => {
  const { connectWallet } = useWeb3()
  const [selectedConnector, setSelectedConnector] = useState(undefined)

  const connect = (connector) => {
    if (connector === "magic") {
      setSelectedConnector("magic")
      return
    }
    connectWallet(connector).then(() => {
      setOpen(false)
    })
  }


  if (selectedConnector === "magic") {
    return (
      <MagicEmailModal 
        open={true}
        setSelectedConnector={setSelectedConnector}
      />
    )
  }

  return (
    <Modal
      open={open}
      setOpen={setOpen}
      title="Sign in with wallet"
    >
      <div className={styles.content}>
        {/* @ts-ignore */}
        <Typography sx={{ mt: 2, mb: 5 }} variant="description">
          Connect your wallet to sign in. If you don't have a wallet, sign in with email.
        </Typography>
        {Object.entries(connectorsMetadata).map(([key, { icon, name }], i) => (
          <ConnectButton
            key={key}
            sx={i !== 0 ? {
              mt: 3
            } : undefined}
            onClick={() => connect(key)}
            icon={icon}>
            {name}
          </ConnectButton>
        ))}
      </div>
    </Modal>
  )
}

export default ConnectWeb3Modal
