import React, { useState } from "react";
import ConnectWeb3Modal from "./ConnectWeb3Modal";

type Props = {
    autoOpen: boolean;
    renderButton?: (onClick: () => void) => JSX.Element;
}

/**
 * ConnectWallet 
 * @param param0 - autoOpen - If true, the modal will be opened on page load
 * @returns {JSX.Element}
 */
export const ConnectWallet = ({ autoOpen = false, renderButton }: Props) => {

    const [open, setOpen] = useState(autoOpen);

    return <>
        <ConnectWeb3Modal open={open} setOpen={setOpen} />

        {renderButton
            ? renderButton(() => setOpen(true))
            : <button onClick={() => setOpen(true)}>Connect Wallet</button>
        }

    </>
}

export default ConnectWallet;
