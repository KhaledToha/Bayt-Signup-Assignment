import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import businessSchema from '../../helper/businessSchema';
import { Autocomplete, Box, Button, CircularProgress, TextField, Typography } from '@mui/material';
import InputBox from '../InputBox';
import countries from '../../helper/countries';
import axios from 'axios';
import { ErrorAlert } from '../ErrorAlert';

const BusinessSignup = () => {
  const [openError, setOpenError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigator = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      country: '',
      address: '',
    },
    validationSchema: businessSchema,
    onSubmit: (values) => {
      setLoading(true);
      axios
        .post('/api/signup/business', values)
        .then(() => {
          setLoading(false);
          navigator('/welcome');
        })
        .catch((err) => {
          setLoading(false);
          setOpenError(true);
          setErrorMessage(err.response.data.message);
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        height="60vh"
      >
        <ErrorAlert
          open={openError}
          message={errorMessage}
          setOpen={setOpenError}
        />
        <InputBox
          label="Name"
          success={formik.touched.name && !formik.errors.name}
        >
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            InputProps={{
              style: { height: '36px', fontSize: '14px', borderColor: 'green' },
            }}
            InputLabelProps={{ style: { fontSize: '12px' } }}
          />
        </InputBox>

        <InputBox
          label="Email"
          success={formik.touched.email && !formik.errors.email}
        >
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            InputProps={{
              style: { height: '36px', fontSize: '14px', borderColor: 'green' },
            }}
            InputLabelProps={{ style: { fontSize: '12px' } }}
          />
        </InputBox>

        <InputBox
          label="Phone"
          success={formik.touched.phone && !formik.errors.phone}
        >
          <TextField
            fullWidth
            id="phone"
            name="phone"
            label="Phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
            InputProps={{
              style: { height: '36px', fontSize: '14px', borderColor: 'green' },
            }}
            InputLabelProps={{ style: { fontSize: '12px' } }}
          />
        </InputBox>

        <InputBox
          label="Password"
          success={formik.touched.password && !formik.errors.password}
        >
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            InputProps={{
              style: { height: '36px', fontSize: '14px', borderColor: 'green' },
            }}
            InputLabelProps={{ style: { fontSize: '12px' } }}
          />
        </InputBox>

        <InputBox
          label="Confirm Password"
          success={
            formik.touched.confirmPassword && !formik.errors.confirmPassword
          }
        >
          <TextField
            fullWidth
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            InputProps={{
              style: { height: '36px', fontSize: '14px', borderColor: 'green' },
            }}
            InputLabelProps={{ style: { fontSize: '12px' } }}
          />
        </InputBox>

        <InputBox
          label="Country"
          success={formik.touched.country && !formik.errors.country}
        >
          <Autocomplete
            id="country"
            fullWidth
            options={countries}
            onChange={(e, value) =>
              formik.setFieldValue('country', value.label)
            }
            autoHighlight
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                <img
                  loading="lazy"
                  width="20"
                  src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                  srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                  alt=""
                />
                {option.label} ({option.code}) +{option.phone}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                id="country"
                name="country"
                value={formik.values.country}
                onBlur={formik.handleBlur}
                error={formik.touched.country && Boolean(formik.errors.country)}
                helperText={formik.touched.country && formik.errors.country}
                label="Choose a country"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'new-password',
                  style: {
                    height: '36px',
                    fontSize: '14px',
                    borderColor: 'green',
                  },
                }}
                InputLabelProps={{ style: { fontSize: '12px' } }}
              />
            )}
          />
        </InputBox>

        {formik.touched.country && !formik.errors.country && (
          <InputBox
            label="Address"
            success={formik.touched.address && !formik.errors.address}
          >
            <TextField
              fullWidth
              id="address"
              name="address"
              label="Address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
              InputProps={{ style: { height: '36px', fontSize: '14px' } }}
              InputLabelProps={{ style: { fontSize: '12px' } }}
            />
          </InputBox>
        )}

        <Button
          disabled={!formik.isValid}
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          sx={{ marginTop: 2 }}
        >
          {loading ? <CircularProgress/> : <Typography>Sign Up</Typography>}
        </Button>
      </Box>
    </form>
  );
};

export default BusinessSignup;
