import { TextField, Grid } from '@mui/material';
import { DatePicker } from '@mui/lab';
import CustomDayPicker from '../components/CustomDayPicker';

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
            onBlur={formik.handleBlur} // Add onBlur handler to update touched state
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
            onBlur={formik.handleBlur} // Add onBlur handler to update touched state
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
            onBlur={formik.handleBlur} // Add onBlur handler to update touched state
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
            onBlur={formik.handleBlur} // Add onBlur handler to update touched state
            onFocus={formik.handleFocus}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            name='companyEmail'
            label='Company Email'
            variant='outlined'
            type='email'
            fullWidth
            size='small'
            value={formik.values.companyEmail}
            onChange={formik.handleChange}
            error={
              formik.touched.companyEmail && Boolean(formik.errors.companyEmail)
            }
            helperText={
              formik.touched.companyEmail && formik.errors.companyEmail
            }
            onBlur={formik.handleBlur} // Add onBlur handler to update touched state
            onFocus={formik.handleFocus}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            name='contactNumber'
            label='Contact Number'
            variant='outlined'
            type='phone'
            fullWidth
            size='small'
            value={formik.values.contactNumber}
            onChange={formik.handleChange}
            error={
              formik.touched.contactNumber &&
              Boolean(formik.errors.contactNumber)
            }
            helperText={
              formik.touched.contactNumber && formik.errors.contactNumber
            }
            onBlur={formik.handleBlur} // Add onBlur handler to update touched state
            onFocus={formik.handleFocus}
          />
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
            onBlur={formik.handleBlur} // Add onBlur handler to update touched state
            onFocus={formik.handleFocus}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default PaySlipInfo;
