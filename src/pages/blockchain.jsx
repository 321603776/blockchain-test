import { Box, CircularProgress } from '@mui/material';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import BlockchainDetail from '../components/blockchain-detail';
import BlockchainInfo from '../components/blockchain-info';
import BlockchainTransactions from '../components/blockchain-transactions';
import CInput from '../components/c-input';
import { Provider as BlockchainProvider } from '../context/blockchain-context';

function Blockchain() {
  const { blockchain } = useParams();
  const { data, isLoading } = useSWR(blockchain, async (key) => {
    return (await fetch(`https://blockchain.info/rawblock/${key}`)).json();
  });

  const value = useMemo(() => {
    return { data };
  }, [data]);

  if (isLoading) {
    return (
      <CircularProgress sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
    );
  }

  return (
    <BlockchainProvider value={value}>
      <Box
        p={2}
        borderBottom="1px solid #e0e0e0"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="sticky"
        bgcolor="#fff"
        zIndex={9}
        top={0}>
        <CInput />
      </Box>
      <Box>
        <Box display={{ xs: 'block', lg: 'flex' }} borderBottom="1px solid #e0e0e0">
          <Box flex="0 0 50%">
            <Box p={2}>
              <BlockchainInfo />
            </Box>
            <Box p={2} borderTop="1px solid #e0e0e0">
              <BlockchainDetail />
            </Box>
          </Box>
          <Box
            flex="0 0 50%"
            borderLeft={{ xs: 'none', lg: '1px solid #e0e0e0' }}
            borderTop={{ xs: '1px solid #e0e0e0', lg: 'none' }}>
            <BlockchainTransactions />
          </Box>
        </Box>
      </Box>
    </BlockchainProvider>
  );
}

export default Blockchain;
