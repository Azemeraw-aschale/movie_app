// import { Try } from "@mui/icons-material";
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const APIURL = "https://movie-app-lumh.onrender.com/api";
// const APIURL = "http://localhost:8080/api";
export const addChannal = createAsyncThunk(
  'add/channels',
  async (channelData, { rejectWithValue }) => {
    try {
      
      console.log('The following data is sent to the server:', channelData);
      const formData = new FormData();
      formData.append('name', channelData.name);
      formData.append('img', channelData.img);

      const res = await axios.post(`${APIURL}/channels`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Data sent to the server:', res.data, res.status);

      return res.data;
    } catch (error) {
      console.log('Error sending data:', error);
      return rejectWithValue(error.message);
    }
  }
);

export const fetchChanal = createAsyncThunk("fetch/chanal", async (page = 1) => {
  try {
    const res = await axios.get(`${APIURL}/channels`);
    console.log("the response from the server is ", res.data, res.status);
    return res.data;
  } catch (error) {
    return error.code;
  }
});

export const deleteChanal = createAsyncThunk(
  "delete/chanal",
  async ({ id }) => {
    try {
      console.log("Id: " + id);
      const res = await axios.delete(`${APIURL}/channels/${id}`);
      console.log("Object is deleted with status code", res.status, res);
      return id;
    } catch (error) {
      return error.code;
    }
  }
);

export const updateChanal = createAsyncThunk(
  "update/program",
  async ({ id, newData }) => {
    try {
      const res = await axios.put(`${APIURL}/channels/${id}`, newData);
      return res.data;
    } catch (error) {
      return error.code;
    }
  }
);

const chanalSlice = createSlice({
  name: "chanals",
  initialState: {
    isLoading: false,
    data: [],
    // boloList: [],
    isError: false,
    addStatus: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChanal.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchChanal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchChanal.rejected, (state, action) => {
        state.isError = true;
      })
      .addCase(deleteChanal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.deleteStatus = "success";
        // state.data = state.data.filter(
        //   (chanals) => chanals.id !== action.payload
        // );
      })
      .addCase(deleteChanal.rejected, (state, action) => {
        state.deleteStatus = "error";
      })
      .addCase(addChannal.fulfilled, (state, action) => {
        const newData = [...Object.values(state.data), action.payload]; // Convert object values to an array and add the payload
      
        return {
          ...state,
          data: newData,
          addStatus: "success"
        };
      })
      .addCase(addChannal.rejected, (state, action) => {
        state.addStatus = "error";
      })
      .addCase(updateChanal.fulfilled, (state, action) => {
        const updatedChanal = action.payload;
        
        if (Array.isArray(state.data)) { // Check if state.data is an array
          state.data = state.data.filter((location) => location.id !== updatedChanal.id);
        }
      })
  },
});
 
   export default chanalSlice.reducer;
