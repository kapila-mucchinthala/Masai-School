import './App.css';
import { AuthContext } from './contexts/AuthContext';
import { useContext } from 'react';

function App() {
  const { token,handleTokenChange } = useContext(AuthContext);
  if (!token) {
    return (
      <div className="App">
        <h4>User not logged in. Please login to continue:</h4>
        <input type="text" placeholder="Enter Username" />
        <input type="password" placeholder="Enter Password" />
        <button onClick={()=>{handleTokenChange("123")}}>Submit</button>
      </div>
    )
  }
  return (
    <div className="App">
     You have logged in successfully
    </div>
  );
}

export default App;
