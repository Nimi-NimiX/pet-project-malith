import { Typography, List, ListItem, ListItemText, Grid } from '@mui/material';

const ReviewInfo = ({ formik }) => {
  const { values } = formik;
  return (
    <Grid container spacing={6} sx={{ margin: '5px' }}>
      <Grid item xs={12}>
        <Typography variant='overline'>Personal Details</Typography>
        <List sx={{ display: 'flex', flexDirection: 'row' }}>
          <ListItem>
            <ListItemText primary='User Name' secondary={values.username} />
          </ListItem>
          <ListItem>
            <ListItemText primary='Email' secondary={values.email} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary='Mobile Number'
              secondary={values.mobileNumber}
            />
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='overline'>Company Details</Typography>
        <List sx={{ display: 'flex', flexDirection: 'row' }}>
          <ListItem>
            <ListItemText
              primary='Company Name'
              secondary={values.companyName}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary='Company Email'
              secondary={values.companyEmail}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary='Contact Number'
              secondary={values.contactNumber}
            />
          </ListItem>
          <ListItem>
            <ListItemText primary='Company Field' secondary={values.field} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary='Address Line 1'
              secondary={values.addressLine1}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary='Address Line 2'
              secondary={values.addressLine2}
            />
          </ListItem>
          <ListItem>
            <ListItemText primary='City' secondary={values.city} />
          </ListItem>
          <ListItem>
            <ListItemText primary='Country' secondary={values.country} />
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='overline'>Pay slip Details</Typography>
        <List sx={{ display: 'flex', flexDirection: 'row' }}>
          <ListItem>
            <ListItemText primary='Currency' secondary={values.currency} />
          </ListItem>
          <ListItem>
            <ListItemText primary='Pay day' secondary={values.payday} />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default ReviewInfo;
