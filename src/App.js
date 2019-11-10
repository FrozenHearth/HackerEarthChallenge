import React, { Component } from 'react';
import './App.css';
import ItemsList from './components/itemsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ItemsList />
      </div>
    );
  }
}

export default App;
