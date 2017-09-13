import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router'

import CategoryList from './Categories/categoryList.component'
import PostList from './Posts/postList.component'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CategoryList />
        <Route path="/" exact component={PostList} />
        <Route path="/category/:category" render={(category) => (
          <PostList category={category.match.params.category} />
        )} />

      </div>
    );
  }
}

export default App;
