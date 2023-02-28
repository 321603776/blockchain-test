import { Grid, Stack, Typography } from '@mui/material';
import { useBlockchainContext } from '../context/blockchain-context';
import { splicHashString, toThousands } from '../util';
import BlockchainAttr from './blockchain-attr';

function BlockchainDetail() {
  const { data } = useBlockchainContext();

  return (
    <Stack spacing={1.2}>
      <Typography fontWeight={700}>Details</Typography>
      <Grid container spacing="5px">
        <Grid item xs={12} sm={6}>
          <BlockchainAttr label="Hash" value={splicHashString(data?.hash)} isCopy />
          <BlockchainAttr label="Capacity" value="141.36%" />
          <BlockchainAttr label="Distance" value="2y 2m 7d 19h 8m 47s" />
          <BlockchainAttr label="BTC" value="306.5168" />
          <BlockchainAttr label="Value" value="$6,988,858" />
          <BlockchainAttr label="Value Today" value="$7,178,353" />
          <BlockchainAttr label="Average Value" value="0.3360929490 BTC" />
          <BlockchainAttr label="Median Value" value="0.01807008 BTC" />
          <BlockchainAttr label="Input Value" value="306.68 BTC" />
          <BlockchainAttr label="Output Value" value="312.93 BTC" />
          <BlockchainAttr label="Transactions" value="912" />
          <BlockchainAttr label="Witness Tx’s" value="126" />
          <BlockchainAttr label="Inputs" value="8,540" />
          <BlockchainAttr label="Outputs" value="1,740" />
          <BlockchainAttr label="Fees" value="0.16583560 BTC" />
          <BlockchainAttr label="Fees Kb" value="0.0001119 BTC" />
          <BlockchainAttr label="Fees kWU" value="0.0000415 BTC" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <BlockchainAttr label="Depth" value="116,128" />
          <BlockchainAttr label="Size" value={toThousands(data?.size)} />
          <BlockchainAttr label="Version" value="0x20000000" />
          <BlockchainAttr label="Merkle Root" value="b8-ed" isCopy />
          <BlockchainAttr label="Difficulty" value="18,670,168,558,399.59" />
          <BlockchainAttr label="Nonce" value="1,285,091,394" />
          <BlockchainAttr label="Bits" value="386,863,986" />
          <BlockchainAttr label="Weight" value="3,999,475 WU" />
          <BlockchainAttr label="Minted" value="6.25 BTC" />
          <BlockchainAttr label="Reward" value="6.41583560 BTC" />
          <BlockchainAttr label="Mined on" value="2020年12月22日 15:09:42" />
          <BlockchainAttr label="Height" value="662,463" />
          <BlockchainAttr label="Confirmations" value="116,190" />
          <BlockchainAttr label="Fee Range" value="0-224 sat/vByte" />
          <BlockchainAttr label="Average Fee" value="0.00018184" />
          <BlockchainAttr label="Median Fee" value="0.00002497" />
          <BlockchainAttr label="Miner" value="Poolin" />
        </Grid>
      </Grid>
    </Stack>
  );
}

export default BlockchainDetail;
