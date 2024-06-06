// import { Try } from "@mui/icons-material";
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const APIURL ="https://movie-app-lumh.onrender.com/api";
// const APIURL = "http://localhost:8080/api";




export const fetchCatagory=createAsyncThunk(
  "fetch/program",
  async ( page = 1 ) => {
  try{
      const res = await axios.get(`${APIURL}/catagories`);
      console.log("the response from server catafdsjnfh is ",res.data,res.status);
      return res.data;
   } catch (error) {
     return error.code;
   }
});



   const categorySlice = createSlice({
    name: "catagories",
    initialState: {
     isLoading: false,
     data: [],
     isError: false
    },
    reducers: {
      
    },
    extraReducers: (builder) => {

      builder.addCase(fetchCatagory.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchCatagory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchCatagory.rejected, (state, action) => {
        state.isError = true;
      })  
    }
   });
 
   export default categorySlice.reducer;
