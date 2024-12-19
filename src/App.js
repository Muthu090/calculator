import React, { useState } from "react";
import './App.css';
function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("0");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setOutput(eval(input.replace("/,*")));  
      } catch {
        setOutput(input+value);
      }
    } else if (value === "AC") {
      setInput("");
      setOutput("0");
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-yellow-300">
      <div className="bg-black text-white rounded-lg shadow-lg p-6 w-64 md:w-80">
    
        <div className="text-right mb-4">
          <div className="text-gray-400 text-sm">{input || "0"}</div>
          <div className="text-2xl font-bold">{output}</div>
        </div>
 
        <div className="grid grid-cols-4 gap-2">
          <button
            className="bg-gray-800 hover:bg-gray-600 text-white p-4 rounded"
            onClick={() => handleClick("AC")}
          >
            AC
          </button>
          <button
            className="bg-gray-800 hover:bg-gray-600 text-white p-4 rounded"
            onClick={() =>handleClick("C")}
          >
            C
          </button>
          <button
            className="bg-gray-800 hover:bg-gray-600 text-white p-4 rounded"
            onClick={() => handleClick("%")}
          >
            %
          </button>
          <button
            className="bg-orange-500 hover:bg-orange-400 text-white p-4 rounded"
            onClick={() => handleClick("/")}
          >
 ÷
          </button>

          {["7", "8", "9"].map((num) => (
            <button
              key={num}
              className="bg-gray-800 hover:bg-gray-600 text-white p-4 rounded"
              onClick={() => handleClick(num)}
            >
              {num}
            </button>
          ))}
          <button
            className="bg-orange-500 hover:bg-orange-400 text-white p-4 rounded"
            onClick={() => handleClick("*")}
          >
            ×
          </button>

          {["4", "5", "6"].map((num) => (
            <button
              key={num}
              className="bg-gray-800 hover:bg-gray-600 text-white p-4 rounded"
              onClick={() => handleClick(num)}
            >
              {num}
            </button>
          ))}
          <button
            className="bg-orange-500 hover:bg-orange-400 text-white p-4 rounded"
            onClick={() => handleClick("-")}
          >
            −
          </button>

          {["1", "2", "3"].map((num) => (
            <button
              key={num}
              className="bg-gray-800 hover:bg-gray-600 text-white p-4 rounded"
              onClick={() => handleClick(num)}
            >
              {num}
            </button>
          ))}
          <button
            className="bg-orange-500 hover:bg-orange-400 text-white p-4 rounded"
            onClick={() => handleClick("+")}
          >
            +
          </button>

          <button
            className=" bg-gray-800 hover:bg-gray-600 text-white p-4 rounded"
            onClick={() => handleClick("0")}
          >
            0
          </button>
          <button
            className="bg-gray-800 hover:bg-gray-600 text-white p-4 rounded"
            onClick={() => handleClick(".")}
          >
            .
          </button>
          <button
            className="bg-orange-500 hover:bg-orange-400 text-white p-4 rounded col-span-2"
            onClick={() => handleClick("=")}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;