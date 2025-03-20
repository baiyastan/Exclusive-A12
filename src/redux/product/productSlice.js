import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../axios/apiClient";


export const getProduct = createAsyncThunk(
    "products/get",
    async({category, search }, thunkAPI) => {
        try {
            let url = "/products"
            console.log(search);
            
            if(search) {
                url = `/products/search?q=${search}`
            } else if(category)  {
                url = `/products/category/${category}`
            }
            const res = await apiClient.get(url)

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
        categoryList: "laptops",
        search: ""
    }, 
    reducers: {
        setCategory: (state, action) => {
            state.categoryList = action.payload;
            state.search = ""
        }, 

        setSearch: (state, action) => {
            state.search = action.payload;
            state.categoryList = "";
        }
    },
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
export const {setCategory, setSearch} = productSlice.actions

export default productSlice.reducer