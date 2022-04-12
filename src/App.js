import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(count => count + 1);
  };
 
  const decrement = () => {
    if (counter <= 0) return setCounter(0);
    setCounter(count => count - 1);
  };

  return (
    <div className="App">
      <button onClick={increment}>Plus</button>
      <p>{counter}</p>
      <button onClick={decrement}>Minus</button>
    </div>
  );
}

export default App;
