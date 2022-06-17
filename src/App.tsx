import React from 'react';
import { Web3Provider, ConnectWallet, AddressView } from "./package";
import { defaultConnectors } from "./package/connectors";
import { defaultTheme } from "./package/styles/theme";

import './App.css';

function App() {
    return (
        <Web3Provider
					theme={defaultTheme}
					supportedChainIds={[1, 4]}
					connectors={defaultConnectors}
        >
          {/* autoOpen will pop the modal on page load */}
          <ConnectWallet autoOpen={true} />

          <div className="App">
            <header className="App-header">
              {/* AddressView should be used inside Web3Provider so that it picks up address */}
              <AddressView isShort={true} />
            </header>
          </div>
        </Web3Provider>
    );
}

export default App;
