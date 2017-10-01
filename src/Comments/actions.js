import * as CommentAPIUtil from './utils'

export const GET_COMMENTS = 'GET_COMMENTS'
export const GET_COMMENT = 'GET_COMMENT'
export const CREATE_COMMENT = 'CREATE_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const VOTE_COMMENT = 'VOTE_COMMENT'

export const getComments = (comments) => (
  {
    type: GET_COMMENTS,
    comments
  }
)

export const fetchComments = (postId) => dispatch => {
  console.log(postId);
  return CommentAPIUtil
    .fetchCommentsForPost(postId)
    .then((res) => res.json())
    .then(json => { console.log(json); return dispatch(getComments(json)) })
}