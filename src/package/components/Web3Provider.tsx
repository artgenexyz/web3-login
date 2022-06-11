import React from "react";
import { IThirdwebContext, ThirdwebWeb3Provider, ThirdwebWeb3ProviderProps } from "@3rdweb/hooks";
import { Theme, ThemeProvider } from "@mui/material";

import { defaultConnectors } from "../connectors";
import { defaultTheme } from "../styles";

export interface Web3ProviderProps extends Omit<ThirdwebWeb3ProviderProps, "connectors"> {
    theme?: Theme;
    connectors?: IThirdwebContext["connectors"];
}

export const Web3Provider: React.FC<Web3ProviderProps> = ({
    theme = defaultTheme,
    connectors = defaultConnectors,
    children,
    ...props
}) => {
    return (
    <ThirdwebWeb3Provider {...props} connectors={connectors}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
    </ThirdwebWeb3Provider>
);
};
