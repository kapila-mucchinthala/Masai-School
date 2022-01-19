import { useState } from 'react';

export const Todo = () => {
    const [text, setText] = useState("");
    const [todo, setTodo] = useState([]);
    const handleChange = (e) => {
        setText(e.target.value);
    }
    const handleClick = () => {
        setTodo([...todo, text]);
        console.log(todo);
    }

    return (
        <div>
            <input value={text} onChange={handleChange} type='text' placeholder='Enter Todo' />
            <button onClick={handleClick}>Add</button>
        </div>
    )
}