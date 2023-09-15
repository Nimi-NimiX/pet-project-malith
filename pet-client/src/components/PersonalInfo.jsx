import {
  Grid,
  TextField,
  FormHelperText,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  FilledInput,
  InputAdornment,
  IconButton,
  OutlinedInput,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useState } from 'react';

//creatd Personal infomation child component
const PersonalInfo = (props) => {
  const { formik } = props;
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name='username'
            label='Name*'
            variant='outlined'
            size='small'
            fullWidth
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
            label='Email address*'
            variant='outlined'
            size='small'
            type='email'
            fullWidth
            error={Boolean(formik.touched.email && formik.errors.email)}
            onChange={formik.handleChange}
            value={formik.values.email}
            helperText={formik.touched.email && formik.errors.email}
            onBlur={formik.handleBlur}
            onFocus={formik.handleFocus}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth variant='outlined'>
            <InputLabel
              htmlFor='mobileNumber'
              shrink
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'rgba(0, 0, 0, 0.54)',
                paddingLeft: '78px',
                marginBottom: '48px',
              }}
            >
              Mobile Number*
            </InputLabel>
            <PhoneInput
              inputProps={{
                name: 'mobileNumber',
                id: 'mobileNumber',

                placeholder: 'Mobile number',
                sx: {
                  '& .MuiInputLabel-root': {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                },
              }}
              containerStyle={{}}
              inputStyle={{
                width: '440px',
                height: '41px',
              }}
              helperText={
                formik.touched.mobileNumber && formik.errors.mobileNumber
              }
              country={'us'}
              fullWidth
              value={formik.values.mobileNumber}
              onChange={(value) => {
                formik.setFieldValue('mobileNumber', value);
              }}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <OutlinedInput
            id='password'
            name='password'
            placeholder='Enter your password*'
            variant='outlined'
            size='small'
            fullWidth
            error={Boolean(formik.touched.password && formik.errors.password)}
            onChange={formik.handleChange}
            value={formik.values.password}
            helperText={formik.touched.password && formik.errors.password}
            onBlur={formik.handleBlur}
            onFocus={formik.handleFocus}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </Grid>
        <Grid item xs={12}>
          <OutlinedInput
            id='confirmPassword'
            name='confirmPassword'
            placeholder='Confirm your password*'
            size='small'
            variant='outlined'
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
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
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
              />
            }
            label='I agree to the privacy policy and terms and conditions'
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
