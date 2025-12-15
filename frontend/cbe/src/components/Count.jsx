import { useState } from 'react';


export default function Count() {
  const [count, setCount] = useState(0)


  return <>

    <div style={{ 'display': "flex", 'flexDirection': "column", 'justifyContent': "center" }}>
      <h1 className='blue' style={{ 'textAlign': "center", 'fontSize': "5rem" }}>{count}</h1>
      <button onClick={() => {
        setCount(count + 1)
      }}>Add</button>
      <button onClick={() => {
        setCount(count - 1)
      }}
        style={{ 'margin': "5px 0px 5px 0px" }}>subtract</button>
      <button onClick={() => {
        setCount(0)
      }}>reset</button>
    </div>

  </>

}