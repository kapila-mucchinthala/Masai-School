import { useState } from 'react';

export const Counter = ({ init }) => {
    const [count, setCount] = useState(init);


    return (
     <div>
        <h1>Counter:{count}</h1>
        
      <button onClick={() => {
        setCount(count + 1);
        }}>Add 1</button>
        
      <button disabled={count<1} onClick={() => {
        setCount(count - 1);  
        }}>Subtract 1</button>

      <button onClick={() => {
        setCount(count * 2);  
      }}>Multiply 2</button>
     </div>
    )
} 