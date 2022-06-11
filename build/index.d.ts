import { ButtonProps } from '@mui/material/Button/Button';
import React from 'react';
import { ThirdwebWeb3ProviderProps, IThirdwebContext } from '@3rdweb/hooks';
export { useSwitchNetwork, useWeb3 } from '@3rdweb/hooks';
import { Theme } from '@mui/material';

declare const ConnectWeb3Modal: ({ open, setOpen }: {
    open: any;
    setOpen: any;
}) => JSX.Element;

interface IconButtonProps extends ButtonProps {
    icon?: any;
    children?: any;
    onClick?: any;
    orientation: string;
}
declare const IconButton: (props: IconButtonProps) => JSX.Element;

interface Web3ProviderProps extends Omit<ThirdwebWeb3ProviderProps, "connectors"> {
    theme?: Theme;
    connectors?: IThirdwebContext["connectors"];
}
declare const Web3Provider: React.FC<Web3ProviderProps>;

export { ConnectWeb3Modal, IconButton, Web3Provider };
