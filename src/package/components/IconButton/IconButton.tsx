import React, { useMemo } from "react";
import { Button } from "@mui/material";
import styles from "./IconButton.module.css"
import { ButtonProps } from "@mui/material/Button/Button";

interface IconButtonProps extends ButtonProps {
  icon?: any;
  children?: any;
  onClick?: any;
  orientation: string;
}

export const IconButton = (props: IconButtonProps) => {
  const { icon, onClick, orientation, children } = props;

  // icon is "close.svg"

  // we need to import img
  // const image = require(icon.src);
  const iconPath = new URL(icon.src, import.meta.url).toString();

  const className = useMemo(() => {
    const classNames = [styles.iconButton];

    switch (orientation) {
      case "top-left":
        classNames.push(styles.topLeft);
        break;
      case "top-right":
        classNames.push(styles.topRight);
        break;
      default:
        break;
    }
    return classNames.join(" ");
  }, [orientation]);

  return (
    <Button
      variant="text"
      onClick={onClick}
      className={className}
      {...props}
    >
      {icon && (<img style={{ width: 15, height: 15 }} src={iconPath} alt={icon.alt} />)}
      {children && children}
    </Button>
  )
}
