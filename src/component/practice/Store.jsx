import { configureStore, createSlice } from "@reduxjs/toolkit";
import {ReducerQuiz} from "./ReducerQuiz"
// import {createStore}  from "redux"
// function reducer(state={coun:0},action)
// {
//  switch(action.type)
//  {
//     case "ADD":
//         return{coun:state.coun+1};
//     case "DELETE":
//         return{coun:state.coun-1}
//     default:
//         return state;
//  }
// }

// const store = createStore(reducer);

// const initialState = {tasks:[]};
// function tasks(state=initialState,action)
// {
//   switch(action.type)
//   {
//     case "ADD":
    
//     return{
// ...state,
// tasks:[...state.tasks,action.payload]

//     }
//     case "DELETE":
//         return{
//             ...state,
//             tasks: state.tasks.filter((t,index)=>index!==action.payload)
//         }
//      default:
//         return state;
//   }
// }
// const store =createStore(tasks)
// export default store;
 const initialState={
        tasks:[]
    }
const tasks =createSlice({
    name:"tasks",
    initialState,
    reducers:{
        addTask(state,action){
          
            state.tasks.push({text:action.payload.text,flag:0});
           
        },
        deleteTask(state,action){
           
            state.tasks=state.tasks.filter((_,index)=>index!==action.payload)
          
        },
        favTask(state,action){
            const item=action.payload;
            if(state.tasks[item].flag===0)
            {
              state.tasks[item].flag=1
            }
            else 
                 state.tasks[item].flag=0;
        }
    }
});
export const { addTask,deleteTask, favTask} = tasks.actions
 export const store=configureStore({
    reducer:{
        tasks: tasks.reducer,
        quiz:ReducerQuiz.reducer,
    }
})

