import { TextField, Grid, InputLabel, Select, MenuItem } from '@mui/material';
import { companyFields, currencies } from '../constants/constants';

const CompanyInfo = (props) => {
  const { formik } = props;
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            name='companyName'
            label='Company Name'
            variant='outlined'
            size='small'
            fullWidth
            value={formik.values.companyName}
            onChange={formik.handleChange}
            error={
              formik.touched.companyName && Boolean(formik.errors.companyName)
            }
            helperText={formik.touched.companyName && formik.errors.companyName}
            onBlur={formik.handleBlur} // Add onBlur handler to update touched state
            onFocus={formik.handleFocus}
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel htmlFor='currencyld'>Currency</InputLabel>
          <Select
            id='currency'
            name='currency'
            value={formik.values.currency}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.currency && Boolean(formik.errors.currency)}
            fullWidth
            variant='outlined'
            size='small'
            helperText={formik.touched.currency && formik.errors.currency}
          >
            <MenuItem value=''>Select Company currency</MenuItem>
            {currencies.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12}>
          <InputLabel htmlFor='field'>Company Field</InputLabel>
          <Select
            id='field'
            name='field'
            value={formik.values.field}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.field && Boolean(formik.errors.field)}
            fullWidth
            variant='outlined'
            size='small'
            helperText={formik.touched.field && formik.errors.field}
          >
            <MenuItem value=''>Select Company Field</MenuItem>
            {companyFields.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </Grid>
      </Grid>
    </>
  );
};

export default CompanyInfo;
