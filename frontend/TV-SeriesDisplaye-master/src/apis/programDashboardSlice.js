import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const APIURL = "http://localhost:8080/api";

export const fetchmoviesCount = createAsyncThunk(
  'fetch/program',
  async (page = 1) => {
    try {
      const res = await axios.get('/api/movies/count');
      console.log('The response from the server is', res.data, res.status);
      return res.data.count;
    } catch (error) {
      throw new Error(error);
    }
  }
);

const programcountSlice = createSlice({
  name: "programcount",
  initialState: {
    isLoading: false,
    data: 0,
    isError: false
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchmoviesCount.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchmoviesCount.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchmoviesCount.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  }
});

export default programcountSlice.reducer;
