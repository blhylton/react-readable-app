import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchSinglePost,
  postDeletePost
} from './actions'
import { push } from 'react-router-redux'
import PropTypes from 'prop-types'
import CommentList from '../Comments/commentList.component'

class SinglePost extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired
  }

  componentDidMount = () => {
    this.props.getPost(this.props.id)
  }

  render() {
    const { post, id } = this.props

    if (post.title === undefined) {
      return <p>No post with id {id}</p>
    }


    return (
      <div className="post">
        {post.title && (
          <div>
            <h1>{post.title}</h1>
            <p>Current Score: {post.voteScore}</p>
            <p>Timestamp: {(new Date(post.timestamp)).toString()}</p>
            <p>{post.body}</p>
            <p>Author: {post.author}</p>
            <p>Comment Count: {post.commentCount}</p>
            <a href="" onClick={() => { this.props.push(`/edit-post/${post.id}`) }}>Edit</a> | <a href="" onClick={() => { this.props.delete(post.id); this.props.push(`/`) }}>Delete</a>
            <CommentList id={id} />
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  post: state.posts.detailedPost,
  id: props.id
})

const mapDispatchToProps = dispatch => ({
  getPost: (id) => dispatch(fetchSinglePost(id)),
  push: (url) => dispatch(push(url)),
  delete: (id) => dispatch(postDeletePost(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost)