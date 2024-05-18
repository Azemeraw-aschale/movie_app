import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPermission = createAsyncThunk(
  '/fetch/permission',
  async (name, { rejectWithValue }) => {
    try {
      console.log("the following data are sent to server", name);
      const res = await axios.get("http://192.168.1.6:8000/api/getpermission", {
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
export const fetchRoles = createAsyncThunk(
  '/fetch/roles',
  async (name, { rejectWithValue }) => {
    try {
      console.log("the following data are sent to server", name);
      const res = await axios.get("http://192.168.1.6:8000/api/getgroup", {
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
// export const addPermission = createAsyncThunk(
//   '/add/permission',
//   async ({permission}) =>{
//     try {
//        const res = await axios.post('http://192.168.1.4:8000/api/createpermission',permission,{
//         headers:{
//           "content-type": "application/json",

//         }
//        });
//        return res.data;
//     } catch (error) {
//        return error.data;
//     }
//   }
// );
export const deletePermission = createAsyncThunk(
  "delete/permission",
  async ({ id }) => {
    try {
      const res = await axios.delete(`http://192.168.1.6:8000/api/deletepermission/${id}`);
      console.log("object is delte with status code ", res.status, res)
      return id;
    } catch (error) {
      return error.code;
    }
  }
);
export const addPermission = createAsyncThunk(
  "add/permission",
  async (permission, { rejectWithValue }) => {
    try {
      console.log("the following data are sent to server", permission);
      const res = await axios.post("http://192.168.1.6:8000/api/createpermission", permission, {
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
export const addRole = createAsyncThunk(
  "add/role",
  async (role, { rejectWithValue }) => {
    try {
      console.log("the following data are sent to server", role);
      const res = await axios.post("http://192.168.1.6:8000/api/creategroup", role, {
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
const userManagementSlice = createSlice(
  {
    name: "user",
    initialState: {
      isLoading: false,
      user: [],
      isError: false
    },
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchPermission.fulfilled, (state, action) => {
        state.isLoading = true;
        state.user = action.payload;
      })
        .addCase(fetchRoles.fulfilled, (state, action) => {
          state.isLoading = true;
          state.user = action.payload;
        })
        .addCase(addPermission.pending, (state, action) => {
          state.isLoading = true;
        })
        .addCase(addPermission.fulfilled, (state, action) => {
          console.log("Before push:", state.user);
          console.log("Payload:", action.payload);
          state.user.push(action.payload);
          console.log("After push:", state.user);
        }

        )
        .addCase(addRole.fulfilled, (state, action) => {
          console.log("Before push:", state.user);
          console.log("Payload:", action.payload);
          state.user.push(action.payload);
          console.log("After push:", state.user);
        }

        )
        .addCase(deletePermission.fulfilled, (state, action) => {
          state.isLoading = false;
          state.deleteStatus = "success";
          state.user = state.user.filter((permission) => permission.id !== action.payload);
        }
        )
    }
  }
);

export default userManagementSlice.reducer;