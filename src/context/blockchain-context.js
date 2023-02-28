import { createContext, useContext } from 'react';

const BlockchainContext = createContext();

export function useBlockchainContext() {
  const context = useContext(BlockchainContext);
  return context;
}

export const { Provider } = BlockchainContext;
