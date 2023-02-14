
import { createSlice} from '@reduxjs/toolkit'

const initialState = {
  Events: [
   
  ],
  error:null,
  
};
 export const eventSlice = createSlice({
    name:'events',
    initialState:initialState,
    reducers:{
        addcase:(state,action)=>{
            state.Events.push(action.payload)
        }
        
    }
})


export const {addcase,deletecase,editcase}=eventSlice.actions;

export default eventSlice.reducer;