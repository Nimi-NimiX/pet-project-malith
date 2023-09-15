import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
} from '@mui/material';

//creatd Review infomation child component
const ReviewInfo = ({ formik }) => {
  const { values } = formik;
  return (
    <Grid container spacing={1} sx={{ margin: '5px' }}>
      <Grid item xs={12}>
        <Typography variant='overline'>
          <span style={{ color: 'blue' }}>Personal Details</span>
        </Typography>
        <Grid container spacing={2}>
          {/* First Column */}
          <Grid item xs={6}>
            <List>
              <ListItem>
                <ListItemText primary='User Name' secondary={values.username} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary='Mobile Number'
                  secondary={values.mobileNumber}
                />
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={6}>
            <List>
              <ListItem>
                <ListItemText primary='Email' secondary={values.email} />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='overline'>
          {' '}
          <span style={{ color: 'blue' }}>Company Details</span>
        </Typography>
        <Grid container spacing={2}>
          {/* First Column */}
          <Grid item xs={12} sm={4}>
            <List>
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
            </List>
          </Grid>

          {/* Second Column */}
          <Grid item xs={12} sm={4}>
            <List>
              <ListItem>
                <ListItemText
                  primary='Contact Number'
                  secondary={values.contactNumber}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary='Company Field'
                  secondary={values.field}
                />
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={12} sm={2}>
            <List>
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
            </List>
          </Grid>

          <Grid item xs={12} sm={2}>
            <List>
              <ListItem>
                <ListItemText primary='City' secondary={values.city} />
              </ListItem>
              <ListItem>
                <ListItemText primary='Country' secondary={values.country} />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Typography variant='overline'>
          <span style={{ color: 'blue' }}>Pay Slip Details</span>
        </Typography>
        <List>
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
