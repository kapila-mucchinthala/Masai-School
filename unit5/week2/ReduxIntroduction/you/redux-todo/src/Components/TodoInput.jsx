import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../Redux/actions';
import { v4 as uuid } from 'uuid';

export const TodoInput = () => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const addTodo = () => {
        let payload = {id: uuid(), status: false, title}
        dispatch(addTask(payload));
    };

    return (
        <div style={{marginTop:"50px"}}>
            <h1>Redux - Todo App</h1>
            <input style={{width:"200px",height:"30px",borderRadius:"10px",fontSize:"15px",marginBottom:"20px"}}
                type="text"
                placeholder="Enter Title"
                onChange={(e) => setTitle(e.target.value)}
            />
            <button style={{ height: "35px", borderRadius: "10px", fontSize: "15px"}} onClick={ addTodo}>ADD</button>
        </div>
    );
}
