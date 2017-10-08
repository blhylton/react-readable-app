import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchComments,
  postVoteComment
} from './actions'
import CommentCreate from './commentCreate.component'
import sortBy from 'sort-by'
import { push } from 'react-router-redux'

class CommentList extends Component {
  componentDidMount = () => {
    this.props.getComments(this.props.id)
  }

  render() {
    const { loading, comments, voteComment } = this.props;
    if (comments.length === 0 && loading === false) {
      return <p>There are no comments</p>
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
                  <a href="" onClick={() => { this.props.push(`/edit-comment/${comment.id}`) }}>Edit</a>
                  <a href="">Delete</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <CommentCreate id={this.props.id} />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  comments: state.comments.comments,
  loading: state.comments.loading,
  id: props.id
})

const mapDispatchToProps = (dispatch) => ({
  getComments: (id) => dispatch(fetchComments(id)),
  voteComment: (id, voteType) => dispatch(postVoteComment(id, voteType)),
  push: (url) => dispatch(push(url)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentList)