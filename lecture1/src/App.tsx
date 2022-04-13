import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="App">
      <button onClick={increment}>Plus</button>
      <p>{count}</p>
      <button onClick={decrement}>Minus</button>
    </div>
  );
}

export default App;
