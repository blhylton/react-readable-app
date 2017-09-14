import {
  GET_ALL_POSTS,
  GET_CATEGORY_POSTS,
  GET_SINGLE_POST,
  VOTE_POST,
  CREATE_POST,
  SORT_POSTS_SCORE_ASC,
  SORT_POSTS_SCORE_DESC,
  SORT_POSTS_TIMESTAMP_ASC,
  SORT_POSTS_TIMESTAMP_DESC
} from './actions'

const initialPostsState = {
  posts: [],
  detailedPost: {},
  sort: 'scoreAsc',
  loading: true
}

export default function posts(state = initialPostsState, action) {
  switch (action.type) {
    case GET_ALL_POSTS:
    case GET_CATEGORY_POSTS:
      return {
        ...state,
        posts: action.posts,
        loading: false
      }
    case GET_SINGLE_POST:
      return {
        ...state,
        detailedPost: action.post,
        loading: false
      }
    case VOTE_POST:
      return {
        ...state,
        posts: state.posts.map((obj) => {
          if (obj.id === action.id) {
            obj.voteScore = action.score
          }

          return obj
        })
      }
    case CREATE_POST:
      return {
        ...state,
        detailedPost: action.post
      }
    case SORT_POSTS_SCORE_ASC:
    case SORT_POSTS_SCORE_DESC:
    case SORT_POSTS_TIMESTAMP_ASC:
    case SORT_POSTS_TIMESTAMP_DESC:
      return {
        ...state,
        sort: action.sort
      }
    default:
      return state
  }
}