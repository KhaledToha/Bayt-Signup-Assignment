import * as yup from 'yup'

const businessSchema = yup.object({
    name: yup
      .string('Enter your first name')
      .min(3, 'First name should be of minimum 3 characters')
      .max(15, 'First name should be less that 15 characters')
      .required('First name is required'),
  
  
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

      country: yup
      .string('Choose a country name')
      .required('Country is required'),

      address: yup
      .string('Enter Your Address')
      .required('Address is required')
})

export default businessSchema