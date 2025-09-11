    const todokey="todo";
export const getlocalhost =()=>
{
 
         const rawtodo =localStorage.getItem(todokey);
         if(!rawtodo) return[];
 return(
    JSON.parse(rawtodo)
    );
};
export const setlocalhost =(task)=>
{
    return localStorage.setItem(todokey,JSON.stringify(task));
}