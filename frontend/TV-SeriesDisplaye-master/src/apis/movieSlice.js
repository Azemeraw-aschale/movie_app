// import { Try } from "@mui/icons-material";
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const APIURL = "http://localhost:8080/api";

export const addMovie = createAsyncThunk(
  "add/program",
  async (movieData, { rejectWithValue }) => {
    try {
      console.log("the following data is sent to the server", movieData);
      const res = await axios.post(`${APIURL}/movies`, movieData, {
        headers: {
          "content-type": "application/json",
        },
      });
      console.log("data sent to the server with ", res.data, res.status);

      return res.data;
    } catch (error) {
      console.log("the error for unable to send data is ", error);
      return rejectWithValue(error.message);
    }
  }
);

export const fetchMovie = createAsyncThunk("fetch/movies", async (page = 1) => {
  try {
    const res = await axios.get(`${APIURL}/movies`);
    console.log("the response from the server is ", res.data, res.status);
    return res.data;
  } catch (error) {
    return error.code;
  }
});

export const deleteMovie = createAsyncThunk(
  "delete/program",
  async ({ id }) => {
    try {
      console.log("Id: " + id);
      const res = await axios.delete(`${APIURL}/movies/${id}`);
      console.log("Object is deleted with status code", res.status, res);
      return id;
    } catch (error) {
      return error.code;
    }
  }
);

export const updateMovie = createAsyncThunk(
  "update/program",
  async ({ id, newData }) => {
    try {
      const res = await axios.put(`${APIURL}/movies/${id}`, newData);
      return res.data;
    } catch (error) {
      return error.code;
    }
  }
);

const movieSlice = createSlice({
  name: "programs",
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
      .addCase(fetchMovie.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchMovie.rejected, (state, action) => {
        state.isError = true;
      })  
      .addCase(deleteMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.deleteStatus = "success";
        // state.data = state.data.filter(
        //   (chanals) => chanals.id !== action.payload
        // );
      })
      .addCase(deleteMovie.rejected, (state, action) => {
        state.deleteStatus = "error";
      })
      .addCase(addMovie.fulfilled, (state, action) => {
        const newData = [...Object.values(state.data), action.payload]; // Convert object values to an array and add the payload
      
        return {
          ...state,
          data: newData,
          addStatus: "success"
        };
      })
      .addCase(addMovie.rejected, (state, action) => {
        state.addStatus = "error";
      })
      .addCase(updateMovie.fulfilled, (state, action) => {
        const updateMovie = action.payload;
        
        if (Array.isArray(state.data)) { // Check if state.data is an array
          state.data = state.data.filter((programs) => programs.id !== updateMovie.id);
        }
      })
  },
});
 
   export default movieSlice.reducer;
