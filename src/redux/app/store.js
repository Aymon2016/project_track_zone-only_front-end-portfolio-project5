


import { configureStore } from '@reduxjs/toolkit'
import projectReducer from '../feature/Slice'
import EventSlice from '../feature/EventSlice'
 const store = configureStore({
    reducer:{
        projectReducer:projectReducer,
        EventSlice:EventSlice
        
    }
})

export default store