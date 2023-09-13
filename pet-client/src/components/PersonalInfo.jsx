import {
  Grid,
  TextField,
  FormHelperText,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

//creatd Personal infomation child component
const PersonalInfo = (props) => {
  const { formik } = props;

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name='username'
            label='User Name*'
            variant='outlined'
            fullWidth
            size='small'
            error={Boolean(formik.touched.username && formik.errors.username)}
            onChange={formik.handleChange}
            value={formik.values.username}
            helperText={formik.touched.username && formik.errors.username}
            onBlur={formik.handleBlur}
            onFocus={formik.handleFocus}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name='email'
            label='Email*'
            variant='outlined'
            type='email'
            fullWidth
            size='small'
            error={Boolean(formik.touched.email && formik.errors.email)}
            onChange={formik.handleChange}
            value={formik.values.email}
            helperText={formik.touched.email && formik.errors.email}
            onBlur={formik.handleBlur}
            onFocus={formik.handleFocus}
          />
        </Grid>
        <Grid item xs={12}>
          <PhoneInput
            inputProps={{
              name: 'mobileNumber',
              label: 'Mobile Number*',
              variant: 'outlined',
              fullWidth: true,
              size: 'small',
            }}
            country={'us'}
            value={formik.values.mobileNumber}
            onChange={(value) => {
              formik.setFieldValue('mobileNumber', value);
            }}
          />
          {formik.touched.mobileNumber && formik.errors.mobileNumber && (
            <FormHelperText error>{formik.errors.mobileNumber}</FormHelperText>
          )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            name='password'
            label='Password*'
            variant='outlined'
            size='small'
            type='password'
            fullWidth
            error={Boolean(formik.touched.password && formik.errors.password)}
            onChange={formik.handleChange}
            value={formik.values.password}
            helperText={formik.touched.password && formik.errors.password}
            onBlur={formik.handleBlur}
            onFocus={formik.handleFocus}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name='confirmPassword'
            label='Confirm Password*'
            variant='outlined'
            size='small'
            type='password'
            fullWidth
            error={Boolean(
              formik.touched.confirmPassword && formik.errors.confirmPassword
            )}
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            onBlur={formik.handleBlur}
            onFocus={formik.handleFocus}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={formik.values.agreement}
                onChange={formik.handleChange}
                name='agreement'
                color='primary'
                fullWidth
              />
            }
            label='I agree to the terms and conditions'
          />
        </Grid>
        {formik.errors.submit && (
          <Grid item xs={12}>
            <FormHelperText error>{formik.errors.submit}</FormHelperText>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default PersonalInfo;
