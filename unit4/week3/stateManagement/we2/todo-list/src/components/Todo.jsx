import { useState } from 'react';
import './Todo.css';

function Todo() {
    const [text, setText] = useState('');
    const [todos, setTodos] = useState([]);

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleAddTodo = () => {
        setTodos([...todos, text]);
        setText("");
    }
 
    return (<div>
        <input className='input' value={text}
            onChange={handleChange}
            placeholder='Enter Text'
            type="text"
        />
        <button className='btn' onClick={handleAddTodo}>+</button>
        {todos.map((e) => (
            <div className="tasks">{e}</div>
        ))}
    </div>
    );
}
 
export { Todo };