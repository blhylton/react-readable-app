import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CategoryList from './Categories/categoryList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CategoryList />
      </div>
    );
  }
}

export default App;
