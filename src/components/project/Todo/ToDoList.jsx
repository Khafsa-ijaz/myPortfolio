import { MdCheck,MdDeleteForever } from "react-icons/md";
export const ToDoList =({data,checked,ondelete,onchecked})=>{
    return(
        <li>
                    <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
                    <button className="delete-btn" onClick={()=>ondelete(data)}><MdDeleteForever /></button>
                    <button className="todo-btn" onClick={()=>onchecked(data)} ><MdCheck /></button>
                     

                  </li>
    )
};