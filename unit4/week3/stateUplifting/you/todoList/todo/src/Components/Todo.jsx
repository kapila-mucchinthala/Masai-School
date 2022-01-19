import React,{useState, useEffect} from "react";
import {v4 as uuid} from "uuid";
import "../Styles/Todo.css"
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function Todo() {
    const [todos, setTodos] = useState([]);
    const [showAll, setShowAll] = useState(true);

    const handleAdd = (title)=>{
      const payload = {
        title,
        status:false,
        id:uuid()
      }
      setTodos([...todos, payload])
    }

    const handleToggle = (id)=>{
      const updateTodo = todos.map((item)=>
      item.id === id ? {...item, status: !item.status} : item
      );
      setTodos(updateTodo)
    };
    
    const removeTodo = (id)=> {
      const result = todos.filter(item => item.id !== id)
      setTodos(result)
    }

    useEffect(() => {
      const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if (storageTodos) {
        setTodos(storageTodos);
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);
  
  
    return (
      <div className="container">
        <p className="heading">React Todo</p>
        <TodoInput onClick={handleAdd} />

        {todos.filter((item)=>(showAll ? true : !item.status))
        .map((item)=>(
          <TodoList removeTodo={removeTodo} handleToggle={handleToggle} key={item.id} {...item} />
        ))}
        <button className="toggleButton" onClick={() => setShowAll(!showAll)}>
          {showAll ? "SHOW PENDING TASKS" : "SHOW ALL TASKS"}
        </button>
      </div>
    );
  }

  export default Todo