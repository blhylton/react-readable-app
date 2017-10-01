import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchComments
} from './actions'

class CommentList extends Component {
  componentDidMount = () => {
    console.log(this.props)
    this.props.getComments(this.props.id)
  }

  render() {
    const { loading, comments } = this.props;
    if (comments.length === 0 && loading === false) {
      return <p>There are no comments</p>
    }
    return (
      <table className="commentList">
        <thead>
          <tr>
            <th>Score</th>
            <th>Controls</th>
            <th>Author</th>
            <th>Content</th>
            <th>TimeStamp</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment) => (
            <tr key={comment.id}>
              <td>{comment.voteScore}</td>
              <td>
                <button>Upvote</button>
                <button>Downvote</button>
              </td>
              <td>{comment.author}</td>
              <td>{comment.body}</td>
              <td>{(new Date(comment.timestamp)).toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = (state, props) => ({
  comments: state.comments.comments,
  loading: state.comments.loading,
  id: props.id
})

const mapDispatchToProps = (dispatch) => ({
  getComments: (id) => dispatch(fetchComments(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentList)