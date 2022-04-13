import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      });
    }
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.increment}>Plus</button>
        <p>{this.state.count}</p>
        <button onClick={this.decrement}>Minus</button>
      </div>
    );
  }
}

export default App;
