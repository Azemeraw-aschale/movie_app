
import { Box, Button, Card, Stack, TextField, Typography } from '@mui/material';
import { Add, Filter, ImportExport, Person2TwoTone, Search } from '@mui/icons-material';
import { IconButton, InputBase } from '@mui/material';
import Modal from '@mui/material/Modal';
import { PieChart } from '@mui/x-charts/PieChart'
import React,{useEffect,useState} from 'react';
import { light } from '@mui/material/styles/createPalette';
import { useDispatch,useSelector } from 'react-redux';
// import { fetchMovie, } from '../../apis/movieSlice';
import { fetchPieChart,fetchChanal,fetchMovie,fetchLineChart,fetchUser } from '../../apis/dashboardSlice';

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
  const dispatch=useDispatch();
  // const movie_data = useSelector((state) => state.dashboards.movieData);
  // const chanal_data=useSelector((state)=>state.dashboards.chanalData);
  // const pie_data=useSelector((state)=>state.dashboards.piechartData);
  // const line_data=useSelector((state)=>state.dashboards.lineChartData);
  // const user_data=useSelector((state)=>state.dashboards.userData);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // if (movie_data && movie_data.movies) {
  //   movie_data.movies.forEach((movie) => {
  //     console.log("chanel id:", movie.id);
  //     console.log("Channel name:", movie.name);

  //   });
  // }
  useEffect(() => {
    dispatch(fetchChanal());
    dispatch(fetchUser());
    dispatch(fetchLineChart());
    dispatch(fetchPieChart());
    dispatch(fetchMovie());
  }, [dispatch]);

  return (
  <div>

      {/* Statistics cards */}
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
              <Button onClick={handleOpen}> Add Filter</Button>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt={5} ml={5} mr={5}>
        <Card sx={{ display: 'flex', width: '25%', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6">System user</Typography>
            <Typography variant="h4">99</Typography>
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
            <Typography variant="h6">45</Typography>
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
            <Typography variant="h6">56</Typography>
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