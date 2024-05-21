import { Try } from "@mui/icons-material";
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const APIURL = "http://yene.tewostechsolutions.com/api";

export const addProgram=createAsyncThunk
(    
"add/program",
async (chanalData, { rejectWithValue }) => {
    try {
      console.log("the following data are sent to server", chanalData);
      const res = await axios.post(`${APIURL}/addchanal`, chanalData, {
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
export const fetchProgram=createAsyncThunk(
    "fetch/program",
    async ( page = 1 ) => {
    try{
        const res = await axios.get(`${APIURL}/fetchData`);
        console.log("the response from server is ",res.data,res.status);
        return res.data;
     } catch (error) {
       return error.code;
     }
});
export const deleteProgram = createAsyncThunk(
    "delete/program",
    async ({newData,id}) => {
      try {
        const res = await axios.delete(`${APIURL}/fetchData`,newData);
        console.log("object is delte with status code ",res.status,res)
        return id;
      } catch (error) {
        return error.code;
      }
    }
   );
export const updateProgram= createAsyncThunk(
    "upate/program",
    async({id}) =>{
      try {
        const res = await axios.put(`${APIURL}/update`);
        return res.data;
      } catch (error) {
        return error.code;
      }
    }
   );


   const programSlice = createSlice({
    name: "program",
    initialState: {
     isLoading: false,
     data: [],
     isError: false
    },
    reducers: {
      
    },
    extraReducers: (builder) => {
     builder.addCase(fetchProgram.pending, (state, action) => {
      state.isLoading = true;
     })
     builder.addCase(fetchProgram.fulfilled, (state, action) => {
      state.isLoading = false;
    //   state.data = action.payload;
      state.data = action.payload.data.chanals
     })
     builder.addCase(fetchProgram.rejected, (state, action) => {
      state.isError = true;
     }).addCase(deleteProgram.fulfilled,(state,action) =>{
      state.isLoading = false;
      state.deleteStatus = "success";
      state.data = state.data.filter((program) => program.id !== action.payload);
     }
      )
      .addCase(deleteProgram.rejected, (state, action) => {
        state.deleteStatus = "error";
      })
      .addCase(addProgram.fulfilled, (state, action) => {
        state.data.push(action.payload);
        state.addStatus = "success";
      })
      .addCase(addProgram.rejected, (state, action) => {
        state.addStatus = "error";
      }).addCase(updateProgram.fulfilled,(state,action) =>{
        const updateProgram = action.payload;
        const index = state.data.findIndex(program => program.id === updateProgram.id);
        if (index !== -1) {
          state.entities[index] = updateProgram;
        }      })
    }
   });
 
   export default programSlice.reducer;
