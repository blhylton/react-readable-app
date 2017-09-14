import React, { Component } from 'react'
import { connect } from 'react-redux'
import sortBy from 'sort-by'
import {
  fetchAllPosts,
  fetchCategoryPosts,
  postVotePost,
  sortPostsScoreAsc,
  sortPostsScoreDesc,
  sortPostsTimestampAsc,
  sortPostsTimestampDesc
} from './actions'
import PropTypes from 'prop-types'
import { push } from 'react-router-redux'

class PostList extends Component {
  static propTypes = {
    category: PropTypes.string
  }

  componentDidMount = () => {
    if (this.props.category) {
      this.props.getCategoryPosts(this.props.category)
    } else {
      this.props.getPosts()
    }
  }

  render() {
    const { posts, sort, sortScoreAsc, sortScoreDesc, sortTimestampAsc, sortTimestampDesc, loading } = this.props
    if (posts.length === 0 && loading === false) {
      return <p>There are no posts available :(</p>
    }

    switch (sort) {
      case 'scoreAsc':
        posts.sort(sortBy('-voteScore'))
        break;
      case 'scoreDesc':
        posts.sort(sortBy('voteScore'))
        break;
      case 'timestampAsc':
        posts.sort(sortBy('-timestamp'))
        break;
      case 'timestampDesc':
        posts.sort(sortBy('timestamp'))
        break;
      default:
        posts.sort(sortBy('-voteScore'))
    }

    return (
      <div className="post-list-container">
        <button onClick={sortScoreAsc}>Score Ascending</button>
        <button onClick={sortScoreDesc}>Score Descending</button>
        <button onClick={sortTimestampAsc}>Time Ascending</button>
        <button onClick={sortTimestampDesc}>Time Descending</button>
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.id}>
              <button onClick={() => { this.props.upvotePost(post.id) }}>Upvote</button>
              <button onClick={() => { this.props.downvotePost(post.id) }}>Downvote</button>
              <a href="" onClick={() => { this.props.push(`/post/${post.id}`) }}>{post.title}</a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}


const mapStateToProps = (state, props) => ({
  posts: state.posts.posts,
  loading: state.posts.loading,
  sort: state.posts.sort,
  category: props.category
}
)

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(fetchAllPosts()),
  getCategoryPosts: (category) => dispatch(fetchCategoryPosts(category)),
  sortScoreAsc: () => dispatch(sortPostsScoreAsc()),
  sortScoreDesc: () => dispatch(sortPostsScoreDesc()),
  sortTimestampAsc: () => dispatch(sortPostsTimestampAsc()),
  sortTimestampDesc: () => dispatch(sortPostsTimestampDesc()),
  push: (url) => dispatch(push(url)),
  upvotePost: (id) => dispatch(postVotePost(id, 'upVote')),
  downvotePost: (id) => dispatch(postVotePost(id, 'downVote'))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList)