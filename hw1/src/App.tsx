import { useState, ChangeEvent } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCount(Number(event.target.value));
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <label htmlFor="num">Number: </label>
      <input type="number" name="num" id="num" onChange={inputHandler}/>
      <br />
      <button onClick={increment}>Plus</button>
      <button onClick={decrement}>Minus</button>
    </div>
  );
}

export default App;
