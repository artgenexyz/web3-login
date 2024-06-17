import { useWeb3, useSwitchNetwork } from "./hooks";

import { ConnectWeb3Modal } from "./components/ConnectWeb3Modal";
import { IconButton } from "./components/IconButton";
import { Web3Provider } from "./components/Web3Provider";
import ProfileView from "./components/ProfileView";
import AddressView from "./components/AddressView";

export { 
  ConnectWeb3Modal,
  ProfileView,
  AddressView,
  Web3Provider, 
  useWeb3, 
  useSwitchNetwork,
  IconButton
}
