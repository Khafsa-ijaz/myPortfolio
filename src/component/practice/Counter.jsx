import { useDispatch, useSelector } from "react-redux";
export function Counter(){
    const dispatch=useDispatch();
    const count =useSelector((state)=>state.coun);
    return(
       <div>
        <h2>hi{count}</h2>
        <button onClick={()=>dispatch({type:"ADD"})}>+</button>
        <button onClick={()=>dispatch({type:"DELETE"})}>-</button>
       </div>
    )
}