import React, { useState } from 'react';
import {
  TextField,
  InputAdornment,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const CustomDayPicker = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDayClick = (day) => {
    onChange(day);
    setOpen(false);
  };

  return (
    <>
      <TextField
        variant='outlined'
        type='text'
        size='small'
        fullWidth
        value={value}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton onClick={handleOpen}>
                <CalendarTodayIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        readOnly
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Select a Day</DialogTitle>
        <DialogContent>
          {[...Array(31).keys()].map((day) => (
            <Button key={day} onClick={() => handleDayClick(day + 1)}>
              {day + 1}
            </Button>
          ))}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CustomDayPicker;
