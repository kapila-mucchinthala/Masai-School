import { Box1 } from "./components/Box1.jsx";

const page = {
  width: '70%',
  height: '540px',
  backgroundColor: '#1e1f39',
  margin: 'auto', 
  display: 'flex',
  flexdisplay: 'columns'
}

function App() {
  return (
    <div style={page}>
      <Box1 url='https://www.linkpicture.com/q/download_24.jpeg' 
      name='Pepperoni Pizza' 
      description='Premium Pepperoni and cheese is made with real mozarella on original hand-tossed crust.'
      calories='265 Cal'
      date='P/F/C: 12/10/31'
      celsius='53.8C'
      cost='$23.90'
      originalcost='$29.90'></Box1>
      
      <Box1 url='https://www.linkpicture.com/q/download-1_13.jpeg' 
      name='Tortellini' 
      description='Pasta stuffed with beef and pork topped with your choice of cream sauce with bacon, bolognese or marinara sauce.'
      calories='270 Cal'
      date='P/F/C: 18/4/21'
      celsius='42.4C'
      cost='$17.90'
      originalcost='$22.90'></Box1>

      <Box1  url='https://www.linkpicture.com/q/images_532.jpeg' 
      name='Strawberry Cake' 
      description='Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer.'
      calories='346 Cal'
      date='P/F/C: 6/14/49'
      celsius='13.9C'
      cost='$13.90'
      originalcost='$18.90'></Box1>
     
    </div>
  );
}

export default App;
