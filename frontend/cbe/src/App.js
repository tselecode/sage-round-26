import { useState } from 'react';
import Count from './components/Count';
import If_else from './components/If_else';
import List from './components/List';
function App() {
let x= 12;
  return <>
    <Count />
    <If_else/>

    {x==12 && <h1>and operator is true</h1>}
    {x==12?<h1>ternary operator is true</h1> : <h1>ternary operator is false</h1>}
   <List/>
  </>

}

export default App;
