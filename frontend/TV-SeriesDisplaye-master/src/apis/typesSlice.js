import { Try } from "@mui/icons-material";
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const APIURL = "http://localhost:8080/api";



export const fetchTypes=createAsyncThunk(
  "fetch/program",
  async ( page = 1 ) => {
  try{
      const res = await axios.get(`${APIURL}/types`);
      console.log("the response from server types is ",res.data,res.status);
      return res.data;
   } catch (error) {
     return error.code;
   }
});




   const typesSlice = createSlice({
    name: "program",
    initialState: {
     isLoading: false,
     data: [],
     isError: false
    },
    reducers: {
      
    },
    extraReducers: (builder) => {
     builder.addCase(fetchTypes.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log(action.payload)
      state.data = action.payload
     })
    }
   });
 
   export default typesSlice.reducer;
