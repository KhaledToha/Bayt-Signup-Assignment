import { useFormik } from 'formik';
import InputBox from '../InputBox';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import individualSchema from '../../helper/individualSchema';

const IndividualSignup = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      date: null,
      gender: '',
      address: '',
    },
    validationSchema: individualSchema,
    onSubmit: (values) => console.log(values),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        height="85vh"
      >
        <InputBox
          label="First Name"
          success={formik.touched.firstName && !formik.errors.firstName}
        >
          <TextField
            fullWidth
            id="firstName"
            name="firstName"
            label="First Name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
            InputProps={{
              style: { height: '36px', fontSize: '14px', borderColor: 'green' },
            }}
            InputLabelProps={{ style: { fontSize: '12px' } }}
          />
        </InputBox>
        <InputBox
          label="Last Name"
          success={formik.touched.lastName && !formik.errors.lastName}
        >
          <TextField
            fullWidth
            id="lastName"
            name="lastName"
            label="Last Name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
            InputProps={{ style: { height: '36px', fontSize: '14px' } }}
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
            InputProps={{ style: { height: '36px', fontSize: '14px' } }}
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
            InputProps={{ style: { height: '36px', fontSize: '14px' } }}
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
            InputProps={{ style: { height: '36px', fontSize: '14px' } }}
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
            InputProps={{ style: { height: '36px', fontSize: '14px' } }}
            InputLabelProps={{ style: { fontSize: '12px' } }}
          />
        </InputBox>

        <InputBox
          label="Date of Birth"
          success={formik.touched.date && !formik.errors.date}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker
                label="Birth Date"
                format="YYYY-MM-DD"
                formatDensity="spacious"
                sx={{ width: '100%' }}
                InputProps={{ style: { height: '36px', fontSize: '14px' } }}
                InputLabelProps={{ style: { fontSize: '12px' } }}
                value={formik.values.date}
                onChange={(newVal) => {
                  formik.setFieldValue(
                    'date',
                    dayjs(newVal).format('YYYY-MM-DD')
                  );
                  formik.setFieldTouched('date', true);
                }}
                error={formik.touched.date && Boolean(formik.errors.date)}
                helperText={formik.touched.date && formik.errors.date}
                slotProps={{
                  textField: {
                    id: 'date',
                    name: 'date',
                    helperText: formik.touched.date && formik.errors.date,
                    error: formik.touched.date && Boolean(formik.errors.date),
                    onBlur: formik.handleBlur,
                    InputProps: { style: { height: '54px', fontSize: '14px' } },
                    InputLabelProps: { style: { fontSize: '12px' } },
                  },
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
        </InputBox>

        <InputBox
          label="Gender"
          success={formik.touched.gender && !formik.errors.firstName}
        >
          <FormControl
            fullWidth
            error={formik.touched.gender && Boolean(formik.errors.gender)}
          >
            <InputLabel id="gender-label" sx={{ fontSize: '12px' }}>
              Gender
            </InputLabel>
            <Select
              labelId="gender-label"
              label="Gender"
              fullWidth
              id="gender"
              name="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.gender && Boolean(formik.errors.gender)}
              sx={{ height: '36px', fontSize: '12px' }}
            >
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="male">Male</MenuItem>
            </Select>
            {formik.touched.gender && (
              <FormHelperText>
                <Typography fontSize={11} color="error">
                  {formik.errors.gender}
                </Typography>
              </FormHelperText>
            )}
          </FormControl>
        </InputBox>

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

        

        <Button
        disabled={!formik.isValid}
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          sx={{ marginTop: 2 }}
        >
          Sign up
        </Button>
      </Box>
    </form>
  );
};

export default IndividualSignup;
