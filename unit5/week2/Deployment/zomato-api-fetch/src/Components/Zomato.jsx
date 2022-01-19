import React, { useState } from "react";

export const  ZomatoAPI=()=> {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const fetchingAPI = () => {
    const zomato = fetch(
      `https://${process.env.REACT_APP_ZOMATO_API}/api/json/v1/1/search.php?s=${text}`
    )
      .then((res) => res.json())
      .then((result) => setData([result]));
  };

  return (
    <div>
      <h1 style={{color: 'orangered'}}>ZOMATO MEALS</h1>
      <input style={{height:"40px",borderRadius:"10px",fontSize:"15px"}} type="text" onChange={(e) => handleChange(e)} />
      <button style={{backgroundColor:"black",color:"white", height:"40px",width:"80px",borderRadius:"10px",fontSize:"18px"}} onClick={fetchingAPI}>Add</button>

      {data.map((item) => item.meals.map((e) => <h4 style={{backgroundColor:"orange",borderRadius:"10px",height:"70px",width:"200px",marginLeft:"43%",paddingTop:"30px"}}>{e.strMeal}</h4>))}
    </div>
  );
}

