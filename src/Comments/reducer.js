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
  detailedComment: {}
}

export default function comments(state = initialCommentsState, action) {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.comments,
      }
    case GET_COMMENT:
      return {
        ...state,
        detailedComment: action.comment
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
    case UPDATE_COMMENT:
      return {
        ...state,
        comments: [
          ...state.comments.filter(c => c.id !== action.comment.id),
          action.comment
        ],
        detailedComment: action.comment
      }
    case DELETE_COMMENT:
      return {
        ...state,
        comments: [
          ...state.comments.filter(c => c.id !== action.comment.id),
        ]
      }
    default:
      return state
  }
}