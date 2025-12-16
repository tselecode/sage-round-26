import { useState, useEffect } from 'react';


export default function Count() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  useEffect(() => {
    document.title = count1

  }, [count1])
  return <>

    <div style={{ 'display': "flex", 'flexDirection': "column", 'justifyContent': "center" }}>
      <h1 className='blue' style={{ 'textAlign': "center", 'fontSize': "5rem" }}>{count1}</h1>
      <button onClick={() => {
        setCount1(count1 + 1)
      }}>Add on count 1</button>
      <button onClick={() => {
        setCount1(count1 - 1)
      }}
        style={{ 'margin': "5px 0px 5px 0px" }}>subtract on count 1</button>
      <button onClick={() => {
        setCount1(0)
      }}>reset on count 1</button><br /><br />
      <h1 className='blue' style={{ 'textAlign': "center", 'fontSize': "5rem" }}>{count2}</h1>
      <button onClick={() => {
        setCount2(count2 + 1)
      }}>Add on count 2</button>
      <button onClick={() => {
        setCount2(count2 - 1)
      }}
        style={{ 'margin': "5px 0px 5px 0px" }}>subtract on count 2</button>
      <button onClick={() => {
        setCount2(0)
      }}>reset  on count 2</button>
    </div>

  </>

}