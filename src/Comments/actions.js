import * as CommentAPIUtil from './utils'
import uuid from 'uuid/v1'

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

export const fetchComments = (postId) => dispatch => (
  CommentAPIUtil
    .fetchCommentsForPost(postId)
    .then((res) => res.json())
    .then(json => dispatch(getComments(json)))
)

export const getComment = comment => (
  {
    type: GET_COMMENT,
    comment
  }
)

export const fetchComment = commentId => dispatch => (
  CommentAPIUtil
    .fetchCommentDetails(commentId)
    .then(res => res.json())
    .then(json => dispatch(getComment(json)))
)

export const createComment = (comment) => (
  {
    type: CREATE_COMMENT,
    comment
  }
)

export const postCreateComment = (comment) => dispatch => (
  CommentAPIUtil
    .createComment({ author: comment.author, body: comment.body, parentId: comment.parent, timestamp: + new Date(), id: uuid() })
    .then(res => res.json())
    .then(json => dispatch(createComment(json)))
)

export const voteComment = (comment) => (
  {
    type: VOTE_COMMENT,
    comment
  }
)

export const postVoteComment = (id, voteType) => dispatch => (
  CommentAPIUtil
    .voteComment(id, voteType)
    .then(res => res.json())
    .then(json => dispatch(voteComment(json)))
)

export const editComment = (comment) => (
  {
    type: UPDATE_COMMENT,
    comment
  }
)

export const updateComment = (comment) => dispatch => (
  CommentAPIUtil
    .editComment(comment)
    .then(res => res.json())
    .then(json => dispatch(editComment(json)))
)

export const deleteComment = comment => (
  {
    type: DELETE_COMMENT,
    comment
  }
)

export const fetchDeleteComment = id => dispatch => (
  CommentAPIUtil
    .deleteComment(id)
    .then(res => res.json())
    .then(json => dispatch(deleteComment(json)))
)