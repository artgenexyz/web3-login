import React from 'react';
import { Web3Provider, ProfileView, AddressView } from "./package";
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

          <div className="App">
            <header className="App-header">

              {/* autoOpen will pop the modal on page load */}
              <ProfileView autoOpen={false} />

            </header>

            <div>

              {/* AddressView should be used inside Web3Provider so that it picks up address */}
              Connected address: <AddressView isShort={false} />

            </div>
          </div>
        </Web3Provider>
    );
}

export default App;
