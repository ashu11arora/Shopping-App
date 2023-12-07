import { createSlice } from "@reduxjs/toolkit"



export const CartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        //reducer fun taken two thing as an argument
        add:(state,action)=>{
            //action.payload show argument passes in this fun
                state.push(action.payload);
        },
        remove:(state,action)=>{
                return state.filter((item)=>item.id!==action.payload);

        },
    }
});
export const  {add,remove}=CartSlice.actions;
export default CartSlice.reducer;



 
