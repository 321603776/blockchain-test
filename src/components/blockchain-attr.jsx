import { Box } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

// eslint-disable-next-line react/prop-types
function BlockchainAttr({ label = '', value = '', isCopy = false }) {
  return (
    <Box display="flex" fontSize={14} className="attr" sx={{ '& + .attr': { mt: '5px' } }}>
      <Box flex="0 0 160px">{label}</Box>
      <Box flex={1} color="#999" display="flex" alignItems="center">
        <Box>{value}</Box>
        {isCopy && <ContentCopyIcon fontSize="small" sx={{ transform: 'scale(0.65)' }} />}
      </Box>
    </Box>
  );
}

export default BlockchainAttr;
