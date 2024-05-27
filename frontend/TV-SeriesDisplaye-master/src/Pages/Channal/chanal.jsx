
import React, { useState, useEffect } from 'react';
// import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  InputBase,
  TextField,
  Stack,
  Button,
} from '@mui/material';
// import { withStyles } from '@material-ui/core/styles';
import SideBar from '../SideBar/SideBar';
import NavBar from '../AppBar/NavBar'; // Import the NavBar component
import Modal from '@mui/material/Modal';
import { light } from '@mui/material/styles/createPalette'
import { Filter, ImportExport, Search } from '@mui/icons-material'
import { addChannal, fetchChanal, deleteChanal} from '../../apis/chanalSlice';
import TablePagination from '@mui/material/TablePagination';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
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






const ChannelPage = () => {

  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const chanal = useSelector((state) => state.chanals.data);

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const [sortDirection, setSortDirection] = useState('asc');
  const [setData] = useState(null);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSort = () => {
    if (sortDirection === 'asc') {
      setSortDirection('desc');
    } else {
      setSortDirection('asc');
    }
  };

  const sortedChannels = chanal && chanal.channels ? [...chanal.channels] : [];
  sortedChannels.sort((a, b) => {
    if (a.name < b.name) {
      return sortDirection === 'asc' ? -1 : 1;
    }
    if (a.name > b.name) {
      return sortDirection === 'asc' ? 1 : -1;
    }
    return 0;
  });

  // console.log("mnmnmnmnm", chanal);
  if (chanal && chanal.channels) {
    chanal.channels.forEach((channel) => {
      console.log("chanel id:", channel.id);
      console.log("Channel name:", channel.name);

    });
  }
  useEffect(() => {
    dispatch(fetchChanal());
  }, [dispatch]);
  const [isActive, setIsActive] = useState(false);
  // const handleSwitchChange = () => {
  //   setIsActive(!isActive);
  // };
  const handleSwitchChange = (index) => {
    setSelectedIndex(index);
    setIsActive((prevState) => !prevState);
  };


  const [formData, setFormData] = useState({
    name: '',
    
  });

  
  const paginatedChannels = sortedChannels.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );
  const handleEdit = (id) => {
    console.log("Editing item with ID:",${id});
  };


const handleDelete = (chaid) => {
    console.log(Deleting item with ID: ${chaid});
    const userConfirmation = window.confirm("Are you sure you want to delete channel?");
    if (userConfirmation) {
      console.log("id for delete is:", chaid);
      dispatch(deleteChanal({ id: chaid }));
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
    event.preventDefault();
    const newErrors = { ...errors };
    const fields = ['name'];
    fields.forEach(field => {
      if (!formData[field].trim()) {
        newErrors[field] = true;
      }
    });
    setErrors(newErrors);

    if (Object.values(newErrors).every(error => !error)) {
      const dataContainer = {
        name: formData.name,
        // "apiKey": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjb21wYW55bmFtZSI6InpheXJpZGUiLCJpZCI6IjM1NTY1Mjk3LTZjZGUtNDVmNy1hYjllLTAwMjU1Y2MxZGVlZSIsInVzZXJuYW1lIjoiemF5cmlkZSJ9.s3mr--J2KM72MWedho9Vo5qOZn-zSk3IR1ZXZ73xppw"
      };
      console.log(dataContainer);

      dispatch(addChannal(dataContainer));
      window.alert('Channal registered successfully!');
      handleClose();
      await dispatch(fetchChanal());
    }
  };
  // const [showSidebar, setShowSidebar] = useState(false);   
  //  const toggleSidebar = () => {
  //   setShowSidebar(!showSidebar);
  // };
  return (
    <div style={{ display: 'flex' }}>
      {/* <NavBar>
        <IconButton onClick={toggleSidebar}>
          <MenuIcon />
        </IconButton>
    </NavBar> */}
      
        <SideBar/>
      
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
              Add Channel
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 10, display: 'flex', flexDirection: 'column' }}>

              Name
              <TextField id="filled-basic" variant="filled" sx={{ width: '500px' }}
                onChange={handleChange} name="name" error={errors.name}
                helperText={errors.name ? 'Name is required' : ''}
              />

            </Typography>


            <Stack direction="row" spacing={2} sx={{ mt: 5, ml: 25 }}>
              <Button variant="outlined" sx={{ pr: 6, pl: 6 }}>Cancel</Button>

              <Button onClick={handleSubmit} variant="contained" href="#outlined-buttons" sx={{ pr: 6, pl: 6 }}>
                Add
              </Button>
            </Stack>
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
              <IconButton >
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
                <Button onClick={handleOpen}> Add Chanal</Button>
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{height:'100px'}}> 
          <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell onClick={handleSort}>Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedChannels.map((item,index) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "whitesmoke",
              borderRadius: "8px",
              padding: "8px",
            }}
          >
            <Switch
              checked={index === selectedIndex ? !isActive : isActive}
              onChange={() => handleSwitchChange(index)}
              classes={{
                checked:
                  index === selectedIndex
                    ? !isActive
                      ? "green"
                      : "error"
                    : isActive
                    ? "green"
                    : "error",
                track:
                  index === selectedIndex
                    ? !isActive
                      ? "success"
                      : "redColor"
                    : isActive
                    ? "success"
                    : "redColor",
              }}
            />
            <Typography
              variant="body2"
              ml={1}
              color={
                index === selectedIndex
                  ? !isActive
                    ? "success"
                    : "error"
                  : isActive
                  ? "success"
                  : "error"
              }
              className={
                index === selectedIndex
                  ? !isActive
                    ? "greenColor"
                    : "redColor"
                  : isActive
                  ? "greenColor"
                  : "redColor"
              }
            >
              {index === selectedIndex
                ? !isActive
                  ? "Active"
                  : "Inactive"
                : isActive
                ? "Active"
                : "Inactive"}
            </Typography>
          </div>
        </TableCell>  
               
                <TableCell>
                  <IconButton sx={{ background: 'gray', borderRadius: '0px' }}>
                    <RemoveRedEyeIcon />
                  </IconButton>


<IconButton onClick={() => handleEdit(item.id)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(item.id)} color='red'>
                    <DeleteIcon color='error' />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[7]}
          component="div"
          count={sortedChannels.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
          </TableContainer>
          
        </Box>
      </div>
    </div>
  );
};

export default ChannelPage;
