import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { Route, Link } from 'react-router'
import Loading from 'react-loading'

import CategoryList from './Categories/categoryList.component'
import PostList from './Posts/postList.component'
import SinglePost from './Posts/postSingle.component'
import PostForm from './Posts/postForm.component'

class App extends Component {
  render() {
    const { categoriesLoading, postsLoading } = this.props
    return (
      <div className="App">
        {(categoriesLoading === true || postsLoading === true) && <Loading delay={200} type="cylon" color="#222" className="loading" />}
        <CategoryList />
        <Route path="/" exact component={PostList} />
        <Route path="/category/:category" render={(category) => (
          <PostList category={category.match.params.category} />
        )} />
        <Route path="/post/:id" render={(params) => (
          <SinglePost id={params.match.params.id} />
        )} />
        <Route path="/create-post" component={PostForm} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categoriesLoading: state.categories.loading,
  postsLoading: state.posts.loading
})

export default connect(mapStateToProps)(App);
