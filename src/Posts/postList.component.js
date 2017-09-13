import React, { Component } from 'react'
import { connect } from 'react-redux'
import sortBy from 'sort-by'
import {
  fetchAllPosts,
  fetchCategoryPosts,
  sortPostsScoreAsc,
  sortPostsScoreDesc,
  sortPostsTimestampAsc,
  sortPostsTimestampDesc
} from './actions'
import PropTypes from 'prop-types'

class PostList extends Component {
  static propTypes = {
    category: PropTypes.string
  }

  static defaultProps = {
    sort: 'scoreAsc'
  }

  componentDidMount = () => {
    if (this.props.category) {
      this.props.getCategoryPosts(this.props.category)
    } else {
      this.props.getPosts()
    }
  }

  render() {
    const { posts, sort, sortScoreAsc, sortScoreDesc, sortTimestampAsc, sortTimestampDesc } = this.props
    if (posts.length === 0) {
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
              {post.title}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}


const mapStateToProps = (state) => (state.posts)

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(fetchAllPosts()),
  getCategoryPosts: (data) => dispatch(fetchCategoryPosts('react')),
  sortScoreAsc: () => dispatch(sortPostsScoreAsc()),
  sortScoreDesc: () => dispatch(sortPostsScoreDesc()),
  sortTimestampAsc: () => dispatch(sortPostsTimestampAsc()),
  sortTimestampDesc: () => dispatch(sortPostsTimestampDesc())
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList)