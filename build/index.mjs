var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/package/components/Modal/Modal.tsx
import React3 from "react";

// src/package/components/IconButton/IconButton.tsx
import React2, { useMemo } from "react";
import { Button } from "@mui/material";

// src/package/components/IconButton/IconButton.module.css
var _default = {};

// src/package/components/IconButton/IconButton.tsx
var IconButton = (props) => {
  const { icon, onClick, orientation, children } = props;
  const className = useMemo(() => {
    const classNames = [_default.iconButton];
    switch (orientation) {
      case "top-left":
        classNames.push(_default.topLeft);
        break;
      case "top-right":
        classNames.push(_default.topRight);
        break;
      default:
        break;
    }
    return classNames.join(" ");
  }, [orientation]);
  return /* @__PURE__ */ React2.createElement(Button, __spreadValues({
    variant: "text",
    onClick,
    className
  }, props), icon && /* @__PURE__ */ React2.createElement("img", {
    style: { width: 15, height: 15 },
    src: icon.src,
    alt: icon.alt
  }), children && children);
};

// src/package/components/Modal/Modal.tsx
import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";

// src/package/components/Modal/Modal.module.css
var _default2 = {};

// src/package/components/Modal/Modal.tsx
var Modal = ({
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
  return /* @__PURE__ */ React3.createElement(Dialog, {
    open,
    onClose: handleClose
  }, /* @__PURE__ */ React3.createElement(IconButton, {
    icon: {
      src: "close.svg",
      alt: "close-icon"
    },
    onClick: handleClose,
    orientation: "top-right"
  }), setBack && /* @__PURE__ */ React3.createElement(IconButton, {
    icon: {
      src: "chevron-left.svg",
      alt: "close-button"
    },
    onClick: handleBack,
    orientation: "top-left"
  }, /* @__PURE__ */ React3.createElement(Typography, null, "  Back")), /* @__PURE__ */ React3.createElement(DialogTitle, {
    className: _default2.title
  }, title), /* @__PURE__ */ React3.createElement(DialogContent, null, children));
};

// src/package/components/ConnectWeb3Modal.tsx
import { Typography as Typography3 } from "@mui/material";

// src/package/components/ConnectButton/ConnectButton.tsx
import React4 from "react";
import { Button as Button2 } from "@mui/material";

// src/package/components/ConnectButton/ConnectButton.module.css
var _default3 = {};

// src/package/components/ConnectButton/ConnectButton.tsx
var ConnectButton = (props) => {
  const { icon, onClick, children } = props;
  return /* @__PURE__ */ React4.createElement(Button2, __spreadValues({
    variant: "contained",
    onClick,
    className: _default3.connectButton
  }, props), icon && /* @__PURE__ */ React4.createElement("img", {
    style: { width: 24, marginRight: 8 },
    src: icon,
    alt: "wallet-icon"
  }), children);
};

// src/package/components/ConnectWeb3Modal.tsx
import { useWeb3 as useWeb32 } from "@3rdweb/hooks";
import { useState as useState2 } from "react";

// src/package/components/MagicEmailModal.tsx
import { useWeb3 } from "@3rdweb/hooks";
import { TextField, Typography as Typography2 } from "@mui/material";
import { useState } from "react";
var MagicEmailModal = ({ open, setSelectedConnector }) => {
  const { connectWallet } = useWeb3();
  const [isOpen, setIsOpen] = useState(open ?? false);
  const [email, setEmail] = useState();
  return /* @__PURE__ */ React.createElement(Modal, {
    open: isOpen,
    setOpen: setIsOpen,
    title: "Sign in with email",
    setBack: setSelectedConnector
  }, /* @__PURE__ */ React.createElement("div", {
    className: _default2.content
  }, /* @__PURE__ */ React.createElement(Typography2, {
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

// src/package/connectors.ts
var connectorsMetadata = {
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
var defaultConnectors = {
  injected: {},
  walletconnect: {},
  walletlink: {
    appName: "Buildship Example",
    url: "https://buildship.xyz",
    darkMode: false
  }
};

// src/package/components/ConnectWeb3Modal.tsx
var ConnectWeb3Modal = ({ open, setOpen }) => {
  const { connectWallet } = useWeb32();
  const [selectedConnector, setSelectedConnector] = useState2(void 0);
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
    className: _default2.content
  }, /* @__PURE__ */ React.createElement(Typography3, {
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

// src/package/components/Web3Provider.tsx
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import React5 from "react";
import { ThemeProvider } from "@mui/material";

// src/package/styles/theme.tsx
import { createTheme } from "@mui/material";
var defaultTheme = createTheme({
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

// src/package/components/Web3Provider.tsx
var Web3Provider = (_a) => {
  var _b = _a, {
    theme = defaultTheme,
    connectors = defaultConnectors,
    children
  } = _b, props = __objRest(_b, [
    "theme",
    "connectors",
    "children"
  ]);
  return /* @__PURE__ */ React5.createElement(ThirdwebWeb3Provider, __spreadProps(__spreadValues({}, props), {
    connectors
  }), /* @__PURE__ */ React5.createElement(ThemeProvider, {
    theme
  }, children));
};

// src/package/hooks.tsx
import { useWeb3 as useWeb33, useSwitchNetwork } from "@3rdweb/hooks";
export {
  ConnectWeb3Modal,
  IconButton,
  Web3Provider,
  useSwitchNetwork,
  useWeb33 as useWeb3
};
//# sourceMappingURL=index.mjs.map