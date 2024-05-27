import React, { useEffect, useState } from "react";
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
  // NativeSelect,
  // FormControl,
  // InputLabel,
  MenuItem,
  Select,
  // TextareaAutosize,
} from "@mui/material";
// import { FaEdit, FaTrash } from "react-icons/fa";
import Modal from "@mui/material/Modal";
import { light } from "@mui/material/styles/createPalette";
import { Filter, ImportExport, Search } from "@mui/icons-material";
import SideBar from "../SideBar/SideBar";
import NavBar from "../AppBar/NavBar";
import {
  // addChannal,
  fetchChanal,
  
  
} from "../../apis/chanalSlice";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, deleteMovie, fetchMovie } from "../../apis/movieSlice";
// import { fetchCatagory } from "../../apis/categorySlice";
import { fetchTypes } from "../../apis/typesSlice";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  height: "70%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  p: 4,
  // display: {
  //   xs: "flex",
  //   sm: "block",
  // },
  justigyContent: "center",
  // alignItems: "center",
};

const Program = ({ show, onClose }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const fetchCatagory = () => {
    fetch("http://localhost:8080/api/catagories")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Catagory of Data is ", data.catagory);
        setUsers(data.catagory);
      });
  };

  useEffect(() => {
    dispatch(fetchMovie());
    dispatch(fetchChanal());
    dispatch(fetchTypes());
    // dispatch(fetchCatagory());

    fetchCatagory();
  }, [dispatch]);

  // useEffect(()=>{
  //   dispatch(fetchCatagory());
  // },[dispatch]);

  const chanal = useSelector((state) => state.chanals.data);
  const sortedChannels = chanal && chanal.channels ? [...chanal.channels] : [];
  console.log(sortedChannels);

  const prog_data = useSelector((state) => state.programs.data);

  const movies_data = useSelector((state) => state.catagories.typesdata);

  const type_data = useSelector((state) => state.types.data);

  const types = type_data && type_data.types ? [...type_data.types] : [];


  const movies =
    movies_data && movies_data.catagories ? [...movies_data.catagories] : [];
  console.log("types data", types);
  console.log("movies data", movies);
  console.log("mnmnmnmnm", prog_data);

  const ["", setData] = useState([
    {
      id: 3,
      title: "Bob Johnson",
      duration: "duration",
      description: "description",
      status: true,
    },
    {
      id: 2,
      title: "Jane Smith",
      duration: "durationd",
      description: "description",
      status: false,
    },
    {
      id: 1,
      title: "John Doe",
      duration: "durationd",
      description: "description",
      status: true,
    },
  ]);
  const initialFormData = {
    url: "",
    duration: "",
    channel: "",
    desc: "",
    title: "",
    categori: "",
    type: "",
  };

  // Inside your component
  const [formData, setFormData] = useState(initialFormData);
  // const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  // const [age, setAge] = useState("");

  // Handle change event of channel select
  // const handleChange = (event) => {
  //   const selectedAge = event.target.value;
  //   setAge(selectedAge);
  // };
  // const toggleStatus = (id) => {
  //   setData((prevData) =>
  //     prevData.map((item) =>
  //       item.id === id ? { ...item, status: !item.status } : item
  //     )
  //   );
  // };

  const handleEdit = (id) => {
    console.log(`Editing item with ID: ${id}`);
  };

  const handleDelete = async (movie_id) => {
    console.log(`Deleting item with ID: ${movie_id}`);
    const userConfirmation = window.confirm(
      "Are you sure you want to delete channel?"
    );

    if (userConfirmation) {
      console.log("id for delete is:", movie_id);
      dispatch(deleteMovie({ id: movie_id }));
      await dispatch(fetchMovie());
      window.location.reload();
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
    const fields = [
      "url",
      "duration",
      "channel",
      "desc",
      "title",
      "categori",
      "type",
    ];

    fields.forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = true;
      }
    });
    setErrors(newErrors);
    // aa=formData.url;
    // console.log("hhhhhhhhhhhhgghghghg", formData.desc);
    // if (Object.values(newErrors).every((error) => !error)) {
    //   console.log("hhhhhhhhhhhhhhh");
    const dataContainer = {
      // name: formData.name,
      videourl: formData.url,
      description: formData.desc,
      duration: parseInt(formData.duration, 10),
      channelId: 1,
      title: formData.title,
      categoryId: 1,
      typeId: 1,
    };
    console.log(dataContainer);

    dispatch(addMovie(dataContainer));
    window.alert("movie registered successfully!");
    handleClose();
    await dispatch(fetchMovie());
    // }
  };

  const [isActive, setIsActive] = useState(false);

  // const handleSwitchChange = () => {
  //   setIsActive(!isActive);
  // };
  const handleSwitchChange = (index) => {
    setSelectedIndex(index);
    setIsActive((prevState) => !prevState);
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        <SideBar />
        <div style={{ flex: "1" }}>
          <NavBar /> {/* Include the NavBar component */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                style={{ fontWeight: "bold", fontSize: "30px" }}
              >
                Add Program
              </Typography>
              <Box sx={{ display: "flex", mt: 1 }}>
                <Box>
                  <Typography
                    id="modal-modal-description"
                    sx={{ mt: 4, display: "flex", flexDirection: "column" }}
                  >
                    Vedio URL
                    <TextField
                      id="filled-basic"
                      variant="filled"
                      sx={{ width: "500px" }}
                      onChange={handleChange}
                      name="url"
                    />
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    sx={{ mt: 4, display: "flex", flexDirection: "column" }}
                  >
                    Duration
                    <TextField
                      id="filled-basic"
                      variant="filled"
                      sx={{ width: "500px" }}
                      onChange={handleChange}
                      name="duration"
                    />
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    sx={{ mt: 4, display: "flex", flexDirection: "column" }}
                  >
                    Channel
                    <Select
                      id="filled-basic"
                      variant="filled"
                      sx={{ width: "500px" }}
                      value={
                        sortedChannels.length > 0 ? sortedChannels[0].id : ""
                      }
                      onChange={handleChange}
                      name="channel"
                    >
                      {sortedChannels.map((channel) => (
                        <MenuItem key={channel.id} value={channel.id}>
                          {channel.name}
                        </MenuItem>
                      ))}
                    </Select>
                    {/* Rest of your code */}
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    sx={{
                      mt: 4,
                      ml: 4,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    Descriptions
                    {/* <textarea
              id="filled-basic"
              sx={{ width: '500px', minHeight: '150px', resize: 'vertical' }}
              value=""
              onChange={handleChange}
              name="desc"
              placeholder="Enter Description"
            /> */}
                    <TextField
                      name="desc"
                      id="filled-basic"
                      variant="filled"
                      multiline
                      rows={4}
                      onChange={handleChange}
                      placeholder="Enter Description"
                      style={{
                        width: "500px",
                        minHeight: "150px",
                        resize: "vertical",
                      }}
                    />
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
                  <Typography
                    id="modal-modal-description"
                    sx={{
                      mt: 4,
                      ml: 4,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    Title
                    <TextField
                      id="filled-basic"
                      variant="filled"
                      sx={{ width: "500px" }}
                      onChange={handleChange}
                      name="title"
                    />
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    sx={{
                      mt: 4,
                      ml: 4,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    Types
                    <Select
                      id="filled-basic"
                      variant="filled"
                      sx={{ width: "500px" }}
                      value={types.length > 0 ? types[0].id : ""}
                      onChange={handleChange}
                      name="type"
                    >
                      {types.map((channel) => (
                        <MenuItem key={channel.id} value={channel.id}>
                          {channel.name}
                        </MenuItem>
                      ))}
                    </Select>
                    {/* Rest of your code */}
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    sx={{
                      mt: 4,
                      ml: 4,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    Category
                    <Select
                      id="filled-basic"
                      variant="filled"
                      sx={{ width: "500px" }}
                      value={users.length > 0 ? users[0].id : ""}
                      onChange={handleChange}
                      name="catagory"
                    >
                      {users.map((channel) => (
                        <MenuItem key={channel.id} value={channel.id}>
                          {channel.name}
                        </MenuItem>
                      ))}
                    </Select>
                    {/* Rest of your code */}
                  </Typography>
                  <Stack direction="row" spacing={2} sx={{ mt: 5, ml: 25 }}>
                    <Button
                      variant="outlined"
                      sx={{ pr: 6, pl: 6 }}
                      onClick={handleClose}
                    >
                      Cancel
                    </Button>

                    <Button
                      onClick={handleSubmit}
                      variant="contained"
                      href="#outlined-buttons"
                      sx={{ pr: 6, pl: 6 }}
                    >
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
                  inputProps={{ "aria-label": "search" }}
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
                <IconButton>
                  <Filter />
                </IconButton>
                <Typography variant="body1">Add Filter</Typography>
              </Box>
              <Box display="flex" alignItems="center" ml={2}>
                <Typography
                  variant="body1"
                  bgcolor="blue"
                  p={1}
                  borderRadius={2}
                >
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
  {prog_data &&
    prog_data.movies &&
    prog_data.movies.map((item, index) => (
      <TableRow key={item.id}>
        <TableCell>{item.id}</TableCell>
        <TableCell>{item.title}</TableCell>
        <TableCell>{item.duration}</TableCell>
        <TableCell>{item.description}</TableCell>
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
          <IconButton sx={{ background: "gray", borderRadius: "0px" }}>
            <RemoveRedEyeIcon />
          </IconButton>
          <IconButton onClick={() => handleEdit(item.id)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => handleDelete(item.id)} color="red">
            <DeleteIcon color="error" />
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
