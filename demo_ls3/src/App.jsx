import React, { useState } from "react";

function Alo({ increment }) {
  return (
    <>
      <h3>Click to increment</h3>
      <button onClick={increment}>Tăng giá trị</button>
    </>
  );
}

function App() {
  const [count, setCount] = useState(0); 
  const handleIncrement = () => {
    setCount(count + 1); 
  };

  return (
    <div>
      <h1>Giá trị: {count}</h1>
      <Alo increment={handleIncrement} /> 
    </div>
  );
}

export default App;