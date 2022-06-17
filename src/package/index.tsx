import { useWeb3, useSwitchNetwork } from "./hooks";

import { ConnectWeb3Modal } from "./components/ConnectWeb3Modal";
import { IconButton } from "./components/IconButton";
import { Web3Provider } from "./components/Web3Provider";
import ConnectWallet from "./components/ConnectWallet";
import AddressView from "./components/AddressView";

export { 
  ConnectWeb3Modal,
  ConnectWallet,
  AddressView,
  Web3Provider, 
  useWeb3, 
  useSwitchNetwork,
  IconButton
}
