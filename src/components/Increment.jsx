import { useState } from "react";
import style from './Series.module.css'

  export const Increment =()=>
{
    
const[count, setcount]= useState(0);
const handleButton=()=>
{
    setcount(()=>count+1)
};
    return(
       <div>
        <h1 className={style.increment} >{count}</h1>
        <button onClick={handleButton} className={style.btn} >Increment</button>
       </div>
   );
};
export default Increment;