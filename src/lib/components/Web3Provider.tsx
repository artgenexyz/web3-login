import { ThirdwebWeb3Provider, ThirdwebWeb3ProviderProps } from "@3rdweb/hooks";
import React from "react";
import { Theme, ThemeProvider } from "@mui/material";

interface Web3ProviderProps extends ThirdwebWeb3ProviderProps {
    theme?: Theme;
}

export const Web3Provider: React.FC<Web3ProviderProps> = ({
    theme,
    children,
    ...props
}) => {
    return (
    <ThirdwebWeb3Provider {...props}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
    </ThirdwebWeb3Provider>
);
};
