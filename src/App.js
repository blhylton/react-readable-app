import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CategoryList from './Categories/categoryList.component'
import PostList from './Posts/postList.component'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CategoryList />
        <PostList />
      </div>
    );
  }
}

export default App;
