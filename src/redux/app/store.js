


import { configureStore } from '@reduxjs/toolkit'
import projectReducer from '../feature/Slice'
 const store = configureStore({
    reducer:{
        projectReducer:projectReducer,
        
    }
})

export default store