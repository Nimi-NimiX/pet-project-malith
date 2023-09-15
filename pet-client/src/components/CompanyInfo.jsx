import { TextField, Grid, InputLabel, Select, MenuItem } from '@mui/material';
import { companyFields, currencies } from '../constants/constants';

//creatd company infomation child component
const CompanyInfo = (props) => {
  const { formik } = props;
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name='companyName'
            label='Company Name'
            variant='outlined'
            fullWidth
            size='small'
            value={formik.values.companyName}
            onChange={formik.handleChange}
            error={
              formik.touched.companyName && Boolean(formik.errors.companyName)
            }
            helperText={formik.touched.companyName && formik.errors.companyName}
            onBlur={formik.handleBlur}
            onFocus={formik.handleFocus}
          />
        </Grid>
        <Grid item xs={12}>
          <Select
            id='field'
            name='field'
            size='small'
            value={formik.values.field}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.field && Boolean(formik.errors.field)}
            fullWidth
            variant='outlined'
            helperText={formik.touched.field && formik.errors.field}
            displayEmpty
            sx={{
              '& .MuiSelect-select': {
                paddingLeft: '10px',
              },
            }}
          >
            <MenuItem value='' disabled>
              Field*
            </MenuItem>
            {companyFields.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12}>
          <Select
            id='currency'
            name='currency'
            size='small'
            value={formik.values.currency}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.currency && Boolean(formik.errors.currency)}
            fullWidth
            variant='outlined'
            helperText={formik.touched.currency && formik.errors.currency}
            displayEmpty
            sx={{
              '& .MuiSelect-select': {
                paddingLeft: '50px',
              },
            }}
          >
            <MenuItem value='' disabled>
              Default currency*
            </MenuItem>
            {currencies.map((option) => (
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
