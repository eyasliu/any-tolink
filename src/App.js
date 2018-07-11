import React, { Component } from 'react';
import logo from './logo.svg';
import crypto from './crypto'
import './App.css';


class App extends Component {
  state = {
    value: '',
    encode:'',
  }
  changeHandler = (e) => {
    this.setState({value:e.target.value})
    this.encode(e.target.value)
  }
  async encode(str) {
    const res = await crypto.encode(str)
    this.setState({
      encode: res
    })
  }
  render() {
    return (
      <div className="App">
        <textarea value={this.state.value} onChange={this.changeHandler} name="content" cols="30" rows="10"></textarea>
        <p>
          encode: {this.state.encode}
        </p>
      </div>
    );
  }
}

export default App;
