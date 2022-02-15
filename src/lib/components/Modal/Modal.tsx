import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle, ThemeProvider } from "@mui/material";
import styles from "./Modal.module.css"
import { theme } from "../../../styles/theme";

interface ModalProps {
    open?: boolean;
    title?: any;
    children?: any;
}

export const Modal = ({
    open,
    title,
    children
}: ModalProps) => {
    const [isOpen, setIsOpen] = useState(open ?? false)

    const handleClose = () => {
        setIsOpen(false);
    }

    return (
        <ThemeProvider theme={theme}>
            <Dialog
                open={isOpen}
                onClose={handleClose}>
                    <DialogTitle className={styles.title}>
                        {title}
                    </DialogTitle>
                    <DialogContent>
                        {children}
                    </DialogContent>
            </Dialog>
        </ThemeProvider>
    )
}
