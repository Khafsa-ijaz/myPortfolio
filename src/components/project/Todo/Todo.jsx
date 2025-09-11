import { useState } from "react";
import "./Todo.css"
import Datetime from "./Datetime"
import { TodoForm } from "./TodoForm";
import { ToDoList } from "./ToDoList";
import { getlocalhost, setlocalhost } from "./localstorage";
export const Todo=()=>
{
  const todokey="todo";
    
        const [task,settask]=useState(()=>getlocalhost()
      );
     
     //form submission
        const handleFormSubmit=(input)=>{
         const {id,content,checked}=input;
          if(!content) return;
          // if(task.includes(input)) return;
          const ifmatch =task.find((cr)=>cr.content==content);
          if(ifmatch)return;
          settask((prev)=>[...prev, {id,content,checked}]);
        
          
        };
  //input to datastorage
  setlocalhost(task);
   
   //handle delete 
        const handleDelete =(val)=>{
          const updatedTask = task.filter((cr)=>cr.content!==val);
          settask(updatedTask);
            
        };
       const handleDeleteall=()=>
       {
        settask([]);
       };
       //handle checked unchecked
       const handleCheck =(content)=>
       {
         const updatedTask =task.map((cr)=>
        {
          if(cr.content==content)
          {
            return{...cr,checked:!cr.checked};
          }
          else{
            return cr;
          }
        });
        settask(updatedTask)
       };
    return(

        <section className="todo">
          <header>
            <h1>
                To Do List 
            </h1>
            < Datetime />
          </header>
        <TodoForm onaddTodo={handleFormSubmit}/>
          <section className="list">
          <ul>
            {
              task.map((cr)=>{
                return(
                  <ToDoList key={cr.id}
                   data={cr.content} 
                   checked={cr.checked}
                  ondelete={handleDelete} 
                  onchecked={handleCheck}/>
                )

              })
            }
          </ul>
          </section>
          <section className="all-delete">
            <button className="del-all" onClick={handleDeleteall}>Clear All</button>
          </section>
        </section>
    )
};