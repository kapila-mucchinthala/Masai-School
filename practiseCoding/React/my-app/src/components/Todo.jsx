import { useState,useEffect } from 'react';
import { nanoid } from 'nanoid';
import axios from 'axios';


export const Todo = () => {
    const [text, setText] = useState("");
    const [data, setData] = useState([]);

    const handleChange = (e) => {
        setText(e.target.value);
    }
    useEffect(async () => {
        const response = await axios.get("http://localhost:3001/todo");
        console.log(response.data);
        setData(response.data);
    }, []);
    const addTodo = () => {
        const Todo = {
            title: text,
            status: false,
            id:nanoid(4),
        }
        setData([...data, Todo]);
        axios.post("http://localhost:3001/todo", Todo);
        setText("");
    }
    const changeStatus = (e) => {
        setData(data.map((el) => {
            if (el.id === e.id) {
                return {
                    ...el,
                    status: !el.status,
                
                }
            }
            return el;
        }))
        const patchData = {
            status: !e.status,
        }
        axios.patch(`http://localhost:3001/todo/${e.id}`, patchData);

    }
    const deleteTodo = (e) => {
        setData(data.filter((el) => {
            return el.id !== e.id;
        }))
        axios.delete(`http://localhost:3001/todo/${e.id}`);
    }
    return (
        <div>
            <div>
            <input type='text' value={text} placeholder='Enter Todo' onChange={ handleChange}/>
                <button onClick={addTodo}>Add</button>
            </div>
            <div>
                {
                    data.map((e) => (
                        <div key={e.id}  style=
                        {{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '20px',
                        height: '30px',
                        alignItems: 'center'
                        }}>
                            <p style={{marginRight: '10px'}}>{e.title}</p>
                            <p style={{marginRight: '10px'}}>{ e.status ? "Completed" : "Not Completed"}</p>
                            <button onClick={() => { changeStatus(e) }} style={{marginRight: '10px'}}>Toggle</button>
                            <button onClick={()=>{deleteTodo(e)}}>Delete</button>                            
                        </div>
                    ))
                }
            </div>
            
        </div>
    )
}

