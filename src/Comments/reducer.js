import {
  GET_COMMENTS,
  GET_COMMENT,
  CREATE_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  VOTE_COMMENT
} from './actions'

const initialCommentsState = {
  comments: [],
  detailedComments: {},
  loading: true
}

export default function comments(state = initialCommentsState, action) {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.comments,
        loading: false
      }
    case CREATE_COMMENT:
      return {
        ...state,
        comments: [
          ...state.comments,
          action.comment
        ]
      }
    case VOTE_COMMENT:
      return {
        ...state,
        comments: [
          ...state.comments.filter(c => c.id !== action.comment.id),
          action.comment
        ]
      }
    default:
      return state
  }
}