import { useState, useEffect } from "react";

 export function Clock()
{
    const[color,setcolor]=useState('green');
    const [time,settime]=useState(0);
     useEffect(()=>{
 setInterval(()=>{
    settime(new Date().toLocaleTimeString())
 }, 1000);
    },[]);
    return(
        <>

        <h1 style={{color:color}}>{time}</h1>
       <select onChange={(event)=>setcolor(event.target.value)}>
        <option value="green">green</option>
        <option value="red">red</option>
        <option value="yellow">yellow</option>
        <option value="blue">blue</option>
        </select>
        </>
    );
}
