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
    default:
      return state
  }
}