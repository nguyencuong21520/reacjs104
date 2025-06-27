import { useState } from "react";
import TodoItem from "./TodoItem";

//CRUD

const TodoPage = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    const [search, setSearch] = useState("");


    const handleAddTodo = (text) =>{
        const newTodo = {
            id: todos.length + 1 + Date.now(),
            text,
            completed: false,
            createdAt: new Date().toISOString(),
        }
        setTodos([...todos, newTodo])
    }

    const handleUpdateTodo = (index, text) =>{
        setTodos((prev)=>{
            const newTodos = [...prev];
            newTodos[index].text = text;
            return newTodos;
        });
    }

    const handleDeleteTodo = (index) =>{
        setTodos((prev)=>{
            const newTodos = [...prev];
            newTodos.splice(index, 1);
            return newTodos;
        });
    }

    const filteredTodos = todos.filter((todo)=>todo.text.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-[500px]">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-500">Todo List</h1>
        <div className="flex flex-col gap-2 border-b border-gray-300 pb-2 mb-4">
            <div className="flex items-center justify-between gap-1">
                <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Add a new todo" className="w-3/4 p-2 rounded-md border border-gray-300" />
                <button onClick={()=>{
                    handleAddTodo(input);
                    setInput("");
                }} className="bg-blue-500 text-white p-2 rounded-md w-1/4 hover:bg-blue-600">Add</button>
            </div>
            <div className="flex items-center justify-between">
                <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search todos" className="w-full p-2 rounded-md border border-gray-300" />
            </div>
        </div>


        <div>
            {
                filteredTodos.map((todo, index) => (
                    <TodoItem key={todo.id} todo={todo} onUpdate={(text) => handleUpdateTodo(index, text)} onDelete={()=>handleDeleteTodo(index)} />
                ))
            }
        </div>
    </div>
  );
};

export default TodoPage