import "./App.css";
import React, { useState } from "react";
import Date from "./Components/Date";
import Logo from "./Components/Logo";
import Heading from "./Components/Heading";
import Subheading from "./Components/Subheading";
import Devices from "./Components/Devices";

const initState = {
  date: "",
  logo: "",
  heading: "",
  subheading: "",
  devices: "",
  color: "",
};

function App() {
  const [formData, setFormData] = useState(initState);
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, formData]);
  };

  return (
    <>
      <div className="App">
        <h1>GIFT CARD</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="date"
            placeholder="Enter Date"
            name="date"
            onChange={handleChange}
          /> 
          <br />
          <br />
          <input
            type="text"
            placeholder="Provide Logo"
            name="logo"
            onChange={handleChange}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Enter Heading"
            name="heading"
            onChange={handleChange}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Enter subheading"
            name="subheading"
            onChange={handleChange}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Enter Devices"
            name="devices"
            onChange={handleChange}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Enter color"
            name="color"
            onChange={handleChange}
          />
          <br />
          <br />
          <input type="submit" value="submit" style={{marginBottom:"20px"}} />
        </form>
      </div>

      {list.map((e) => (
        <>
          <div className="container" style={{ backgroundColor: e.color }}>
            <Logo card={e} />
            <Date card={e} />
            <button className="btn">Case Study</button>
            <Heading card={e} />
            <Subheading card={e} />
            <Devices card={e} />
          </div>
        </>
      ))}
    </>
  );
}

export default App;
