import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Grid,
  FormHelperText,
  Button,
  Typography,
  Paper,
  ButtonGroup,
} from '@mui/material';
import registerUser from '../services/registerUser';
import backgroundImage from '../assets/images/RegisterBG.png';
import PersonalInfo from '../components/PersonalInfo';
import CompanyInfo from '../components/CompanyInfo';
import PaySlipInfo from '../components/PaySlipInfo';
import ReviewInfo from '../components/ReviewInfo';

// Define the steps for the registration process
const steps = ['Personal Details', 'Company Details', 'Pay slip Details'];

const Form = () => {
  // State to track the active step and registration status
  const [activeStep, setActiveStep] = useState(0);
  const [registrationStatus, setRegistrationStatus] = useState(null);

  // Function to check password complexity
  const passwordComplexity = (password) => {
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#\$%\^&\*]/.test(password);

    const meetsCriteriaCount = [
      hasLowercase,
      hasUppercase,
      hasDigit,
      hasSpecialChar,
    ].filter(Boolean).length;

    return password.length >= 8 && meetsCriteriaCount >= 3;
  };

  // Initialize formik with initial values and validation schema
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      mobileNumber: '',
      password: '',
      confirmPassword: '',
      companyName: '',
      companyEmail: '',
      contactNumber: '',
      field: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      country: '',
      currency: '',
      payday: '',
      agreement: false,
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().min(3).max(20).required('User name  is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      mobileNumber: Yup.string()
        .matches(/^(?:\+\d{1,3})?[0-9-]+$/, 'Invalid mobile number format')
        .required('Mobile Number is required'),

      password: Yup.string()
        .required('Password is required')
        .test(
          'password-complexity',
          'Password must contain at least 8 characters and meet complexity requirements',
          (value) => passwordComplexity(value)
        ),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords do not match')
        .required('Confirm Password is required'),
      companyName: Yup.string().min(3).max(100).required(),
      companyEmail: Yup.string().email('Invalid company email').required(),
      contactNumber: Yup.string()
        .matches(/^[0-9]{10,15}$/, 'Invalid contact number format')
        .required(),
      field: Yup.string().required('Field is required'),
      addressLine1: Yup.string().min(5).max(100).required(),
      addressLine2: Yup.string().max(100),
      city: Yup.string().min(2).max(50),
      country: Yup.string().min(2).max(50),
      currency: Yup.string().required('Currency is required'),
      payday: Yup.number()
        .integer('Payday must be an integer')
        .min(1, 'Payday must be at least 1')
        .max(31, 'Payday cannot be greater than 31')
        .required('Payday is required'),
      agreement: Yup.boolean().oneOf([true]),
    }),

    // Handle form submission based on the active step
    onSubmit: (values) => {
      if (activeStep === steps.length - 1) {
        handleFormSubmit(values);
      } else {
        setActiveStep((prevStep) => prevStep + 1);
      }
    },
  });

  // Function to handle form submission
  const handleFormSubmit = async (values) => {
    try {
      const response = await registerUser(values);

      if (response.status === 201) {
        setRegistrationStatus('success');
      } else if (response.status === 400) {
        setRegistrationStatus('failure');
      } else {
      }
    } catch (error) {
      setRegistrationStatus('failure');
    }
  };
  // Function to get the fields for the current step
  const getStepFields = (step) => {
    switch (step) {
      case 0:
        return [
          'username',
          'email',
          'mobileNumber',
          'password',
          'confirmPassword',
          'agreement',
        ];
      case 1:
        return ['companyName', 'field', 'currency'];
      case 2:
        return [
          'addressLine1',
          'addressLine2',
          'city',
          'country',
          'companyEmail',
          'contactNumber',
          'payday',
        ];
      default:
        return [];
    }
  };
  // Function to handle moving to the next step
  const handleNext = () => {
    console.log('handleNext called');
    formik.validateForm().then((errors) => {
      const stepFields = getStepFields(activeStep);
      const stepErrors = stepFields.some((field) => errors[field]);

      if (!stepErrors) {
        stepFields.forEach((field) => {
          formik.setFieldError(field, '');
        });
        setActiveStep((prevStep) => prevStep + 1);
      } else {
      }
    });
  };
  // Function to handle moving back to the previous step
  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  // Function to render the form content based on the current step and registration status
  const formContent = (step) => {
    if (registrationStatus === 'success') {
      return (
        <Typography variant='h6' color='success'>
          Registration Successful!
        </Typography>
      );
    } else if (registrationStatus === 'failure') {
      return (
        <Typography variant='h6' color='error'>
          Registration Failed. Please try again.
        </Typography>
      );
    } else {
      // Render different form components based on the current step
      switch (step) {
        case 0:
          return <PersonalInfo formik={formik} />;
        case 1:
          return <CompanyInfo formik={formik} />;
        case 2:
          return <PaySlipInfo formik={formik} />;

        default:
          return null;
      }
    }
  };

  return (
    <Paper
      variant='outlined'
      elevation={3}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          maxWidth: '480px',

          padding: 3,
          backgroundColor: 'rgba(255, 255, 255, 2)',
          borderRadius: '12px',
        }}
      >
        <Box sx={{ my: 4 }}>
          <Typography variant='h5' align='center' sx={{ fontWeight: 'bold' }}>
            Registration
          </Typography>
          <Typography variant='subtitle2' align='center' sx={{ mt: 2 }}>
            Add your details to get your company registerd
          </Typography>
        </Box>
        <Stepper
          activeStep={activeStep}
          orientation='horizontal'
          align='center'
          sx={{ py: 3 }}
        >
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Grid container align='center'>
          <Grid item xs={12} sx={{ padding: '20px' }}>
            {registrationStatus === 'success' ? (
              <Typography variant='h6' color='success'>
                Registration Successful!
              </Typography>
            ) : registrationStatus === 'failure' ? (
              <Typography variant='h6' color='error'>
                Registration Failed. Please try again.
              </Typography>
            ) : (
              formContent(activeStep)
            )}
            {registrationStatus === null && (
              <Grid item xs={12}>
                <ButtonGroup fullWidth>
                  {activeStep === steps.length - 1 ? (
                    <Button
                      variant='contained'
                      onClick={formik.handleSubmit}
                      disabled={
                        activeStep === steps.length - 1
                          ? false
                          : !formik.values.agreement ||
                            Object.keys(formik.errors).length > 0
                      }
                      sx={{
                        borderRadius: '15px',
                        marginTop: '20px',
                        height: '45px',
                      }}
                    >
                      Register
                    </Button>
                  ) : (
                    <Button
                      variant='contained'
                      sx={{
                        borderRadius: '15px',
                        marginTop: '20px',
                        height: '45px',
                      }}
                      onClick={handleNext}
                    >
                      Next
                    </Button>
                  )}
                </ButtonGroup>
                {activeStep > 0 && (
                  <Button
                    fullWidth
                    onClick={handleBack}
                    sx={{
                      borderRadius: '15px',
                      marginTop: '20px',
                      height: '45px',
                    }}
                  >
                    Go Back
                  </Button>
                )}
              </Grid>
            )}
          </Grid>
          {formik.errors.submit && (
            <Grid item xs={12}>
              <FormHelperText error>{formik.errors.submit}</FormHelperText>
            </Grid>
          )}
        </Grid>
      </Box>
    </Paper>
  );
};

export default Form;
