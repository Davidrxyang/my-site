import { useState } from "react";
import TodoItem from "../components/TodoItem";

const TodoPage: React.FC = () => {

    const useTodo = () => {
        const [todos, setTodos] = useState<string[]>([]);

        const addTodo = (text: string) => {
            setTodos([...todos, text]);
        };

        const removeTodo = (index: number) => {
            setTodos(todos.filter((_, i) => i !== index)); 
        };

        return {todos, addTodo, removeTodo};
    };

    const {todos, addTodo, removeTodo} = useTodo();
    const [input, setInput] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }

    const handleSubmit = () => {
        addTodo(input);
    }

    return ( 
        <div>
           <h1>todo Page</h1>
           <form>
            <input value = {input} type = "text" onChange = {handleChange}/>
            <button type = "button" onClick = {handleSubmit}> add todo </button>
           </form>

           {todos.map((todo, index) => (
            <TodoItem text = {todo} index = {index} remove = {removeTodo} /> 
           ))}
        </div>
    );
};

export default TodoPage;