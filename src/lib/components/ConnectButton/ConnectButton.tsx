import React from "react";
import { Button } from "@mui/material";
import styles from "./ConnectButton.module.css"

interface ConnectButtonProps {
    icon: any;
    children: any;
}

export const ConnectButton = ({ icon, children }: ConnectButtonProps) => (
    <Button variant="contained" className={styles.connectButton}>
        <img style={{ width: 24, marginRight: 8 }} src={icon} />
        {children}
    </Button>
)
