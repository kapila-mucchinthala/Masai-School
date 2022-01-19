import { Todo } from './components/Todo';
// import { useState } from 'react';
import './App.css';

function App() {
  // const [counter, setCounter] = useState(0);
  // return (
  //   <div>
  //     <h1>Element is {counter % 2 === 0 ? "Even" : "Odd"}</h1>
  //     <h1>Counter:{counter}</h1>
  //     <button onClick={() => { setCounter(counter + 1) }}>Click</button>
  //   </div>
  // )

  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
 