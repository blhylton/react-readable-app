import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  postCreatePost,
  stopLoaderAnimation
} from './actions'

import PostForm from './postForm.component'

class PostCreate extends Component {
  componentDidMount = () => {
    this.props.stopLoader()
  }

  submit = (values) => {
    this.props.createPost(values.title, values.body, values.author, values.category)
  }

  render() {
    return (
      <div>
        <h1>Create Post</h1>
        <PostForm onSubmit={this.submit} />
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  createPost: (title, body, author, category) => dispatch(postCreatePost(title, body, author, category)),
  stopLoader: () => dispatch(stopLoaderAnimation())
})

export default connect(() => ({}), mapDispatchToProps)(PostCreate)