import React from "react";
import { IconButton } from "../IconButton";
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
      onClose={handleClose}
    > 
      <IconButton
        icon={{
          src: "close.svg",
          alt: "close-icon"
        }}
        onClick={handleClose}
        orientation={"top-right"}
      />
      <DialogTitle className={styles.title}>
        {title}
      </DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  )
}
