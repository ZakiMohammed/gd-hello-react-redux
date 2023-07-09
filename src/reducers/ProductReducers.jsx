import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: null,
        filtered: null,
        filter: null,
    },
    reducers: {
        getAll: (state, action) => {
            state.products = action.payload
            state.filtered = action.payload
        },
        setRate: (state, action) => {
            state.filter = {
                ...state.filter,
                rate: action.payload
            };
            state.filtered = state.products.filter(product => product.rating.rate >= action.payload)
        },
        setPrice: (state, action) => {
            state.filter = {
                ...state.filter,
                price: action.payload
            };
            state.filtered = state.products.filter(product => 
                action.payload - 50 <= product.price && 
                product.price <= action.payload)
        },
        clearFilter: (state) => {
            state.filter = null;
            state.filtered = [...state.products]
        }
    }
})

export const {
    getAll,
    setRate,
    setPrice,
    clearFilter,
} = productSlice.actions

export default productSlice.reducer
