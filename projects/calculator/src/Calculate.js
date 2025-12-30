import Buttons from "./Components/Buttons";
import { useState } from "react";
export default function Calculate() {
  const [display, setDisplay] = useState(0);
  const [firstOperand, setFirstOperand] = useState(null);
  const [secondOperand, setSecondOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const handleNumber = (number) => {
    if (waitingForSecondOperand) {
      setDisplay(String(number));
      setWaitingForSecondOperand(false);
    } else {
      setDisplay(display === "0" ? String(number) : display + number);
    }
  };

  const handleDecimal = () => {
    if (waitingForSecondOperand) {
      setDisplay("0.");
      setWaitingForSecondOperand(false);
      return;
    }
    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const handleOperator = (nextOperator) => {
    const inputValue = parseFloat(display);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = calculate();
      setDisplay(String(result));
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const calculate = () => {
    const firstValue = firstOperand;
    const secondValue = parseFloat(display);

    if (operator === "+") return firstValue + secondValue;
    if (operator === "-") return firstValue - secondValue;
    if (operator === "/") return firstValue / secondValue;
    if (operator === "*") return firstValue * secondValue;
    if (operator === "%") return firstValue % secondValue;
    return secondValue;
  };

  const handleEquals = () => {
    if (firstOperand === null || operator === null) return;

    const result = calculate();
    setDisplay(String(result));
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const handleBackspace = () => {
    if (display.length === 1) {
      setDisplay("0");
    } else {
      setDisplay(display.slice(0, -1));
    }
  };

  const handlePercentage = () => {
    const currentValue = parseFloat(display);
    setDisplay(String(currentValue / 100));
  };

  const handleClear = () => {
    setDisplay("0");
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            backgroundColor: "#253237",
            width: "400px",
          }}
        >
          <div>
            <h2
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                fontSize: "2rem",
                color: "aliceblue",
              }}
            >
              {display}
            </h2>
          </div>
          <div style={{ width: "400px" }}>
            <div>
              <Buttons
                name="c"
                onClick={() => {
                  handleClear();
                }}
              />
              <Buttons
                name="/"
                onClick={() => {
                  handleOperator("/");
                }}
              />
              <Buttons
                name="*"
                onClick={() => {
                  handleOperator("*");
                }}
              />
              <Buttons
                name="back"
                onClick={() => {
                  handleBackspace();
                }}
              />
            </div>
            <div>
              <Buttons name="7" onClick={() => handleNumber(7)} />
              <Buttons name="8"  onClick={() => {handleNumber("8")}}/>
              <Buttons name="9" onClick={() => {handleNumber("9")}} />
              <Buttons name="-" onClick={() => {handleOperator("-")}}/>
            </div>
            <div>
              <Buttons name="4"onClick={() => {handleNumber("4")}} />
              <Buttons name="5" onClick={() => {handleNumber("5")}}/>
              <Buttons name="6" onClick={() => {handleNumber("6")}}/>
              <Buttons name="+" onClick={() => {handleOperator("+")}}/>
            </div>
            <div>
              <Buttons name="1" onClick={() => {handleNumber("1")}}/>
              <Buttons name="2" onClick={() => {handleNumber("2")}}/>
              <Buttons name="3" onClick={() => {handleNumber("3")}}/>
              <Buttons name="=" onClick={() => {handleEquals()}}/>
            </div>
            <div style={{ display: "flex", flexGrow: "1 " }}>
              <Buttons name="%" onClick={() => {handlePercentage()}} />
              <Buttons name="0" onClick={() => {handleNumber("0")}}/>
              <Buttons name="." onClick={() => {handleDecimal()}}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
