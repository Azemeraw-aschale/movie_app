import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const APIURL = "https://movie-app-lumh.onrender.com/api";

export const fetchUsersCount = createAsyncThunk(
  'users/fetchCount',
  async () => {
    try {
      const res = await axios.get(`${APIURL}/users/count`);
      console.log('The response from the server is', res.data, res.status);
      return res.data.count;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (page = 1) => {
    try {
      const res = await axios.get('/api/users');
      return res.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);
  const usersSlice = createSlice({
    name: 'usersCount',
    initialState: {
      isLoading: false,
      data: 0, // Initialize data with a default value
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchUsersCount.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      });
      builder.addCase(fetchUsersCount.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload; // Assign the count value directly to data
      });
      builder.addCase(fetchUsersCount.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
    },
  });

export default usersSlice.reducer;
