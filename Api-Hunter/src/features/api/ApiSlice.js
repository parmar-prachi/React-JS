import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRequest, axiosRequest } from "./apiService";

// FETCH using fetch () :

export const fetchApi = createAsyncThunk(
    "api/fetchApi",
    async ({ url, method, body }, { rejectWithValue }) => {
        try {
            const res = await fetchRequest(url, method, body);

            return {
                data: res.data,
                status: res.status,
                method,
                url,
            };   // Returns formatted response.
        } catch (error) {
            return rejectWithValue(error.message); 
        }  // If error → send error message to Redux state.
    }
);

// FETCH using axios : 

export const axiosApi = createAsyncThunk(
    "api/axiosApi",
    async ({ url, method, body }, { rejectWithValue }) => {
        try {
            const res = await axiosRequest(url, method, body);

            return {
                data: res.data,
                status: res.status,
                method,
                url,
            };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const apiSlice = createSlice({
    name: "api",
    initialState: {
        loading: false,  
        data: null,
        error: null,
        status: null,
        method: "",
        url: "",
    },
    reducers: {
        clearState: (state) => {
            state.loading = false;
            state.data = null;
            state.error = null;
            state.status = null;
            state.method = "";
            state.url = "";
        },
    },
    extraReducers: (builder) => {
        builder
            // FETCH () :: 

            .addCase(fetchApi.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchApi.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
                state.status = action.payload.status;
                state.method = action.payload.method;
                state.url = action.payload.url;
            })
            .addCase(fetchApi.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Something Went Wrong";
            })

            // Axois () :: 

            .addCase(axiosApi.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(axiosApi.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
                state.status = action.payload.status;
                state.method = action.payload.method;
                state.url = action.payload.url;
            })
            .addCase(axiosApi.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Something Went Wrong";
            });
    },
});

export const { clearState } = apiSlice.actions;
export default apiSlice.reducer;