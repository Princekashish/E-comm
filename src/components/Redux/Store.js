import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './Featuere/Cartslice'

export const store = configureStore({
    reducer:{
        cart: CartReducer, 
    }

})