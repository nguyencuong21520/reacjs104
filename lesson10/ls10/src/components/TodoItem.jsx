import { useState } from "react";

const TodoItem = ({todo, onUpdate, onDelete}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInput] = useState(todo.text);
  return (
    <div className="flex items-center justify-between gap-1 mt-2">
        <input type="text" value={isEditing ? input : todo.text} onChange={(e)=>setInput(e.target.value)} disabled={!isEditing} className="w-3/4 p-2 rounded-md border border-gray-300" />

        {
          isEditing ? (
            <>
              <button onClick={()=>{onUpdate(input) 
                setIsEditing(false)}} className="bg-blue-500 text-white p-2 rounded-md w-1/4 hover:bg-blue-600">Save</button>
              <button onClick={()=>setIsEditing(false)} className="bg-orange-500 text-white p-2 rounded-md w-1/4 hover:bg-orange-600">Cancel</button>
            </>
          ) : (
            <button onClick={()=>setIsEditing(true)} className="bg-blue-500 text-white p-2 rounded-md w-1/4 hover:bg-blue-600">Edit</button>
          )
        }
        <button onClick={onDelete} className="bg-red-500 text-white p-2 rounded-md w-1/4 hover:bg-red-600">Delete</button>
    </div>
  );
};

export default TodoItem;