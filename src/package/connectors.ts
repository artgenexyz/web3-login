import metamask from "./assets/metamask.png";
import rainbow from "./assets/rainbow.png";
import coinbase from "./assets/coinbase.png";
import email from "./assets/email.png";

export const connectorsMetadata = {
    injected: {
        icon: require(metamask),
        name: "Metamask"
    },
    walletconnect: {
        icon: require(rainbow),
        name: "Rainbow or QR code"
    },
    walletlink: {
        icon: require(coinbase),
        name: "Coinbase"
    },
    magic: {
        icon: require(email),
        name: "Email"
    },
}

export const defaultConnectors = {
    injected: {},
    // magic: {
    //     apiKey: "pk_...", // Your Magic.link api key
    //     chainId: 1, // The chain ID you want to allow on Magic.link
    // },
    walletconnect: {},
    walletlink: {
        appName: "Buildship Example",
        url: "https://buildship.xyz",
        darkMode: false,
    },
};
