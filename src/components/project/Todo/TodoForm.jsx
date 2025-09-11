import { useState } from "react";
export const TodoForm =({onaddTodo})=>
{
        const [input, setinput]=useState({});
        //form submit function
        const handleFormSubmit=(event)=>
        {
             event.preventDefault();
             onaddTodo(input);
             setinput({id:"",content:"", checked:false});

        };
        //input handling  function
           const handleInput =(value)=>
        {
setinput({id:value,content:value, checked:false});
        };
    return(
          <section className="form" onSubmit={handleFormSubmit}>
                    <form>
                        <div>
                            <input type="text" autoComplete="off"
maxLength={17} value={input.content} onChange={(event)=>handleInput(event.target.value)}/>
                           
                        </div>
                        <div>
         <button type="submit" >Add Task</button>
                        </div>
                    </form>
                  </section>

    );
}