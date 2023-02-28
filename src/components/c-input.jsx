/* eslint-disable */
import { Card, IconButton, InputBase, Stack } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function CInput() {
  const navigate = useNavigate();
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleToBlockchainDetailClick = () => {
    if (value) {
      navigate(`/blockchain/${value}`);
    } else {
      alert('please enter Blockchain hash');
    }
  };
  return (
    <Card sx={{ width: '500px', p: 2, py: 1 }}>
      <Stack direction="row" spacing={1}>
        <InputBase value={value} placeholder="please enter Blockchain hash" fullWidth onChange={handleChange} />
        <IconButton onClick={handleToBlockchainDetailClick}>
          <EastIcon />
        </IconButton>
      </Stack>
    </Card>
  );
}

export default CInput;
