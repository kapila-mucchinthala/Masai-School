import styled from 'styled-components';
import './styles.css';
import React from 'react';
import './App.css';
const Wrapper = styled.div`
padding: 2rem;
border: 1px solid red;

h1{
  color: blue;

}
h2{
  color:green;
  @media all and (min-width:620px){
    color:red;
  }
}
`;
const A = styled.a`
text-decoration:none;
font-size: 20px;
color:${(props)=>(props.color==="yellow"?"yellow":"aqua")}
`;

function App() {
  return (
    <div className="App">
      <Wrapper>
        <A color='green' href="http://www.google.com">Google</A>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic</h2>
      </Wrapper>
    </div>
  );
}

export default App;
