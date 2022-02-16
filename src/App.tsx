import React, { useState } from 'react';
import './App.css';
import { ConnectWeb3Modal } from "./lib";
import { Web3Provider } from "./lib/components/Web3Provider";
import { defaultConnectors } from "./lib/connectors";
import { theme } from "./styles/theme";

function App() {
    const [open, setOpen] = useState(true)
    return (
        <Web3Provider
            theme={theme}
            supportedChainIds={[1, 4]}
            connectors={defaultConnectors}>
          <ConnectWeb3Modal open={open} setOpen={setOpen} />
        </Web3Provider>
    );
}

export default App;
