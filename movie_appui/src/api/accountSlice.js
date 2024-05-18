import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const APIURL = "http://yene.tewostechsolutions.com/api";

// export const loginUsers = createAsyncThunk(
//     "add/loginaccount",
//     async (loginData, { rejectWithValue }) => {
//         try {
//             console.log("the following data are sent to server", loginData);
//             const res = await axios.post(`${APIURL}/login`, loginData, {
//                 headers: {
//                     "content-type": "application/json",
//                 }
//             });
//             console.log("data it sent tos server with ", res.data, res.status);
//             return res.data;
//         } catch (error) {
//             console.log("the error for unable to send data is ", error);
//             return rejectWithValue(error.message);
//         }
//     }
// );


export async function loginUsers(credentials) {
    try {
        const { data } = await axios.post(`${APIURL}/login`, credentials, {
            headers: {
                "content-type": "application/json",
            }
        });
        return Promise.resolve({ data });
    } catch (error) {
        return Promise.reject({ error });
    }
}
export async function registerUser(credentials) {
    try {
        const { data } = await axios.post(`${APIURL}/user/register`, credentials)
        return Promise.resolve({ data });

    } catch (error) {
        return Promise.reject({ error })
    }
}
export const registerAccount = createAsyncThunk(
    "add/register",
    async (registerData, { rejectWithValue }) => {
        console.log("weldsh test .................")
        try {
            const response = await axios.post(`${APIURL}/user/register`, registerData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log("data it sent tos server with ", response.data, response.status);
            return Promise.resolve(response)
        } catch (error) {
            return Promise.reject({ error })
        }

    });

export const updateProfile = createAsyncThunk(
    "update/account",
    async ({ phonenumber, password }, { rejectWithValue }) => {

        try {
            const response = await axios.put(`${APIURL}/user/${phonenumber}/password`, password, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log("data it sent tos server with ", response.data, response.status);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }

    });

export const updateProfileImage = createAsyncThunk(
    "update/account",
    async ({ id, avatar }, { rejectWithValue }) => {

        try {
            const response = await axios.post(`${APIURL}/users/${id}`, avatar, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log("data it sent tos server with ", response.data, response.status);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }

    });

export const userExist = createAsyncThunk(
    "user/checkUser",
    async (phonenumber, { rejectWithValue }) => {
        try {
            // const response = await axios.get(`${APIURL}/user/${phonenumber}/exists`);
            const response = await axios.get("https://mob.tewostechsolutions.com/api/user/0925357022/exists");
            console.log("data it sent tos server with ", response.data, response.status);
            return response.status;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    });

export const otpVerify = createAsyncThunk(
    "user/otpverify",
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${APIURL}/validateOtp`, userData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log("data it sent tos server with ", response.data, response.status);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    });
const locationSlice = createSlice({
    name: "map",
    initialState: {
        isLoading: false,
        data: [],
        isError: false
    },
    reducers: {},
    extraReducers: (builder) => {
        // builder.addCase(loginUsers.pending, (state, action) => {
        //     state.isLoading = true;
        // })
        //     .addCase(loginUsers.fulfilled, (state, action) => {
        //         state.isLoading = false;
        //         state.data = action.payload.user;
        //     })
        //     .addCase(loginUsers.rejected, (state, action) => {
        //         state.isError = true;
        //         state.isLoading = false;

        //     })

        builder.addCase(registerAccount.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(registerAccount.fulfilled, (state, action) => {
            state.isLoading = true;
            state.data = action.payload.user;
        })
        builder.addCase(registerAccount.rejected, (state, action) => {
            state.isError = true;
        })
    }
});

export default locationSlice.reducer;