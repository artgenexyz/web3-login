import { useWeb3 } from "@3rdweb/hooks";
import { Modal } from "./Modal";
import styles from "./Modal/Modal.module.css";
import { TextField, Typography } from "@mui/material";
import { ConnectButton } from "./ConnectButton";
// import { IconButton } from "./IconButton";
import { useState } from "react";

export const MagicEmailModal = ({ open, setSelectedConnector }) => {
  const { connectWallet } = useWeb3()
  const [isOpen, setIsOpen] = useState(open ?? false)
  const [email, setEmail] = useState<string | undefined>()

  return <Modal
    open={isOpen}
    setOpen={setIsOpen}
    title="Sign in with email"
    setBack={setSelectedConnector}
  >
    <div className={styles.content}>
      {/* @ts-ignore */}
      <Typography sx={{ mt: 2, mb: 5 }} variant="description">
        Enter your email to receive your sign in link. Your wallet will be created automagically 🪄
      </Typography>
      <TextField
        sx={{ mb: 5 }}
        variant="filled"
        type="text"
        label="Email"
        placeholder="example@mail.com"
        onChange={(e) => {
          setEmail(e.target.value)
        }}
      />
      <ConnectButton onClick={() => {
        connectWallet("magic", {
          email
        }).then(() => {
          setIsOpen(false)
        })
      }}>
        Get link
      </ConnectButton>
    </div>
  </Modal>
}
