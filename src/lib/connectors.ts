export const connectorsMetadata = {
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
    },
}

export const defaultConnectors = {
    injected: {},
    magic: {
        apiKey: "pk_...", // Your Magic.link api key
        chainId: 1, // The chain ID you want to allow on Magic.link
    },
    walletconnect: {},
    walletlink: {
        appName: "Buildship Example",
        url: "https://buildship.dev",
        darkMode: false,
    },
};
