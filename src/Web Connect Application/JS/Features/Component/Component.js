import { createSlice} from "@reduxjs/toolkit";


const initialState={
    Component:[],
    Notification:[]
}

export const componentSlice=createSlice({
    name:'components',
    initialState,
    reducers:{
        ChatComponent:(state,action)=>{
            return {...state,Component:action.payload.result}
        }
        ,
        ChatNotification:(state,action)=>{
            return {...state,Notification:action.payload.values}
        }
        ,
        ResetComponents:()=>{
            return{
                Component:[],
                Notification:[]
            }
        }
    }
})


export default componentSlice.reducer

export const {ChatComponent,ChatNotification,ResetComponents} =componentSlice.actions
