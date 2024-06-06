import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const APIURL = "https://movie-app-lumh.onrender.com/api";
// const APIURL = "http://localhost:8080/api";

export const fetchMovie = createAsyncThunk("fetch/movies", async (page = 1) => {
  try {
    const res = await axios.get(`${APIURL}/movies`);
    console.log("the response from the server is ", res.data, res.status);
    const numberOfMovies = res.data.length; // Count the number of movies

    return { data: res.data, programcount: numberOfMovies };
  } catch (error) {
    return error.code;
  }
});

export const fetchUser = createAsyncThunk("fetch/users", async (page = 1) => {
  try {
    const res = await axios.get(`${APIURL}/users`);
    console.log("the response from the server is ", res.data, res.status);
    const numberOfUsers = res.data.length; // Count the number of users

    return { data: res.data, usercount: numberOfUsers };
  } catch (error) {
    return error.code;
  }
});

export const fetchProgram = createAsyncThunk("fetch/programs", async (page = 1) => {
  try {
    const res = await axios.get(`${APIURL}/programs`);
    console.log("the response from the server is ", res.data, res.status);
    const numberOfPrograms = res.data.length; // Count the number of programs

    return { data: res.data, count: numberOfPrograms };
  } catch (error) {
    return error.code;
  }
});

export const fetchChanal = createAsyncThunk("fetch/channels", async (page = 1) => {
  try {
    const res = await axios.get(`${APIURL}/channels`);
    console.log("the response from the server is ", res.data, res.status);

    const numberOfChannels = res.data.length; // Count the number of channels

    return { data: res.data, channelcount: numberOfChannels };
  } catch (error) {
    return error.code;
  }
});

export const fetchPieChart = createAsyncThunk("fetch/piechart", async (page = 1) => {
  try {
    const res = await axios.get(`${APIURL}/piechart`);
    console.log("the response from the server is ", res.data, res.status);
    return res.data;
  } catch (error) {
    return error.code;
  }
});

export const fetchLineChart = createAsyncThunk("fetch/linechart", async (page = 1) => {
  try {
    const res = await axios.get(`${APIURL}/linechart`);
    console.log("the response from the server is ", res.data, res.status);
    return res.data;
  } catch (error) {
    return error.code;
  }
});

const dashboardSlice = createSlice({
  name: "dashboards",
  initialState: {
    isLoading: false,
    movieData: [],
    userData: [],
    channelData: [],
    programData: [],
    isError: false,
    addStatus: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) =>
          [fetchMovie.pending, fetchUser.pending, fetchProgram.pending, fetchChanal.pending].includes(action.type),
        (state, action) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        (action) =>
          [fetchMovie.fulfilled, fetchUser.fulfilled, fetchProgram.fulfilled, fetchChanal.fulfilled].includes(
            action.type
          ),
        (state, action) => {
          state.isLoading = false;
          if (action.type === fetchMovie.fulfilled.type) {
            state.movieData = action.payload.data;
          } else if (action.type === fetchUser.fulfilled.type) {
            state.userData = action.payload.data;
          } else if (action.type === fetchProgram.fulfilled.type) {
            state.programData = action.payload.data;
          } else if (action.type === fetchChanal.fulfilled.type) {
            state.channelData = action.payload.data;
          }
        }
      )
      .addMatcher(
        (action) =>
          [fetchMovie.rejected, fetchUser.rejected, fetchProgram.rejected, fetchChanal.rejected].includes(
            action.type
          ),
        (state, action) => {
          state.isLoading = false;
          state.isError = true;
        }
      )
      .addMatcher(
        (action) => [fetchPieChart.pending, fetchLineChart.pending].includes(action.type),
        (state, action) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        (action) => [fetchPieChart.fulfilled, fetchLineChart.fulfilled].includes(action.type),
        (state, action) =>
        {
          state.isLoading = false;
          if (action.type === fetchPieChart.fulfilled.type) {
            state.pieChartData = action.payload;
          } else if (action.type === fetchLineChart.fulfilled.type) {
            state.lineChartData = action.payload;
          }
        }
      )
      .addMatcher(
        (action) => [fetchPieChart.rejected, fetchLineChart.rejected].includes(action.type),
        (state, action) => {
          state.isLoading = false;
          state.isError = true;
        }
      );
  },
});

export default dashboardSlice.reducer;
