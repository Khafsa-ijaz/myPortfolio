import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, favTask } from "./Store";
import { IoIosHeart } from "react-icons/io";
import { IoTrashBin } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import "./List.css";

export function List()
{
   const [task,settask]=useState("");
  
    const dispatch =useDispatch();
    const tasks =useSelector((state)=>state.tasks.tasks);
     const [visiblefav,setvisiblefav]=useState(false)
   const showtask=visiblefav ? tasks.filter((t)=>t.flag===1):tasks;
  return(
      <div className="todo">
        <div className="todosub">
            <h2>Add To  <CiHeart size={20} style={{color:"red"}}/> </h2>
        <div className="form">
          <input type="text" value={task} onChange={(e)=>settask(e.target.value)} placeholder="enter task" maxLength={15}/>
      <button onClick={()=>{if (task.trim() === "") return; 
      dispatch(addTask({text:task, flag:0}))
      settask("");
      }}>Ok</button>
        <button className="bt"  onClick={()=>setvisiblefav(!visiblefav)} > <IoIosHeart  size={24} className={visiblefav?"active":""} style={{border:"1px solid black"}}/></button>
       
        </div>
        </div>
      
      <div className="list">
        <ul>
       { showtask.map((t,index)=> (
            <li key={index}><div className="litext">{t.flag === 1 ? <CiHeart size={12} style={{color:"red"}}/> : ""}{t.text}</div>  
            <div className="liButton">
               <button  onClick={()=>dispatch(deleteTask(index))}><IoTrashBin size={18}/></button>
              <button onClick={()=>dispatch(favTask(index))}><IoIosHeart  size={18}/></button>
            </div>
           
            </li>
        ))} 
      </ul></div>  
      

      <div>
        {/* <button onClick={()=>setvisiblefav()}>Fav tasks</button> */}
      </div>
      </div>
  )
}