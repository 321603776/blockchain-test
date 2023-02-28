import { Box, Avatar, Typography, Link, Chip, Stack } from '@mui/material';
import { useBlockchainContext } from '../context/blockchain-context';
import { toThousands } from '../util';

const AvatarBg =
  'linear-gradient(21deg, rgba(255, 188, 136, 0.8), rgba(255, 188, 136, 0.2) 10.71%), linear-gradient(106.8deg, rgba(255, 152, 150, 0.8), rgba(255, 255, 255, 0) 70.71%), linear-gradient(142.4deg, rgba(255, 99, 122, 0.8), rgba(255, 188, 136, 0.2) 70.71%), linear-gradient(37deg, rgba(255, 99, 122, 0.8), rgba(255, 156, 130, 0.2) 70.71%)';

function BlockchainInfo() {
  const { data } = useBlockchainContext();
  return (
    <Box>
      <Stack spacing={1.9}>
        <Box width={100} height={100} sx={{ background: AvatarBg }} borderRadius="10px" position="relative">
          <Avatar
            src="https://www.blockchain.com/explorer/_next/static/media/Poolin%20Logo.82bec574.svg"
            sx={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translate(50%, -50%)',
              width: 70,
              height: 70,
            }}
          />
        </Box>
        <Stack spacing={1.2}>
          <Box>
            <Typography fontSize={28}>Bitcoin Block {toThousands(data?.block_index)}</Typography>
            <Typography fontSize={12} color="#999">
              Mined on December 22, 2020 03:09:42 •{' '}
              <Link color="#ED9B60" href="#1">
                All Blocks
              </Link>
            </Typography>
          </Box>
          <Box>
            <Chip label="ViaBTC" sx={{ color: '#ED9B60', bgcolor: 'rgba(237, 155, 96, 0.15)' }} />
          </Box>
          <Box fontSize={13} display="flex">
            <Typography fontWeight={700} fontSize={14} mr={1}>
              Coinbase Message
            </Typography>
            • : a_/poolin.com/taproot/bip9/o 0(d)3wBx S A Xa-W
          </Box>
          <Box fontSize={14} color="#999">
            A total of 306.52 BTC ($6,988,858) were sent in the block with the average transaction being 0.3361 BTC
            ($7,663.38). Poolin earned a total reward of 6.25 BTC $142,505. The reward consisted of a base reward of
            6.25 BTC $142,505 with an additional 0.1658 BTC ($3,780.39) reward paid as fees of the 912 transactions
            which were included in the block.
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}
export default BlockchainInfo;
