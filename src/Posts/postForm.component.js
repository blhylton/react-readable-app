import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  postCreatePost,
  fetchSinglePost
} from './actions'
import { push } from 'react-router-redux'

class PostForm extends Component {

  componentDidMount = () => {
    this.props.getPost(this.props.id)
  }

  render() {
    const { post } = this.props

    return (
      <div className="postForm">
        <form>
          <label for="title">Title</label>
          <input type="text" name="title" id="title" value={post.title} />
          <label for="author">Author</label>
          <input type="text" name="author" id="author" value={post.author} />
          <label for="body">Body</label>
          <textarea name="body" id="body">{post.body}</textarea>
          <label for="category">Category</label>
          <select name="category" id="category">
            <option value="react">React</option>
            <option value="redux">Redux</option>
            <option value="udacity">Udacity</option>
          </select>
          <input type="submit" onClick={(e) => {
            e.preventDefault()

            this.props.createPost(
              document.getElementById('title').value,
              document.getElementById('body').value,
              document.getElementById('author').value,
              document.getElementById('category').value
            )
          }} />
        </form>
      </div>
    )
  }

}

const mapStateToProps = (state, props) => ({
  post: state.posts.detailedPost
})

const mapDispatchToProps = dispatch => ({
  createPost: (title, body, author, category) => dispatch(postCreatePost(title, body, author, category)),
  getPost: (id) => dispatch(fetchSinglePost(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)