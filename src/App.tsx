import React, { useState } from 'react';
import './App.css';
import { useWeb3, ConnectWeb3Modal, Web3Provider } from "./package";
import { defaultConnectors } from "./package/connectors";
import { defaultTheme } from "./package/styles/theme";

const AddressView = () => {
  const { address } = useWeb3();

  return <div>{address ? `Connected to ${address}` : 'Not connected'}</div>;
}
function App() {
    const [open, setOpen] = useState(true);

    return (
        <Web3Provider
					theme={defaultTheme}
					supportedChainIds={[1, 4]}
					connectors={defaultConnectors}
        >
          <ConnectWeb3Modal open={open} setOpen={setOpen} />

          <div className="App">
            <header className="App-header">
              <AddressView />
            </header>
          </div>
        </Web3Provider>
    );
}

export default App;
