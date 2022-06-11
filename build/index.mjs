import React, { useMemo, useState } from 'react';
import { Button, Dialog, Typography, DialogTitle, DialogContent, TextField, createTheme, ThemeProvider } from '@mui/material';
import { useWeb3, ThirdwebWeb3Provider } from '@3rdweb/hooks';
export { useSwitchNetwork, useWeb3 } from '@3rdweb/hooks';

const styles$2 = ".iconButton {\n  padding: 10px !important;\n  margin: 0 !important;\n  min-width: unset !important;\n  border-radius: 5px !important;\n}\n\n.topLeft {\n  position: absolute !important;\n  top: 10px !important;\n  left: 10px !important;\n}\n\n.topRight {\n  position: absolute !important;\n  top: 10px !important;\n  right: 10px !important;\n}";

const IconButton = (props) => {
  const { icon, onClick, orientation, children } = props;
  const className = useMemo(() => {
    const classNames = [styles$2.iconButton];
    switch (orientation) {
      case "top-left":
        classNames.push(styles$2.topLeft);
        break;
      case "top-right":
        classNames.push(styles$2.topRight);
        break;
    }
    return classNames.join(" ");
  }, [orientation]);
  return /* @__PURE__ */ React.createElement(Button, {
    variant: "text",
    onClick,
    className,
    ...props
  }, icon && /* @__PURE__ */ React.createElement("img", {
    style: { width: 15, height: 15 },
    src: icon.src,
    alt: icon.alt
  }), children && children);
};

const styles$1 = ".content {\n  width: 350px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.dialog {\n  padding: 64px;\n}\n\n.connectButton {\n  margin-bottom: 12px !important;\n  width: 100%;\n}\n\n.title {\n  margin-top: 15px !important;\n  text-align: center;\n}\n\n@media only screen and (max-width: 540px) {\n  .content {\n    width: 100%;\n  }\n}";

const Modal = ({
  open,
  setOpen,
  title,
  children,
  setBack
}) => {
  const handleClose = () => {
    setOpen(false);
  };
  const handleBack = () => {
    setBack(null);
  };
  return /* @__PURE__ */ React.createElement(Dialog, {
    open,
    onClose: handleClose
  }, /* @__PURE__ */ React.createElement(IconButton, {
    icon: {
      src: "close.svg",
      alt: "close-icon"
    },
    onClick: handleClose,
    orientation: "top-right"
  }), setBack && /* @__PURE__ */ React.createElement(IconButton, {
    icon: {
      src: "chevron-left.svg",
      alt: "close-button"
    },
    onClick: handleBack,
    orientation: "top-left"
  }, /* @__PURE__ */ React.createElement(Typography, null, "  Back")), /* @__PURE__ */ React.createElement(DialogTitle, {
    className: styles$1.title
  }, title), /* @__PURE__ */ React.createElement(DialogContent, null, children));
};

const styles = ".connectButton {\n    width: 100%;\n}\n";

const ConnectButton = (props) => {
  const { icon, onClick, children } = props;
  return /* @__PURE__ */ React.createElement(Button, {
    variant: "contained",
    onClick,
    className: styles.connectButton,
    ...props
  }, icon && /* @__PURE__ */ React.createElement("img", {
    style: { width: 24, marginRight: 8 },
    src: icon,
    alt: "wallet-icon"
  }), children);
};

const MagicEmailModal = ({ open, setSelectedConnector }) => {
  const { connectWallet } = useWeb3();
  const [isOpen, setIsOpen] = useState(open ?? false);
  const [email, setEmail] = useState();
  return /* @__PURE__ */ React.createElement(Modal, {
    open: isOpen,
    setOpen: setIsOpen,
    title: "Sign in with email",
    setBack: setSelectedConnector
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles$1.content
  }, /* @__PURE__ */ React.createElement(Typography, {
    sx: { mt: 2, mb: 5 },
    variant: "description"
  }, "Enter your email to receive your sign in link. Your wallet will be created automagically \u{1FA84}"), /* @__PURE__ */ React.createElement(TextField, {
    sx: { mb: 5 },
    variant: "filled",
    type: "text",
    label: "Email",
    placeholder: "example@mail.com",
    onChange: (e) => {
      setEmail(e.target.value);
    }
  }), /* @__PURE__ */ React.createElement(ConnectButton, {
    onClick: () => {
      connectWallet("magic", {
        email
      }).then(() => {
        setIsOpen(false);
      });
    }
  }, "Get link")));
};

const connectorsMetadata = {
  injected: {
    icon: "metamask.png",
    name: "Metamask"
  },
  walletconnect: {
    icon: "rainbow.png",
    name: "Rainbow or QR code"
  },
  walletlink: {
    icon: "coinbase.png",
    name: "Coinbase"
  },
  magic: {
    icon: "email.png",
    name: "Email"
  }
};
const defaultConnectors = {
  injected: {},
  walletconnect: {},
  walletlink: {
    appName: "Buildship Example",
    url: "https://buildship.xyz",
    darkMode: false
  }
};

const ConnectWeb3Modal = ({ open, setOpen }) => {
  const { connectWallet } = useWeb3();
  const [selectedConnector, setSelectedConnector] = useState(void 0);
  const connect = (connector) => {
    if (connector === "magic") {
      setSelectedConnector("magic");
      return;
    }
    connectWallet(connector).then(() => {
      setOpen(false);
    });
  };
  if (selectedConnector === "magic") {
    return /* @__PURE__ */ React.createElement(MagicEmailModal, {
      open: true,
      setSelectedConnector
    });
  }
  return /* @__PURE__ */ React.createElement(Modal, {
    open,
    setOpen,
    title: "Sign in with wallet"
  }, /* @__PURE__ */ React.createElement("div", {
    className: styles$1.content
  }, /* @__PURE__ */ React.createElement(Typography, {
    sx: { mt: 2, mb: 5 },
    variant: "description"
  }, "Connect your wallet to sign in. If you don't have a wallet, sign in with email."), Object.entries(connectorsMetadata).map(([key, { icon, name }], i) => /* @__PURE__ */ React.createElement(ConnectButton, {
    key,
    sx: i !== 0 ? {
      mt: 3
    } : void 0,
    onClick: () => connect(key),
    icon
  }, name))));
};

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#1f1f1f"
    }
  },
  spacing: [0, 4, 8, 12, 16, 24, 32, 64],
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          "@media only screen and (max-width: 540px)": {
            padding: "40px 10px",
            margin: 0,
            width: "100%",
            height: "100vh",
            borderRadius: 0
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none"
        },
        contained: {
          padding: "8px 32px",
          color: "#fff",
          borderRadius: "5px",
          "&:hover": {
            boxShadow: "none"
          }
        },
        outlined: {
          padding: "8px 32px",
          borderRadius: "5px",
          "&:hover": {
            boxShadow: "none"
          }
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundImage: "inherit",
          borderRadius: "20px",
          padding: "40px 60px"
        }
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: "0px",
          fontSize: "28px"
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        label: {
          color: "rgba(0, 0, 0, 0.6)"
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          "&::before": {
            borderBottom: "0px !important"
          },
          "&::after": {
            borderBottom: "0px !important"
          }
        },
        input: {
          paddingLeft: 16,
          paddingRight: 16,
          color: "#171A1F",
          "&:-webkit-autofill": {
            borderRadius: "inherit"
          }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "16px",
          lineHeight: "24px",
          transform: "translate(16px, 16px) scale(1)",
          color: "#9D9FA3",
          marginTop: "0 !important"
        },
        shrink: {
          fontSize: "13px",
          lineHeight: "18px",
          transform: "translate(16px, 8px) scale(1)",
          color: "#71747A"
        }
      }
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          "& .MuiFilledInput-root": {
            paddingLeft: 16,
            "& .MuiFilledInput-input": {
              lineHeight: "24px",
              padding: "0px",
              paddingTop: "6px",
              paddingBottom: "8px"
            }
          }
        }
      }
    }
  },
  typography: {
    fontFamily: "Inter, San Francisco, Roboto, Helvetica, sans-serif",
    button: {
      color: "#fff",
      fontSize: "16px !important",
      textTransform: "none",
      whiteSpace: "pre-wrap",
      margin: 0,
      padding: 0
    },
    h4: {
      fontWeight: 600
    },
    h5: {
      fontWeight: 500
    },
    subtitle1: {
      marginTop: "16px !important",
      fontWeight: 400,
      color: "rgba(0, 0, 0, 0.7)"
    },
    description: {
      fontWeight: 300,
      color: "rgba(156, 163, 175)",
      lineHeight: 1.5
    }
  }
});

const Web3Provider = ({
  theme = defaultTheme,
  connectors = defaultConnectors,
  children,
  ...props
}) => {
  return /* @__PURE__ */ React.createElement(ThirdwebWeb3Provider, {
    ...props,
    connectors
  }, /* @__PURE__ */ React.createElement(ThemeProvider, {
    theme
  }, children));
};

export { ConnectWeb3Modal, IconButton, Web3Provider };
