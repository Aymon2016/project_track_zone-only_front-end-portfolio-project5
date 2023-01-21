
import { createSlice} from '@reduxjs/toolkit'

const initialState = {
  projects: [
   
  ],
  error:null,
  
};
 export const projectSlice = createSlice({
    name:'project',
    initialState:initialState,
    reducers:{
        addcase:(state,action)=>{
            state.projects.push(action.payload)
        },
         deletecase:(state,action)=>{
            const id=action.payload
            state.projects=state.projects.filter((project)=>project.id!==id)
        },
        editcase:(state,action)=>{
            const {id,projectName,date}=action.payload
            const updateState=state.projects.filter((value)=>(value.id===id))
            
            if(updateState){
                updateState[0].id=id,
                updateState[0].projectName=projectName,
                updateState[0].date=date
            }
        }
        
    }
})


export const {addcase,deletecase,editcase}=projectSlice.actions;

export default projectSlice.reducer;