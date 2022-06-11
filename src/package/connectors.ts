import metamask from "./assets/metamask.png";
import rainbow from "./assets/rainbow.png";
import coinbase from "./assets/coinbase.png";
import email from "./assets/email.png";

export const connectorsMetadata = {
    injected: {
        icon: metamask,
        name: "Metamask"
    },
    walletconnect: {
        icon: rainbow,
        name: "Rainbow or QR code"
    },
    walletlink: {
        icon: coinbase,
        name: "Coinbase"
    },
    magic: {
        icon: email,
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
