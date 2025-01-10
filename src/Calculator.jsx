import { useState } from "react";

const Calculator = () => {
  const row1arr = ["7", "8", "9", "+"];
  const row2arr = ["4", "5", "6", "-"];
  const row3arr = ["1", "2", "3", "*"];
  const row4arr = ["C", "0", "=", "/"];

  const [displayValue, setDisplayValue] = useState("");
  const [resultValue, setResultValue] = useState("");
  const handleClick = (value) => {
    if (value === "=") {
      if (displayValue === "0/0") {
        setResultValue("NaN");
      } else if (displayValue.trim() === "") {
        setResultValue("Error");
      } else {
        setResultValue(eval(displayValue));
      }
    } else if (value === "C") {
      setDisplayValue("");
      setResultValue('');
    } else {
      setDisplayValue((prevValue) => prevValue + value);
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input type="text" value={displayValue}></input>
        <div>{resultValue}</div>
        <div>
          {row1arr.map((item) => {
            return (
              <button
                type="button"
                style={{
                  borderRadius: "5px",
                  padding: "5px",
                  margin: "3px",
                }}
                key={item}
                value={item}
                onClick={() => handleClick(item)}
              >
                {item}
              </button>
            );
          })}
        </div>
        <div>
          {row2arr.map((item) => {
            return (
              <button
                type="button"
                style={{
                  borderRadius: "5px",
                  padding: "5px",
                  margin: "3px",
                }}
                key={item}
                value={item}
                onClick={() => handleClick(item)}
              >
                {item}
              </button>
            );
          })}
        </div>
        <div>
          {row3arr.map((item) => {
            return (
              <button
                type="button"
                style={{
                  borderRadius: "5px",
                  padding: "5px",
                  margin: "3px",
                }}
                key={item}
                value={item}
                onClick={() => handleClick(item)}
              >
                {item}
              </button>
            );
          })}
        </div>
        <div>
          {row4arr.map((item) => {
            return (
              <button
                type="button"
                style={{
                  borderRadius: "5px",
                  padding: "5px",
                  margin: "3px",
                }}
                key={item}
                value={item}
                onClick={() => handleClick(item)}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Calculator;
