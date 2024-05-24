
import { Box, Button, Card, Stack, TextField, Typography } from '@mui/material';
import { Add, Filter, ImportExport, Person2TwoTone, Search } from '@mui/icons-material';
import { IconButton, InputBase } from '@mui/material';
import Modal from '@mui/material/Modal';
import React,{useEffect,useState} from 'react';
import { light } from '@mui/material/styles/createPalette';
import { useDispatch,useSelector } from 'react-redux';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer,Label} from 'recharts';
import { fetchPieChart,fetchChanal,fetchMovie,fetchLineChart,fetchUser } from '../../apis/dashboardSlice';
// import { fetchchanalCount } from '../../apis/chanalcountSlice';
import { fetchmoviesCount } from '../../apis/programDashboardSlice';
// import { fetchchanalCount } from '../../apis/chanalcountSlice';
// import { fetchusersCount } from '../../apis/userDashboardSlice';
import { fetchUsersCount } from '../../apis/userDashboardSlice';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { fetchchanalCount } from '../../apis/chanalcountSlice';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

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
const onPieEnter = (data, index) => {
  // Handle the pie enter event
  console.log('Pie entered:', data, index);
};

const data = [
  { name: 'A', value: 100 },
  { name: 'B', value: 200 },
  { name: 'C', value: 300 },
  { name: 'D', value: 400 },
];
const size = {
  width: 400,
  height: 200,
};

function Content() {
  const [open, setOpen] = React.useState(false);
  const dispatch=useDispatch();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { usersCount, isLoading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchChanal());
    dispatch(fetchUser());
    dispatch(fetchLineChart());
    dispatch(fetchPieChart());
    dispatch(fetchMovie());
    dispatch(fetchchanalCount());
    dispatch(fetchmoviesCount());
    dispatch(fetchUsersCount());
  }, [dispatch]);
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error: {error}</div>;
  }
  
  if (usersCount) {
    console.log("that ok  .....", usersCount);
    console.log("that ok  .....", usersCount.count);
  }
  

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const lineChartData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 300 },
    { name: 'Apr', value: 200 },
    { name: 'May', value: 400 },
    { name: 'Jun', value: 300 },
  ];

  const anotherLineChartData = [
    { name: 'prog', value: 677 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 300 },
    { name: 'Apr', value: 200 },
    { name: 'May', value: 400 },
    { name: 'Jun', value: 300 },
  ];




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
            <Typography variant="h4">{usersCount}</Typography>
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
{/* <Box> */}
<Card sx={{ width: '60%', height: '25%', mt: '20', pt: '10px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)' }}>
  <Box margin={2}>
    <PieChart width={800} height={400}>
      <text x={80} y={200} textAnchor="end" dominantBaseline="middle"></text>
      <Pie
        data={data}
        cx={300}
        cy={150}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        onMouseEnter={onPieEnter}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
        <Label value="Department" position="center" />
      </Pie>
    </PieChart>
  </Box>

</Card>
<Card sx={{ width: '60%', height: '35%', mt: '20', pt: '10px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)' }}>
<Box margin={2}>
<LineChart width={800} height={400} data={[...lineChartData, ...anotherLineChartData]}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </Box>
</Card>

{/* </Box> */}
    </div>
  );
}


export default Content;