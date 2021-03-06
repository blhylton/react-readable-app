import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchComments,
  postVoteComment,
  fetchDeleteComment
} from './actions'
import CommentCreate from './commentCreate.component'
import sortBy from 'sort-by'
import { push } from 'react-router-redux'

class CommentList extends Component {
  componentDidMount = () => {
    this.props.getComments(this.props.id)
  }

  render() {
    const { comments, voteComment, deleteComment } = this.props;
    if (comments.length === 0) {
      return (
        <div>
          <p>There are no comments</p>
          <CommentCreate id={this.props.id} />
        </div>
      )
    }

    comments.sort(sortBy('-voteScore'))
    return (
      <div>
        <table className="commentList">
          <thead>
            <tr>
              <th>Score</th>
              <th>Controls</th>
              <th>Author</th>
              <th>Content</th>
              <th>TimeStamp</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((comment) => (
              <tr key={comment.id}>
                <td>{comment.voteScore}</td>
                <td>
                  <button onClick={() => voteComment(comment.id, 'upVote')}>Upvote</button>
                  <button onClick={() => voteComment(comment.id, 'downVote')}>Downvote</button>
                </td>
                <td>{comment.author}</td>
                <td>{comment.body}</td>
                <td>{(new Date(comment.timestamp)).toString()}</td>
                <td>
                  <a href="" onClick={() => { this.props.push(`/edit-comment/${comment.id}`) }}>Edit</a> | <a href="" onClick={() => { deleteComment(comment.id) }}>Delete</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <CommentCreate id={this.props.id} onSubmit={this.props.onSubmit} />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  comments: state.comments.comments,
  id: props.id
})

const mapDispatchToProps = (dispatch) => ({
  getComments: (id) => dispatch(fetchComments(id)),
  voteComment: (id, voteType) => dispatch(postVoteComment(id, voteType)),
  deleteComment: id => dispatch(fetchDeleteComment(id)),
  push: (url) => dispatch(push(url)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentList)