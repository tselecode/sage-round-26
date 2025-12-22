import { use, useState } from "react";

export default function Calculate() {
  const [num1, setNumber1] = useState(0);
  const [num2, setNumber2] = useState(0);
  const [answer, setAnswer] = useState();
  console.log(answer);
  
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "aliceblue",
          height: "100vh",
          gap: "20px",
        }}
      >
        <div>
          <label>enter first number: </label>
          <input id="num1" type="number"  ></input>
        </div>
        <div>
          <label>enter second number: </label>
          <input id="num2" type="number" ></input>
        </div>
        <div>
          <label>Answer = </label>
          <div
            id="answer"
            style={{
              backgroundColor: "whitesmoke",
              width: "30px",
              height: "10px",
            }}
          ></div>
        </div>
        <button onClick={() => {
            setAnswer(num1 + num2)
        }}>Add</button>
      </div>
    </>
  );
}
