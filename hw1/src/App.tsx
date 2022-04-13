import { ChangeEvent, Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    count: 0
  };

  inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      count: Number(event.target.value)
    });
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.count}</h1>
        <label htmlFor="num">Number: </label>
        <input type="number" name="num" id="num" onChange={this.inputHandler} />
        <br />
        <button onClick={this.increment}>Plus</button>
        <button onClick={this.decrement}>Minus</button>
      </div>
    );
  }
}

export default App;
