import { Try } from "@mui/icons-material";
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const APIURL = "http://localhost:8080/api";

export const Login=createAsyncThunk(
    "login/login",
    async(loginData,{rejectWithValue})=>{
        try{
        console.log("the following data is sent to server ",loginData);
        const res=await axios.post(`${APIURL}/login`,loginData,
        {
            headers:{
                "content-type": "application/json",

            }
        });
        console.log("data sent to the server with",res.data,res.status);
        return res.data;
    }catch(error){
        console.log("the error for unable to send data is",error);
        return rejectWithValue(error.message);

    }

}
);
const loginSlice=createSlice({
    name:"logins",
    initialState:{
        isLoading:false,
        data:[],
        isError:false,
        addStatus:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(Login.fulfilled,(state,action)=>{
            const newData=[...Object.values(state.data),action.payload];

            // return 
            return{
                ...state,
                data:newData,
                addStatus:"status"
            };
        })
        .addCase(Login.rejected,(state,action)=>{
            state.addStatus="error";
        })
    }
})
export default loginSlice.reducer;
