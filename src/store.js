import { configureStore } from '@reduxjs/toolkit'
import productReducers from './reducers/ProductReducers'

export default configureStore({
    reducer: {
      product: productReducers,
    }
})
