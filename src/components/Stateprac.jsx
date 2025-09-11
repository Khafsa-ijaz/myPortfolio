import { useState } from "react"

// const user =[
   
// ]
export const Stateprac=()=>
{
 const [user,setuser]=useState([ {name:"khansa",age:24},
    {name:"khafsa",age:22},
    {name:"sami",age:20},
    {name:"ijaz",age:52},])
 return(
 user.map((cr,index) =>{
    return(
       <h1 key={index}>{cr.name}-{cr.age}years old</h1>
    );

  })
 );
  }

