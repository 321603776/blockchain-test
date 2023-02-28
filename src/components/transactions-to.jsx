/* eslint-disable */
import { Stack, Box, Link } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function TransactionsTo({ out }) {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Stack direction="row" spacing="20px" alignItems="flex-start" overflow="hidden">
        <Box fontWeight={700}>{out.n + 1}</Box>
        <Box overflow="hidden">
          <Stack direction="row" spacing="7px" alignItems="flex-start">
            <Link
              href="#1"
              color="rgb(237, 155, 96)"
              sx={{
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                cursor: 'pointer',
                maxWidth: 200,
                flexShrink: 0,
              }}>
              {out.addr}
            </Link>
            <ContentCopyIcon fontSize="small" sx={{ transform: 'scale(0.85)', color: '#999', cursor: 'pointer' }} />
            <img
              style={{ cursor: 'pointer' }}
              src="https://www.blockchain.com/explorer/_next/static/media/Scripts.50a5f452.svg"
              alt=""
            />
          </Stack>
          <Box>
            0.01162912 BTC • <span style={{ color: '#999' }}>$265.15</span>
          </Box>
        </Box>
      </Stack>

      <Box bgcolor="#000" width={15} height={15} borderRadius="50%" sx={{ cursor: 'pointer', mt: '1px' }}>
        <ArrowBackIcon sx={{ color: '#fff', width: 15, height: 15, transform: 'rotate(180deg)' }} />
      </Box>
    </Stack>
  );
}

export default TransactionsTo;
