import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  postCreateComment
} from './actions'

import CommentForm from './commentForm.component'

class CommentCreate extends Component {
  submit = (value) => {
    this.props.createComment(value.body, value.author, value.parent)
    this.props.onSubmit()
  }

  render() {
    return (
      <div>
        <h1>Create Comment</h1>
        <CommentForm onSubmit={this.submit} initialValues={{ parent: this.props.id }} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createComment: (body, author, parent) => dispatch(postCreateComment({ body, author, parent }))
})

const mapStateToProps = (state, props) => ({
  id: props.id
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentCreate)
