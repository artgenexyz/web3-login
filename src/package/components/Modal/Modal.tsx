import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import styles from "./Modal.module.css"

interface ModalProps {
    open: boolean;
    setOpen: (x: boolean) => void;
    title?: any;
    children?: any;
}

export const Modal = ({
    open,
    setOpen,
    title,
    children
}: ModalProps) => {

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}>
                <DialogTitle className={styles.title}>
                    {title}
                </DialogTitle>
                <DialogContent>
                    {children}
                </DialogContent>
        </Dialog>
    )
}
