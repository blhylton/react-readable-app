import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  updateComment,
  fetchComment
} from './actions'
import { push } from 'react-router-redux'


import CommentForm from './commentForm.component'

class CommentEdit extends Component {
  submit = (value) => {
    this.props.editComment(value.id, value.body, value.author, value.parent).then(this.props.push(`/post/${this.props.comment.parentId}`))

  }

  componentDidMount = () => {
    this.props.fetchComment(this.props.id)
  }

  render() {
    const { comment } = this.props
    return (
      <div>
        <h1>Edit Comment</h1>
        <CommentForm onSubmit={this.submit} initialValues={{ parent: comment.parentId, id: comment.id, body: comment.body, author: comment.author, timestamp: comment.timeStamp }} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  //Not sure if the timestamp is supposed to be updated or not. This version updates the timestamp
  editComment: (id, body, author, parent) => dispatch(updateComment({ id, body, author, parent, timeStamp: + new Date() })),
  fetchComment: id => dispatch(fetchComment(id)),
  push: (url) => dispatch(push(url))
})

const mapStateToProps = (state, props) => ({
  id: props.id,
  comment: state.comments.detailedComment,
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentEdit)
