/* eslint-disable */
import {
  Stack,
  Box,
  IconButton,
  Button,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Avatar,
  Link,
  Collapse,
  Pagination,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useMemo, useState } from 'react';
import TransactionsFrom from './transactions-from';
import TransactionsTo from './transactions-to';
import { useBlockchainContext } from '../context/blockchain-context';
import { splicHashString } from '../util';

// eslint-disable-next-line react/prop-types
function Row({ row }) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const issm = useMediaQuery(theme.breakpoints.down('sm'));
  const handleRowClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <TableRow component={Box} onClick={handleRowClick}>
        <TableCell>
          {/* eslint-disable-next-line react/prop-types */}
          {row._index === 0 ? (
            <Avatar
              sx={{
                bgcolor: '#fff',
                color: '#000',
                fontSize: 14,
                border: '1px solid rgb(238, 238, 238)',
                width: 42,
                height: 42,
              }}>
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  bgcolor: '#000',
                  maskImage: 'url(/coinbaseNew.f76168e6.svg)',
                  maskPosition: 'center center',
                  maskSize: 'contain',
                }}
              />
            </Avatar>
          ) : (
            <Avatar
              sx={{
                bgcolor: '#fff',
                color: '#000',
                fontSize: 14,
                border: '1px solid rgb(238, 238, 238)',
                width: 42,
                height: 42,
              }}>
              TX
            </Avatar>
          )}
        </TableCell>
        <TableCell colSpan={issm ? 3 : 1}>
          <Stack spacing={1}>
            <Box>
              <Box display="flex" alignItems="center">
                <span style={{ marginRight: '5px' }}>{row._index}</span>
                <span style={{ marginRight: '4px', color: '#999' }}>ID:</span>
                <Link href="#1" color="rgb(237, 155, 96)" sx={{ ml: '5px' }}>
                  {splicHashString(row.hash)}
                </Link>
                <ContentCopyIcon fontSize="small" sx={{ transform: 'scale(0.65)', color: '#999' }} />
              </Box>
              <Box color="#999">12/22/2020, 15:09:42</Box>
            </Box>

            {issm && (
              <>
                <Box display="flex" alignItems="center">
                  <span>From</span>
                  <Link href="#1" color="rgb(237, 155, 96)" sx={{ ml: '5px' }}>
                    {splicHashString(row?.out?.[0]?.addr)}
                  </Link>
                  <ContentCopyIcon fontSize="small" sx={{ transform: 'scale(0.65)', color: '#999' }} />
                </Box>
                <Box display="flex" alignItems="center">
                  <span>To</span>
                  <span style={{ color: '#999', marginLeft: '5px' }}>{row?.out?.length - 1} Outputs</span>
                </Box>

                <Box display="flex" flexDirection="column">
                  <Box display="flex" alignItems="center">
                    <span>0.24197985 BTC</span>
                    <span style={{ margin: '0 4px' }}>•</span>
                    <span style={{ color: '#999' }}>$5,517.36</span>
                  </Box>
                  <Stack direction="row" spacing="4px" color="#999">
                    <span style={{ color: 'rgb(244, 91, 105)' }}>Fee</span>
                    <span style={{ color: '#000' }}>{(row.fee / 1000).toFixed(1)}K Sats</span>
                    <span>•</span>
                    <span>$6.31</span>
                  </Stack>
                </Box>
              </>
            )}
          </Stack>
        </TableCell>
        {!issm && (
          <>
            <TableCell>
              <Box display="flex" alignItems="center">
                <span>From</span>
                <Link href="#1" color="rgb(237, 155, 96)" sx={{ ml: '5px' }}>
                  {splicHashString(row?.out?.[0]?.addr)}
                </Link>
                <ContentCopyIcon fontSize="small" sx={{ transform: 'scale(0.65)', color: '#999' }} />
              </Box>
              <Box display="flex" alignItems="center">
                <span>To</span>
                <span style={{ color: '#999', marginLeft: '5px' }}>{row?.out?.length - 1} Outputs</span>
              </Box>
            </TableCell>
            <TableCell>
              <Box display="flex" flexDirection="column" alignItems="flex-end">
                <Box display="flex" alignItems="center">
                  <span>0.24197985 BTC</span>
                  <span style={{ margin: '0 4px' }}>•</span>
                  <span style={{ color: '#999' }}>$5,517.36</span>
                </Box>
                <Stack direction="row" spacing="4px" color="#999">
                  <span style={{ color: 'rgb(244, 91, 105)' }}>Fee</span>
                  <span style={{ color: '#000' }}>{(row.fee / 1000).toFixed(1)}K Sats</span>
                  <span>•</span>
                  <span>$6.31</span>
                </Stack>
              </Box>
            </TableCell>
          </>
        )}

        <TableCell width={35}>
          <KeyboardArrowUpIcon
            fontSize="large"
            sx={{ transform: open ? 'rotate(0deg)' : 'rotate(180deg)', transition: 'all ease 300ms' }}
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={5} style={{ paddingBottom: 0, paddingTop: 0, padding: 0 }}>
          <Collapse in={open}>
            <Box display={{ xs: 'block', sm: 'flex' }}>
              <Box flex="0 0 50%">
                <Box fontWeight={700} fontSize={16} m={1.4}>
                  From
                </Box>
                <Stack spacing={1.8} px={1.4} pb={1.4}>
                  {row.inputs.map((item, index) => (
                    <TransactionsFrom key={index} input={item} />
                  ))}
                </Stack>
              </Box>
              <Box
                flex="0 0 50%"
                borderLeft={{ xs: 'none', sm: '1px solid #e0e0e0' }}
                sx={{ boxSizing: 'border-box' }}
                borderTop={{ sm: 'none', xs: '1px solid #e0e0e0' }}>
                <Box fontWeight={700} fontSize={16} m={1.4}>
                  To
                </Box>
                <Stack spacing={1.8} px={1.4} pb={1.4}>
                  {row.out.map((item, index) => (
                    <TransactionsTo key={index} out={item} />
                  ))}
                </Stack>
              </Box>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

function BlockchainTransactions() {
  const { data } = useBlockchainContext();
  const [page, setPage] = useState(1);

  const arr = useMemo(() => {
    if (data?.tx?.length) {
      const index = page - 1;
      return data?.tx.splice(index * 10, 10).map((item, _index) => ({
        ...item,
        _index: _index + index * 10,
      }));
    }
    return [];
  }, [data?.tx, page]);

  const handleChange = (_, value) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  return (
    <Stack spacing="13px">
      <Box fontWeight={700} mx={2} mt={2}>
        Transactions
      </Box>
      <Stack spacing="15px" className="filter">
        <Stack spacing="10px" mx={2} direction="row" flexWrap="wrap" sx={{ '.filter & > *': { mt: 0.5 }, mt: -0.5 }}>
          <IconButton sx={{ bgcolor: '#e0e0e0' }}>
            <CodeIcon sx={{ transform: 'rotate(90deg)' }} />
          </IconButton>
          <Button
            variant="contained"
            color="inherit"
            sx={{ borderRadius: 30, boxShadow: 'none', '&:hover': { boxShadow: 'none' } }}>
            Last
          </Button>
          <Button
            variant="contained"
            color="inherit"
            sx={{
              borderRadius: 30,
              boxShadow: 'none',
              '&:hover': { boxShadow: 'none' },
              bgcolor: '#000',
              color: '#fff',
            }}>
            First
          </Button>
          <Button
            variant="contained"
            color="inherit"
            startIcon={<ArrowOutwardIcon />}
            sx={{ borderRadius: 30, boxShadow: 'none', '&:hover': { boxShadow: 'none' } }}>
            <Box>Value</Box>
          </Button>
          <Button
            variant="contained"
            color="inherit"
            startIcon={<ArrowOutwardIcon sx={{ transform: 'rotate(90deg)' }} />}
            sx={{ borderRadius: 30, boxShadow: 'none', '&:hover': { boxShadow: 'none' } }}>
            Value
          </Button>
          <Button
            variant="contained"
            color="inherit"
            startIcon={<ArrowOutwardIcon />}
            sx={{ borderRadius: 30, boxShadow: 'none', '&:hover': { boxShadow: 'none' } }}>
            Fee
          </Button>
          <Button
            variant="contained"
            color="inherit"
            startIcon={<ArrowOutwardIcon sx={{ transform: 'rotate(90deg)' }} />}
            sx={{ borderRadius: 30, boxShadow: 'none', '&:hover': { boxShadow: 'none' } }}>
            Fee
          </Button>
        </Stack>
        <TableContainer>
          <Table>
            <TableBody>
              {arr.map((item) => (
                <Row row={item} key={item.hash} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box display="flex" justifyContent="center">
          <Pagination count={Math.ceil((data?.tx?.length || 0) / 10)} onChange={handleChange} />
        </Box>
      </Stack>
    </Stack>
  );
}

export default BlockchainTransactions;
