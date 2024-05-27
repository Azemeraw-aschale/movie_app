// import { Try } from "@mui/icons-material";
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// const APIURL = "http://localhost:8080/api";

export const fetchchanalCount = createAsyncThunk(
    'fetch/chanalcount',
    async (page = 1) => {
      try {
        const res = await axios.get('/api/chanals/count');
        console.log('The response from the server is', res.data, res.status);
        return res.data.count;
      } catch (error) {
        throw new Error(error);
      }
    }
  );

   const fetchchanalCountreducer = createSlice({
    name: "chanalcount",
    initialState: {
     isLoading: false,
     data: [],
     isError: false
    },
    reducers: {
      
    },
    extraReducers: (builder) => {
    
     builder.addCase(fetchchanalCount.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log(action.payload)
      state.data = action.payload
     })
    }
   });
 
   export default fetchchanalCountreducer.reducer;
