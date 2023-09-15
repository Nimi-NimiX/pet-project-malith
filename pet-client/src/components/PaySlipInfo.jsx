import { TextField, Grid, FormControl, InputLabel } from '@mui/material';
import { DatePicker } from '@mui/lab';
import CustomDayPicker from '../components/CustomDayPicker';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

//creatd Pay Slip infomation child component
const PaySlipInfo = (props) => {
  const { formik } = props;

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name='addressLine1'
            label='Address Line 1'
            variant='outlined'
            size='small'
            fullWidth
            value={formik.values.addressLine1}
            onChange={formik.handleChange}
            error={
              formik.touched.addressLine1 && Boolean(formik.errors.addressLine1)
            }
            helperText={
              formik.touched.addressLine1 && formik.errors.addressLine1
            }
            onBlur={formik.handleBlur}
            onFocus={formik.handleFocus}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name='addressLine2'
            label='Address Line 2'
            variant='outlined'
            size='small'
            fullWidth
            value={formik.values.addressLine2}
            onChange={formik.handleChange}
            error={
              formik.touched.addressLine2 && Boolean(formik.errors.addressLine2)
            }
            helperText={
              formik.touched.addressLine2 && formik.errors.addressLine2
            }
            onBlur={formik.handleBlur}
            onFocus={formik.handleFocus}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name='city'
            label='City'
            variant='outlined'
            size='small'
            fullWidth
            value={formik.values.city}
            onChange={formik.handleChange}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
            onBlur={formik.handleBlur}
            onFocus={formik.handleFocus}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name='country'
            label='Country'
            variant='outlined'
            size='small'
            fullWidth
            value={formik.values.country}
            onChange={formik.handleChange}
            error={formik.touched.country && Boolean(formik.errors.country)}
            helperText={formik.touched.country && formik.errors.country}
            onBlur={formik.handleBlur}
            onFocus={formik.handleFocus}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            name='companyEmail'
            label='Company Email'
            variant='outlined'
            type='email'
            size='small'
            fullWidth
            value={formik.values.companyEmail}
            onChange={formik.handleChange}
            error={
              formik.touched.companyEmail && Boolean(formik.errors.companyEmail)
            }
            helperText={
              formik.touched.companyEmail && formik.errors.companyEmail
            }
            onBlur={formik.handleBlur}
            onFocus={formik.handleFocus}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth variant='outlined'>
            <InputLabel
              htmlFor='contactNumber'
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
              Company Contact Number*
            </InputLabel>
            <PhoneInput
              inputProps={{
                name: 'contactNumber',
                id: 'contactNumber',

                placeholder: 'Company Contact number',
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
                formik.setFieldValue('contactNumber', value);
              }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            name='payday'
            label='Pay day'
            variant='outlined'
            fullWidth
            size='small'
            value={formik.values.payday}
            onChange={formik.handleChange}
            error={formik.touched.payday && Boolean(formik.errors.payday)}
            helperText={formik.touched.payday && formik.errors.payday}
            onBlur={formik.handleBlur}
            onFocus={formik.handleFocus}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default PaySlipInfo;
