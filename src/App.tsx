import React, { useState } from 'react';
import './App.css';
import { ConnectWeb3Modal, Web3Provider } from "./package";
import { defaultConnectors } from "./package/connectors";
import { defaultTheme } from "./styles/theme";

function App() {
    const [open, setOpen] = useState(true);

		
    return (
        <Web3Provider
					theme={defaultTheme}
					supportedChainIds={[1, 4]}
					connectors={defaultConnectors}
        >
          <ConnectWeb3Modal open={open} setOpen={setOpen} />
        </Web3Provider>
    );
}

export default App;
