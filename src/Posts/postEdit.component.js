import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  postUpdatePost,
  fetchSinglePost
} from './actions'

import PostForm from './postForm.component'

class PostCreate extends Component {
  submit = (values) => {
    this.props.updatePost(values)
  }

  componentDidMount = () => {
    this.props.getPost(this.props.id)
  }

  render() {
    return (
      <div>
        <PostForm onSubmit={this.submit} initialValues={this.props.post} />
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  post: state.posts.detailedPost
})
const mapDispatchToProps = dispatch => ({
  updatePost: (post) => dispatch(postUpdatePost(post)),
  getPost: (id) => dispatch(fetchSinglePost(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostCreate)