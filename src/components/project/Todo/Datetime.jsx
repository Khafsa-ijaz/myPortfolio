import { useEffect, useState } from "react";
export const Datetime=()=>
{
         useEffect(()=>{

           const interval=setInterval(()=>{
                const now = new Date();
        const formattedDate = now.toLocaleDateString();
        const formattedTime =now.toLocaleTimeString();
        setdatetime(`${formattedDate} - ${formattedTime}`);
        },1000);
        return()=> clearInterval(interval);
        },[]);
       const [datetime, setdatetime]=useState("");
    return(
        <h3>{datetime}</h3>
    );
}
export default Datetime;