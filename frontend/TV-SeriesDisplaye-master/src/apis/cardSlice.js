import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const APIURL = "https://movie-app-lumh.onrender.com/api";
// http://localhost:8080
// const APIURL="http://localhost:8080/api"
export const fetchMusic = createAsyncThunk("fetch/music", async (page = 1) => {
  try {
    const res = await axios.get(`${APIURL}/movies`);
    console.log("the response from the server is ", res.data, res.status);
    return res.data;
  } catch (error) {
    return error.code;
  }
});


const musicSlice = createSlice({
  name: "music",
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
      .addCase(fetchMusic.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchMusic.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchMusic.rejected, (state, action) => {
        state.isError = true;
      })
  },
});
 
export default musicSlice.reducer;
