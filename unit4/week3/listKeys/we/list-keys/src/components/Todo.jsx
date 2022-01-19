import { TodoInput } from './TodoInput.jsx';
import { useState } from 'react';
import { TodoList } from './TodoList.jsx';

export const Todo = () => {
    const [todoList, setTodoList] = useState([]);

    const handleAddTodo = (todo) => {
        setTodoList([...todoList,todo]);
    }

    const handleToggle = (id) => {
        const updateList = todoList.map((todo) => {
            // return todo.id === id ? { ...todo, status: !todo.status } : todo;
            if (todo.id === id) {
                todo.status = !todo.status
            }
            return todo;
        });
        setTodoList(updateList);
    }
    return <div>
        <TodoInput addTodo={handleAddTodo} />
        <TodoList list={todoList} Toggle={handleToggle} />
        <button onClick={() => {
            const updated = todoList.filter((e) => !e.status);
            setTodoList(updated);
        }}>Show Not Completed</button>
    </div>
}