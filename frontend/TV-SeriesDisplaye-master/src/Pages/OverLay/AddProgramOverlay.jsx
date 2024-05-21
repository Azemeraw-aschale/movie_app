import React, { useState } from 'react';
import { Box, Button, Divider, Drawer, TextField, Typography } from '@mui/material';
import { useState } from 'react';
const AddProgramOverlay = ({ open, onClose }) => {
  const [programName, setProgramName] = useState('');
  const [programType, setProgramType] = useState('');
  const [programStatus, setProgramStatus] = useState('');

  const handleSubmit = () => {
    // Handle form submission logic here
    onClose();
  };

  return (
    <Drawer
      anchor="center"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: '50%',
          maxWidth: '500px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}
    >
      <Typography variant="h5" gutterBottom>
        Add Program
      </Typography>
      <TextField
        label="Program Name"
        value={programName}
        onChange={(e) => setProgramName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Box display="flex" justifyContent="space-between" width="100%" margin="16px 0">
        <TextField
          label="Program Type"
          value={programType}
          onChange={(e) => setProgramType(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Divider orientation="vertical" flexItem />
        <TextField
          label="Program Status"
          value={programStatus}
          onChange={(e) => setProgramStatus(e.target.value)}
          fullWidth
          margin="normal"
        />
      </Box>
      <Box display="flex" justifyContent="flex-end" width="100%" marginTop="16px">
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary" variant="contained" sx={{ marginLeft: '16px' }}>
          Submit
        </Button>
      </Box>
    </Drawer>
  );
};

export default AddProgramOverlay;