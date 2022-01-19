import { Contact } from "./components/Contact.jsx";
import { Download } from "./components/Download.js";
import { Help } from "./components/Help.js";
import { Home } from "./components/Home.js";
import { Join } from "./components/Join.js";
import { Login } from "./components/Login.js";
import { Searchb } from "./components/Searchb.js";
import { Settings } from "./components/Settings.js";


const view = {
  marginLeft: "20px",
  marginTop: "20px",
  width:"300px",
  display: "grid",
  gridTemplateColumns: "auto auto",

}
function App() {
  return (
    <div style={view} >
      <Join></Join>
      <Settings></Settings>
      <Login></Login>
      <Contact />
      <Searchb></Searchb>
      <Help></Help>
      <Home></Home>
      <Download></Download>
      
    </div>
  );
}

export default App;
