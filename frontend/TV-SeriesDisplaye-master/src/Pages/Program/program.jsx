import React, { useEffect,useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Switch,
  Typography,
  Box,
  TextField,
  Stack,
  Button,
  InputBase,
  NativeSelect,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Modal from '@mui/material/Modal';
import { light } from '@mui/material/styles/createPalette'
import { Filter, ImportExport, Search } from '@mui/icons-material';
import SideBar from '../SideBar/SideBar';
import NavBar from '../AppBar/NavBar';
import { addChannal, fetchChanal, deleteChanal, updateChanal } from '../../apis/chanalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, deleteMovie, fetchMovie } from '../../apis/movieSlice';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  height:'70%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius:2,
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  p: 4,
  display:{
    xs:'flex',
    sm:'block',
    
  },
  justigyContent:'center',
  alignItems:'center',
};




const Program = ({show,onClose}) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

//   const [channels, setChannels] = useState([]);

// // Fetch channel data from the server
// const fetchChannels = async () => {
//   try {
//     const mockData = [
//       { id: 1, name: 'Channel 1' },
//       { id: 2, name: 'Channel 2' },
//       // Add more mock data as needed
//     ];
//     setChannels(mockData);
//   } catch (error) {
//     console.error('Error fetching channels:', error);
//   }
// };
// // Fetch channels when the component mounts
// useEffect(() => {
//   fetchChannels();
// }, []);

  const prog_data = useSelector((state) => state.programs.data);

  console.log("mnmnmnmnm", prog_data);
  // hiint prog_data.movies from movies is  the table name 
  if (prog_data && prog_data.movies) {
    // console.log("this is ethiopia jdjfjdjdjfd")
    prog_data.movies.forEach((program) => {
      console.log("movie id is  id:", program.id);
      console.log("movie na name:", program.title);
      console.log("program duration is:",program.duration);
      console.log("movie description is", program.description);
      console.log("movie category", program.channelid);
      console.log("movie type: ",program.typeid);
      console.log("movie chanal id",program.categoryid);
      console.log("movie url",program.videourl);


    }
  );
  }
  useEffect(() => {
    dispatch(fetchMovie());
  }, [dispatch]);
  const [data, setData] = useState([
    {
      id: 3,
      title: 'Bob Johnson',
      duration: 'duration',
      description: 'description',
      status: true,
    },
    {
      id: 2,
      title: 'Jane Smith',
      duration: 'durationd',
      description: 'description',
      status: false,
    },
    {
      id: 1,
      title: 'John Doe',
      duration: 'durationd',
      description: 'description',
      status: true,
    },
  ]);
  const initialFormData = {
    url: '',
    duration: '',
    channel: '',
    desc:'',
    title: '',
    categori: '',
    type: '',
  };
  
  // Inside your component
  const [formData, setFormData] = useState(initialFormData);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [age, setAge] = useState('');

// Handle change event of channel select
// const handleChange = (event) => {
//   const selectedAge = event.target.value;
//   setAge(selectedAge);
// };
  const toggleStatus = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };

  const handleEdit = (id) => {
    console.log(`Editing item with ID: ${id}`);
  };

  const handleDelete = async (movie_id) => {
    console.log(`Deleting item with ID: ${movie_id}`);
    const userConfirmation = window.confirm("Are you sure you want to delete channel?");
    
    if (userConfirmation) {
      console.log("id for delete is:", movie_id);
      dispatch(deleteMovie({ id: movie_id }));
      
    }
  };


  // const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: false });
  };
  const handleSubmit = async (event) => {
    // console.log("this is ok one of ");
    event.preventDefault();
    const newErrors = { ...errors };
    const fields = ['url', 'duration','channel','desc', 'title', 'categori', 'type'];
   
    
    fields.forEach(field => {
      if (!formData[field].trim()) {
        newErrors[field] = true;
      }
    });
    setErrors(newErrors);
    // aa=formData.url;
    console.log("hhhhhhhhhhhhgghghghg",formData.desc);
    if (Object.values(newErrors).every(error => !error)) {
      console.log("hhhhhhhhhhhhhhh")
      const dataContainer = {
        // name: formData.name,
        url: formData.url,
        disc:formData.desc,
        duration: parseInt(formData.duration, 10),
        channel: formData.channel,
        title: formData.title,
        category: 1,
        type: 1,
      };
      console.log(dataContainer);
  
      dispatch(addMovie(dataContainer));
      window.alert('movie registered successfully!');
      handleClose();
      await dispatch(fetchMovie());
    }
  
  };

  const [isActive, setIsActive] = useState(false);

  const handleSwitchChange = () => {
    setIsActive(!isActive);
  };

  return (

    
    <>
    <div style={{ display: 'flex' }}>
      <SideBar />
      <div style={{ flex: '1' }}>
        <NavBar /> {/* Include the NavBar component */}
      
     <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2" style={{ fontWeight: 'bold', fontSize: '30px' }}>
          Add Program
        </Typography>
        <Box sx={{display:'flex',mt:1}}>
          <Box>
            <Typography id="modal-modal-description" sx={{ mt: 4, display: 'flex', flexDirection: 'column' }}>
              Vedio URL
              <TextField id="filled-basic" variant="filled" sx={{ width: '500px' }} 
              onChange={handleChange} name='url' />
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 4, display: 'flex', flexDirection: 'column' }}>
             Duration
             <TextField id="filled-basic" variant="filled" sx={{ width: '500px' }}  
             onChange={handleChange} name='duration'/>
           </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 4, display: 'flex', flexDirection: 'column' }}>
            Channel
            <TextField id="filled-basic" variant="filled" sx={{ width: '500px' }}  
            onChange={handleChange} name='channel'/>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 4, display: 'flex', flexDirection: 'column' }}>
            Descriptions
            <TextField id="filled-basic" variant="filled" sx={{ width: '500px' }}  
            onChange={handleChange} name='desc'/>
            
            {/* <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-filled-label">Select..</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={formData.channel}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {channels.map(channel => (
                  <MenuItem key={channel.id} value={channel.id}>{channel.name}</MenuItem>
                ))}
              </Select>
            </FormControl> */}
          </Typography>
          </Box>
          <Box>
            <Typography id="modal-modal-description" sx={{ mt: 4,ml:4, display: 'flex', flexDirection: 'column' }}>
              Title
              <TextField id="filled-basic" variant="filled" sx={{ width: '500px' }}  
              onChange={handleChange} name='title'/>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 4,ml:4, display: 'flex', flexDirection: 'column' }}>Catagories
              <TextField id="filled-basic" variant="filled" sx={{ width: '500px' }}  
              onChange={handleChange} name='categori'/>
              {/* <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl> */}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 4,ml:4, display: 'flex', flexDirection: 'column' }}>Type
          <TextField id="filled-basic" variant="filled" sx={{ width: '500px' }}  
          onChange={handleChange} name='type'/>
              {/* <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-filled-label">Select</InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl> */}
          </Typography>
        <Stack direction="row" spacing={2} sx={{ mt: 5, ml: 25 }}>
          <Button variant="outlined" sx={{ pr: 6, pl: 6 }} onClick={handleClose}>Cancel</Button>

          <Button onClick={handleSubmit} variant="contained" href="#outlined-buttons" sx={{ pr: 6, pl: 6 }}>
            Add
          </Button>
        </Stack>
          </Box>
        </Box>
        


      </Box>
    </Modal>
    <Box margin={2} bgcolor={light}>
        <Box
          flexGrow={1}
          p={1}
          display="flex"
          justifyContent="space-between"
          bgcolor="background.paper"
          boxShadow={2}
        >
          <Box
            display="flex"
            alignItems="center"
            flex={1}
            bgcolor="lightgrey"
            borderRadius={2}
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
          <Box display="flex" alignItems="center" ml={2}>
            <IconButton>
              <ImportExport />
            </IconButton>
            <Typography variant="body1">Export</Typography>
          </Box>
          <Box display="flex" alignItems="center" ml={2}>
            <IconButton   >
              <Filter />
            </IconButton>
            <Typography variant="body1">Add Filter</Typography>
          </Box>
          <Box display="flex" alignItems="center" ml={2}>
            <Typography variant="body1" bgcolor="blue" p={1} borderRadius={2}>
          <Button onClick={handleOpen}> Add Program</Button>  
            </Typography>
          </Box>
        </Box>
      </Box>
    <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {prog_data && prog_data.movies && prog_data.movies.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.duration}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>
                <div style={{ display: 'flex', alignItems: 'center' }}>
      <Switch
        checked={isActive}
        onChange={handleSwitchChange}
        classes={{
          checked: isActive ? 'green' : 'error',
          track: isActive ? 'success' : 'redColor',
        }}
      />
      <Typography
        variant="body2"
        ml={1}
        color={isActive ? 'success' : 'error'}
        className={isActive ? 'greenColor' : 'redColor'}
      >
        {isActive ? 'Active' : 'Inactive'}
      </Typography>
    </div>
                </TableCell>
                <TableCell>
                  

                  <IconButton  sx={{background:'gray',borderRadius:'0px'}}>
                  <RemoveRedEyeIcon/>
                  </IconButton >
                  <IconButton onClick={() => handleEdit(item.id)}>
                    <EditIcon/>
                  </IconButton>
                  <IconButton onClick={() => handleDelete(item.id)} color='red' >
                    <DeleteIcon color='error'/>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    </div>
    </>
  );
};

export default Program;