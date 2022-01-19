// import "./App.css";
import React, { useState } from 'react';
import { Products } from "./Products";

function App() {
  const [search, setSearch] = useState('');
  const [data,setData] = useState([]);
  const YOUR_APP_ID = "f9e478a9";
  const YOUR_APP_KEY = "9244e0bf08ac85855c08ecd1c9e3eb18";

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`http://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`)
      .then(response => response.json()).then(data => setData(data.hits))

    
  }
  return (
      <div>
      <center>
        <h4>Food Recipe App</h4> <br/>
        <form onSubmit={submitHandler}>
          <input type="text" value={ search} onChange={(e)=>setSearch(e.target.value)}/> <br/><br/>
          <input type="submit" value='Search' className="btn btn-primary"/>
        </form>
        {data.length>=1 ? <Products data={data}/>:null}
      </center>
      
      </div>
  );
}

export default App;
