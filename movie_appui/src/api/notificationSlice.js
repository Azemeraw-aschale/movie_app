
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAdverts = createAsyncThunk(
    "advert/getAdvert",
    async () => {
        try {
            const res = await axios.get("https://mob.tewostechsolutions.com/api/ads", {
                headers: {
                    "content-type": "application/json",
                }
            });
            console.log("data it sent tos server with ", res.data, res.status);
            return res.data;
        } catch (error) {
            return error.code;
        }
    }
);

export const getNotification = createAsyncThunk(
    "notify/getNotify",
    async ({ rejectWithValue }) => {
        try {
            const token = "";
            const res = await axios.get("http://192.168.1.43:8000/api/notifications", {
                headers: {
                    "content-type": "application/json",
                    "Authorization": `Beerer ${token}`
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

export const deleteNotificationBolo = createAsyncThunk(
    "delete/notifyBolo",
    async (id, { rejectWithValue }) => {

        try {
            const token = ""
            const response = await axios.post(`http://192.168.1.43:8000/api/notifications/remove/bolos/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Beerer ${token}`
                },
            });
            console.log("data it sent tos server with ", response.data, response.status);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }

    });

export const deleteNotificationThirdParty = createAsyncThunk(
    "delete/notifyThirdparty",
    async (id, { rejectWithValue }) => {

        try {
            const token = ""
            const response = await axios.post(`http://192.168.1.43:8000/api/notifications/remove/thirdparties/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Beerer ${token}`
                },
            });
            console.log("data it sent tos server with ", response.data, response.status);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }

    });

export const deleteNotificationRoadFund = createAsyncThunk(
    "delete/notifyRoadFund",
    async (id, { rejectWithValue }) => {

        try {
            const token = ""
            const response = await axios.post(`http://192.168.1.43:8000/api/notifications/remove/roadfunds/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Beerer ${token}`
                },
            });
            console.log("data it sent tos server with ", response.data, response.status);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }

    });

export const deleteNotificationFullInsurance = createAsyncThunk(
    "delete/notifyfullinsurance",
    async (id, { rejectWithValue }) => {

        try {
            const token = ""
            const response = await axios.post(`http://192.168.1.43:8000/api/notifications/remove/fullinsurances/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Beerer ${token}`
                },
            });
            console.log("data it sent tos server with ", response.data, response.status);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }

    });

const notifySlice = createSlice({
    name: "notify",
    initialState: {
        isLoading: false,
        notifyData: [],
        isError: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAdverts.pending, (state, action) => {
            state.isLoading = false;
        })
            .addCase(getAdverts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.notifyData = action.payload.data;
            })
            .addCase(getAdverts.rejected, (state, action) => {
                state.isError = true;
            })

        builder.addCase(deleteNotificationBolo.pending, (state, action) => {
            state.isLoading = true;
        })
            .addCase(deleteNotificationBolo.fulfilled, (state, action) => {
                state.isLoading = true;
                state.data = action.payload.user;
            })
            .addCase(deleteNotificationBolo.rejected, (state, action) => {
                state.isError = true;
            })
    }
});

export default notifySlice.reducer;