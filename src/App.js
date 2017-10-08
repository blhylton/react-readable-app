import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { Route } from 'react-router'

import CategoryList from './Categories/categoryList.component'
import PostList from './Posts/postList.component'
import SinglePost from './Posts/postSingle.component'
import PostCreate from './Posts/postCreate.component'
import PostEdit from './Posts/postEdit.component'
import CommentEdit from './Comments/commentEdit.component'

class App extends Component {
  render() {
    return (
      <div className="App" data-loc={this.props.location}>
        <CategoryList />
        <Route path="/" exact component={PostList} />
        <Route path="/category/:category" render={(category) => (
          <PostList category={category.match.params.category} />
        )} />
        <Route path="/post/:id" render={(params) => (
          <SinglePost id={params.match.params.id} />
        )} />
        <Route path="/create-post" component={PostCreate} />
        <Route path="/edit-post/:id" render={(params) => (
          <PostEdit id={params.match.params.id} />
        )} />
        <Route path="/edit-comment/:id" render={(params) => (
          <CommentEdit id={params.match.params.id} />
        )} />
      </div >
    );
  }
}

const mapStateToProps = (state) => ({
  location: state.router.location
})

export default connect(mapStateToProps)(App);
