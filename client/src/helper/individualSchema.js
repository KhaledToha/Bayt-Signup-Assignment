import * as yup from 'yup'
import dayjs from 'dayjs';


const individualSchema = yup.object({
    firstName: yup
      .string('Enter your first name')
      .min(3, 'First name should be of minimum 3 characters')
      .max(15, 'First name should be less that 15 characters')
      .required('First name is required'),
  
    lastName: yup
      .string('Enter your Last name')
      .min(3, 'Last name should be of minimum 3 characters')
      .max(20, 'Last name should be less that 20 characters')
      .required('Last name is required'),
  
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
  
    password: yup
      .string('Enter a password')
      .min(8, 'Password must be at least 8 characters long')
      .matches(/[A-Z]/, 'Password must contain at least 1 uppercase letter')
      .matches(/[0-9]/, 'Password must contain at least 1 number')
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        'Password must contain at least 1 special character'
      )
      .required('Password is required'),
  
    confirmPassword: yup
      .string('Confirm your password')
      .oneOf([yup.ref('password'), null], 'must match the Password')
      .required('Confirm Password is required'),
  
    phone: yup
      .string('Enter a phone number')
      .matches(/^\+[1-9]\d{1,14}$/, 'Phone number is not valid')
      .required('Phone number is required'),
  
    date: yup
      .date('Enter a valid Date of Birth')
      .required('Birth Date is required')
      .test(
        'is-over-18',
        'You must be over 18 years old',
        (value) => dayjs(new Date()).diff(dayjs(value), 'years') >= 18
      ),
  
    gender: yup
      .string('Pick your gender')
      .required('You must pick a gender')
      .oneOf(['female', 'male']),
  
      address: yup
      .string('Enter Your Address')
      .required('Address is required')
  });

  export default individualSchema