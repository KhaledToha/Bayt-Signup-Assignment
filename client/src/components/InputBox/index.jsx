/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const InputBox = ({ label, children, success }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
    >
      
      <Typography fontSize={12} flex={2}>{label}</Typography>
      <Box marginLeft={2} flex={6}>{children}</Box>
      <CheckCircleOutlineIcon color="success" sx={{ marginLeft: 1, display: success ? 'block' : 'none' }}/>
    </Box>
  );
};

export default InputBox;
