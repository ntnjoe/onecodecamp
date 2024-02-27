import React, { useState} from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const addTodo = () => {
        if(inputValue) {
            setTodos([...todos, inputValue]);
            setInputValue('');
     }};
    const handleDeleteTask = (index) =>{
        todos.splice(index, 1);
        setTodos([...todos])
    }
    const handleUpdateTask = (index)=>{
        const task = todos.splice(index, 1);
        addTodo()
        setInputValue(task[0])
    }
    return (
        <div>
            <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)}/>

            <button onClick={addTodo}>Add Task</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={()=>{handleDeleteTask(index)}}>Delete</button>
                        <button onClick={()=>{handleUpdateTask(index)}}>Update</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;