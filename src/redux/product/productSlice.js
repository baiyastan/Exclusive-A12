import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../axios/apiClient";


export const getProduct = createAsyncThunk(
    "products/get",
    async(category, thunkAPI) => {
        try {
            const res = await apiClient.get(`/products/category/${category}`)

            return res.data.products
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message || "not found")
        }
    }
)

const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        loading: false,
        error: null,
    }, 
    reducers: {},
    extraReducers: (builder) => {
        builder
         .addCase(getProduct.pending, (state) => {
            state.loading = true,
            state.error = null
         })
         .addCase( getProduct.fulfilled, (state, action) => {
            state.loading = false,
            state.products = action.payload
         })
         .addCase(getProduct.rejected, (state, action) => {
            state.loading = false,
            state.error = action.payload
         })
    }
})

export default productSlice.reducer