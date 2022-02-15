import { Modal } from "./Modal";
import { Button, Typography } from "@mui/material";
import styles from "./Modal/Modal.module.css"
import { wallets } from "../constants";
import { ConnectButton } from "./ConnectButton";

export const ConnectWeb3Modal = () => {
    return <Modal
        open={true}
        title="Sign in with wallet">
        <div className={styles.content}>
            {/*@ts-ignore*/}
            <Typography sx={{ mt: 2, mb: 5 }} variant="description">
                Connect your wallet to sign in. If you don't have a wallet, sign in with email.
            </Typography>
            {Object.values(wallets).map(({ icon, name }) => (
                <ConnectButton icon={icon}>
                    {name}
                </ConnectButton>
            ))}
        </div>
    </Modal>
}

export default ConnectWeb3Modal
