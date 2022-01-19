import { useState } from 'react';
import { nanoid } from 'nanoid';

export const TodoInput = ({addTodo}) => {
    const [text, setText] = useState("");

    const handleChange = ({target}) => {
        setText(target.value);
    } 
 
    const handleClick = () => {
        const data = {
            id:nanoid(4),  //`fw_${nanoid(4)}`
            title: text, //[text, setText]
            status: false,
        };
        addTodo(data);
        setText("");
    }
    
    return <div>
        <input type="text" value={text} onChange={handleChange} placeholder="Enter Todo" />
        <button onClick={handleClick}>Add Todo</button>
    </div>
}