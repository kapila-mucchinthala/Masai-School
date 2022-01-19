import { Button } from "./components/Button";

function App() {
  return (<div>
    <h1>Hello</h1>
    <p>Hi</p>
    <Button age={123} name="Masai" />
    <Button age={245} name="Java" />
    <Button url="https://www.linkpicture.com/q/images_527.jpeg" type="image"/>
   </div>
  );
}
 
export default App;
