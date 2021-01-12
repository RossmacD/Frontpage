import './App.css';
import { Component } from 'react';
import Navbar from '../components/navbar'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <p>This is my app</p>
      </div>)
  }
}

export default App;
