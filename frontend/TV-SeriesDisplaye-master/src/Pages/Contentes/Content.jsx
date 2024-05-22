import { Box, Button, Card, Stack, TextField, Typography } from '@mui/material';
import { Add, Filter, ImportExport, Person2TwoTone, Search } from '@mui/icons-material';
import { IconButton, InputBase } from '@mui/material';
import Modal from '@mui/material/Modal';
import { PieChart } from '@mui/x-charts/PieChart'
import React from 'react';
import { light } from '@mui/material/styles/createPalette';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  height: '50%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: 2,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  p: 4,
};

// Define the data for the pie chart
const data = [
  { value: 5, label: 'A' },
  { value: 10, label: 'B' },
  { value: 15, label: 'C' },
  { value: 20, label: 'D' },
];

const size = {
  width: 400,
  height: 200,
};

function Content() {
  // State for modal open/close
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* Modal content */}
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{ fontWeight: 'bold', fontSize: '30px' }}>
            Add Channel
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 10, display: 'flex', flexDirection: 'column' }}>
            Name
            <TextField id="filled-basic" variant="filled" sx={{ width: '500px' }} />
          </Typography>

          <Stack direction="row" spacing={2} sx={{ mt: 5, ml: 25 }}>
            <Button variant="outlined" sx={{ pr: 6, pl: 6 }}>
              Cancel
            </Button>

            <Button variant="contained" href="#outlined-buttons" sx={{ pr: 6, pl: 6 }}>
              Add
            </Button>
          </Stack>
        </Box>
      </Modal>

      {/* Search and control buttons */}
      <Box margin={2} bgcolor={light}>
        <Box
          flexGrow={1}
          p={1}
          display="flex"
          justifyContent="space-between"
          bgcolor="background.paper"
          boxShadow={2}
        >
          {/* Search box */}
          <Box
            display="flex"
            alignItems="center"
            flex={1}
            bgcolor="lightgrey"
            borderRadius={2}
            sx={{display:{xs:'none',sm:'block'}}}
          >
            <IconButton>
              <Search />
            </IconButton>
            <InputBase
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
              style={{ flexGrow: 1 }}
              
            />
          </Box>

          {/* Export button */}
          <Box display="flex" alignItems="center" ml={2} >
            <IconButton>
              <ImportExport />
            </IconButton>
            <Typography variant="body1">Export</Typography>
          </Box>

          {/* Add filter button */}
          <Box display="flex" alignItems="center" ml={2}>
            <IconButton>
              <Filter />
            </IconButton>
            <Typography variant="body1">Add Filter</Typography>
          </Box>

          {/* Add Channel button */}
          <Box display="flex" alignItems="center" ml={2}>
            <Typography variant="body1" bgcolor="blue" p={1} borderRadius={2}>
              <Button onClick={handleOpen}> Add Channel</Button>
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Statistics cards */}
      <Box display="flex" justifyContent="space-between" mt={5} ml={5} mr={5}>
        <Card sx={{ display: 'flex', width: '25%', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6">System user</Typography>
            <Typography variant="h4">37</Typography>
            <Typography variant="body1">12% This Month</Typography>
          </Box>
          <Box>
            <IconButton>
              <Person2TwoTone />
            </IconButton>
          </Box>
        </Card>
        <Card sx={{display: 'flex', width: '25%', padding: '16px', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6">System user</Typography>
            <Typography variant="h4">37</Typography>
            <Typography variant="body1">12% This Month</Typography>
          </Box>
          <Box>
            <IconButton>
              <Person2TwoTone />
            </IconButton>
          </Box>
        </Card>
        <Card sx={{ display: 'flex', width: '25%', padding: '16px', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Typography variant="h6">System user</Typography>
            <Typography variant="h4">37</Typography>
            <Typography variant="body1">12% This Month</Typography>
          </Box>
          <Box>
            <IconButton>
              <Person2TwoTone />
            </IconButton>
          </Box>
        </Card>

        
      </Box>
      <Card sx={{width:'50%',height:'50%',mt:'20',pt:'10px'}}>
      <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 10, label: 'series A' },
                    { id: 1, value: 15, label: 'series B' },
                    { id: 2, value: 20, label: 'series C' },
                   ],
                },
              ]}
              width={400}
              height={200}
            />
</Card>
    </div>
  );
}

export default Content;