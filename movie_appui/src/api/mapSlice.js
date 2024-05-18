import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchLocations = createAsyncThunk(
  "fetch/locations", async (page = 1) => {
    try {
      const res = await axios.get(`https://mapapi.gebeta.app/api/v1/route/findallowned?page=${page}&apiKey=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImUxMjU4MmE0LTdmNmQtNDg1My04OTY4LTAyYjIyM2NmYTJjMyJ9.YuHJJ9E84karRp0pB3jdkU83_LWIojhDoSXVoBx0Ep4`);
      console.log("the response from server is ", res.data, res.status);
      return res.data;
    } catch (error) {
      return error.code;
    }

  });
export const getNearByLocation = createAsyncThunk(
  "fetch/nearby", async ({ lat, long, type }) => {
    try {
      console.log("you entered the following data", lat, long, type);
      const res = await axios.get(`https://mapapi.gebeta.app/api/v1/route/getOwnedNearby?lat=${lat}1&lon=${long}&apiKey=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImUxMjU4MmE0LTdmNmQtNDg1My04OTY4LTAyYjIyM2NmYTJjMyJ9.YuHJJ9E84karRp0pB3jdkU83_LWIojhDoSXVoBx0Ep4&type=${type}&detailLevel=1`);
      console.log("the response from server is ", res.data, res.status);
      return res.data;
    } catch (error) {
      return error.code;
    }

  });
export const deleteLocation = createAsyncThunk(
  "delete/locations",
  async ({ newData, id }) => {
    try {
      const res = await axios.delete(`https://mapapi.gebeta.app/api/v1/route/deletePlace?id=${id}&apiKey=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImUxMjU4MmE0LTdmNmQtNDg1My04OTY4LTAyYjIyM2NmYTJjMyJ9.YuHJJ9E84karRp0pB3jdkU83_LWIojhDoSXVoBx0Ep4`, newData);
      console.log("object is delte with status code ", res.status, res)
      return id;
    } catch (error) {
      return error.code;
    }
  }
);
export const updateLocation = createAsyncThunk(
  "upate/locations",
  async ({ id }) => {
    try {
      const res = await axios.put("http://mapapi.gebeta.app/api/v1/route/updatePlace");
      return res.data;
    } catch (error) {
      return error.code;
    }
  }
);
export const addLocations = createAsyncThunk(
  "add/locations",
  async (locationData, { rejectWithValue }) => {
    try {
      console.log("the following data are sent to server", locationData);
      const res = await axios.post("https://mapapi.gebeta.app/api/v1/route/addPlace", locationData, {
        headers: {
          "content-type": "application/json",
        }
      });
      console.log("data it sent tos server with ", res.data, res.status);

      return res.data;
    } catch (error) {
      console.log("the error for unable to send data is ", error);
      return rejectWithValue(error.message);
    }
  }
);

const locationSlice = createSlice({
  name: "map",
  initialState: {
    isLoading: false,
    data: [],
    isError: false
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchLocations.pending, (state, action) => {
      state.isLoading = true;
    })
      .addCase(fetchLocations.fulfilled, (state, action) => {
        state.isLoading = false;
        //   state.data = action.payload;
        state.data = action.payload.data.places
      })
      .addCase(getNearByLocation.fulfilled, (state, action) => {
        state.isLoading = false;
        //   state.data = action.payload;   
        console.log("added is ", action.payload.data)
        state.data = action.payload.data
      })
      .addCase(fetchLocations.rejected, (state, action) => {
        state.isError = true;
      }).addCase(deleteLocation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.deleteStatus = "success";
        state.data = state.data.filter((location) => location.id !== action.payload);
      }
      )
      .addCase(deleteLocation.rejected, (state, action) => {
        state.deleteStatus = "error";
      })
      .addCase(addLocations.fulfilled, (state, action) => {
        state.data.push(action.payload);
        state.addStatus = "success";
      })
      .addCase(addLocations.rejected, (state, action) => {
        state.addStatus = "error";
      }).addCase(updateLocation.fulfilled, (state, action) => {
        const updatedLocation = action.payload;
        const index = state.data.findIndex(location => location.id === updatedLocation.id);
        if (index !== -1) {
          state.entities[index] = updatedLocation;
        }
      })
  }
});

export default locationSlice.reducer;