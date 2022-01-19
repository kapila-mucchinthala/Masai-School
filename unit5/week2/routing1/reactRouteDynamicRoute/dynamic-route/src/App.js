// import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home';
import { Navbar } from './Components/Navbar';
import {AllProducts} from './Components/AllProducts';
import { Route, Switch } from "react-router-dom";
import { ProductDetails } from './Components/ProductDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
      <Route exact path="/"><Home /></Route>
      <Route path="/products"><AllProducts /></Route>
        <Route path="/product/:params"><ProductDetails /></Route>
      </Switch>
    </div>
  );
}

export default App;
