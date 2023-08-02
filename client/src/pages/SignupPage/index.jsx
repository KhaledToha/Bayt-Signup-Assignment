import {
  Box,
  FormControl,
  Grid,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import { useState } from 'react';
import { BusinessSignup, IndividualSignup } from '../../components';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const SignupPage = () => {
  const [type, setType] = useState();

  const handleTypeChange = (event) => {
    setType(event.target.value)
  }
console.log(type);
  return (
    <Grid container spacing={20}>
      <Grid item md={6} sm={12}>
        <Box component="img" src="/signup.jpg" width="100%" />
      </Grid>
      <Grid item md={6} sm={12}>
        <Box height="90vh"width="60%" marginX="auto" marginY={3}>
          <Typography fontSize={24} fontWeight="bold" color="black" marginBottom={3}>
            Sign up..
          </Typography>

          <Box width="100%">
            <FormControl>
             
              <RadioGroup
                row
                aria-labelledby="type"
                name="type"
                sx={{ display: 'flex', justifyContent: 'space-between'}}
              >
                <FormControlLabel onChange={handleTypeChange} value="individual" control={<Radio size='small'/>} label="Individual" />
                <FormControlLabel onChange={handleTypeChange} value="business" control={<Radio size='small'/>} label="Business" />
              </RadioGroup>
            </FormControl>
          </Box>
          {type === 'individual' ? <IndividualSignup/> : type === 'business' ? <BusinessSignup/> : (
            <Box bgcolor="whitesmoke" borderRadius={2} boxShadow={3} padding={3} marginTop={4} textAlign="center">
              <ArrowUpwardIcon color='info'/>
              <Typography textAlign="justify" fontSize={14} color="blue">
                In order to register you need to choose whether you are an individual customer or a business customer
              </Typography>
            </Box>
          )}
        </Box>
      </Grid>
      
    </Grid>
  );
};

export default SignupPage;
