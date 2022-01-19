import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import Home from "./pages/Home";
// import "./styles.css";
import ProductDetails from "./pages/ProductDetails";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/products" exact>
          <Product />
        </Route>
        <Route path="/products/:id">
          <ProductDetails />
        </Route>
        <Route>
          <h1>404 Page not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}
