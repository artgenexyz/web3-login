var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/package/index.tsx
var package_exports = {};
__export(package_exports, {
  ConnectWeb3Modal: () => ConnectWeb3Modal,
  IconButton: () => IconButton,
  Web3Provider: () => Web3Provider,
  useSwitchNetwork: () => import_hooks4.useSwitchNetwork,
  useWeb3: () => import_hooks4.useWeb3
});
module.exports = __toCommonJS(package_exports);

// src/package/components/Modal/Modal.tsx
var import_react2 = __toESM(require("react"));

// src/package/components/IconButton/IconButton.tsx
var import_react = __toESM(require("react"));
var import_material = require("@mui/material");

// src/package/components/IconButton/IconButton.module.css
var _default = {};

// src/package/components/IconButton/IconButton.tsx
var IconButton = (props) => {
  const { icon, onClick, orientation, children } = props;
  const className = (0, import_react.useMemo)(() => {
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
  return /* @__PURE__ */ import_react.default.createElement(import_material.Button, __spreadValues({
    variant: "text",
    onClick,
    className
  }, props), icon && /* @__PURE__ */ import_react.default.createElement("img", {
    style: { width: 15, height: 15 },
    src: icon.src,
    alt: icon.alt
  }), children && children);
};

// src/package/components/Modal/Modal.tsx
var import_material2 = require("@mui/material");

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
  return /* @__PURE__ */ import_react2.default.createElement(import_material2.Dialog, {
    open,
    onClose: handleClose
  }, /* @__PURE__ */ import_react2.default.createElement(IconButton, {
    icon: {
      src: "close.svg",
      alt: "close-icon"
    },
    onClick: handleClose,
    orientation: "top-right"
  }), setBack && /* @__PURE__ */ import_react2.default.createElement(IconButton, {
    icon: {
      src: "chevron-left.svg",
      alt: "close-button"
    },
    onClick: handleBack,
    orientation: "top-left"
  }, /* @__PURE__ */ import_react2.default.createElement(import_material2.Typography, null, "  Back")), /* @__PURE__ */ import_react2.default.createElement(import_material2.DialogTitle, {
    className: _default2.title
  }, title), /* @__PURE__ */ import_react2.default.createElement(import_material2.DialogContent, null, children));
};

// src/package/components/ConnectWeb3Modal.tsx
var import_material5 = require("@mui/material");

// src/package/components/ConnectButton/ConnectButton.tsx
var import_react3 = __toESM(require("react"));
var import_material3 = require("@mui/material");

// src/package/components/ConnectButton/ConnectButton.module.css
var _default3 = {};

// src/package/components/ConnectButton/ConnectButton.tsx
var ConnectButton = (props) => {
  const { icon, onClick, children } = props;
  return /* @__PURE__ */ import_react3.default.createElement(import_material3.Button, __spreadValues({
    variant: "contained",
    onClick,
    className: _default3.connectButton
  }, props), icon && /* @__PURE__ */ import_react3.default.createElement("img", {
    style: { width: 24, marginRight: 8 },
    src: icon,
    alt: "wallet-icon"
  }), children);
};

// src/package/components/ConnectWeb3Modal.tsx
var import_hooks2 = require("@3rdweb/hooks");
var import_react5 = require("react");

// src/package/components/MagicEmailModal.tsx
var import_hooks = require("@3rdweb/hooks");
var import_material4 = require("@mui/material");
var import_react4 = require("react");
var MagicEmailModal = ({ open, setSelectedConnector }) => {
  const { connectWallet } = (0, import_hooks.useWeb3)();
  const [isOpen, setIsOpen] = (0, import_react4.useState)(open ?? false);
  const [email, setEmail] = (0, import_react4.useState)();
  return /* @__PURE__ */ React.createElement(Modal, {
    open: isOpen,
    setOpen: setIsOpen,
    title: "Sign in with email",
    setBack: setSelectedConnector
  }, /* @__PURE__ */ React.createElement("div", {
    className: _default2.content
  }, /* @__PURE__ */ React.createElement(import_material4.Typography, {
    sx: { mt: 2, mb: 5 },
    variant: "description"
  }, "Enter your email to receive your sign in link. Your wallet will be created automagically \u{1FA84}"), /* @__PURE__ */ React.createElement(import_material4.TextField, {
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
  const { connectWallet } = (0, import_hooks2.useWeb3)();
  const [selectedConnector, setSelectedConnector] = (0, import_react5.useState)(void 0);
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
  }, /* @__PURE__ */ React.createElement(import_material5.Typography, {
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
var import_hooks3 = require("@3rdweb/hooks");
var import_react6 = __toESM(require("react"));
var import_material7 = require("@mui/material");

// src/package/styles/theme.tsx
var import_material6 = require("@mui/material");
var defaultTheme = (0, import_material6.createTheme)({
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
  return /* @__PURE__ */ import_react6.default.createElement(import_hooks3.ThirdwebWeb3Provider, __spreadProps(__spreadValues({}, props), {
    connectors
  }), /* @__PURE__ */ import_react6.default.createElement(import_material7.ThemeProvider, {
    theme
  }, children));
};

// src/package/hooks.tsx
var import_hooks4 = require("@3rdweb/hooks");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ConnectWeb3Modal,
  IconButton,
  Web3Provider,
  useSwitchNetwork,
  useWeb3
});
//# sourceMappingURL=index.js.map