import React from "react";
import { Button } from "@mui/material";
import styles from "./ConnectButton.module.css"
import { ButtonProps } from "@mui/material/Button/Button";

interface ConnectButtonProps extends ButtonProps {
    icon?: any;
    children: any;
    onClick?: any;
}

export const ConnectButton = (props: ConnectButtonProps) => {
    const { icon, onClick, children } = props
    return <Button
        variant="contained"
        onClick={onClick}
        className={styles.connectButton}
        {...props}
    >
        {icon && <img style={{width: 24, marginRight: 8}} src={icon} alt="wallet-icon"/>}
        {children}
    </Button>
}
