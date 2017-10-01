import * as PostAPIUtil from './utils'
import uuid from 'uuid/v1'

export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const GET_CATEGORY_POSTS = 'GET_CATEGORY_POSTS'
export const GET_SINGLE_POST = 'GET_SINGLE_POST'
export const CREATE_POST = 'CREATE_POST'
export const VOTE_POST = 'VOTE_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const SORT_POSTS_SCORE_ASC = 'SORT_POSTS_SCORE_ASC'
export const SORT_POSTS_SCORE_DESC = 'SORT_POSTS_SCORE_DESC'
export const SORT_POSTS_TIMESTAMP_ASC = 'SORT_POSTS_TIMESTAMP_ASC'
export const SORT_POSTS_TIMESTAMP_DESC = 'SORT_POSTS_TIMESTAMP_DESC'
export const STOP_LOADER = 'STOP_LOADER'

export const getAllPosts = (posts) => (
  {
    type: GET_ALL_POSTS,
    posts
  }
)

export const fetchAllPosts = () => dispatch => (
  PostAPIUtil
    .fetchAllPosts()
    .then((res) => res.json())
    .then(json => dispatch(getAllPosts(json)))
)

export const getCategoryPosts = (posts) => (
  {
    type: GET_CATEGORY_POSTS,
    posts
  }
)

export const fetchCategoryPosts = (category) => dispatch => (
  PostAPIUtil
    .fetchCategoryPosts(category)
    .then((res) => res.json())
    .then(json => dispatch(getCategoryPosts(json)))
)

export const getPost = (post) => (
  {
    type: GET_SINGLE_POST,
    post
  }
)

export const fetchSinglePost = (id) => dispatch => (
  PostAPIUtil
    .fetchSinglePost(id)
    .then((res) => res.json())
    .then(json => dispatch(getPost(json)))
)

export const votePost = (id, score) => (
  {
    type: VOTE_POST,
    id,
    score
  }
)

export const postVotePost = (id, type) => dispatch => (
  PostAPIUtil
    .votePost(id, type)
    .then((res) => res.json())
    .then(json => dispatch(votePost(id, json.voteScore)))
)

export const createPost = (post) => ({
  type: CREATE_POST,
  post
})

export const postCreatePost = (title, body, author, category) => dispatch => (
  PostAPIUtil
    .createPost({ title, body, author, category, timestamp: + new Date(), id: uuid() })
    .then(res => res.json())
    .then(json => dispatch(createPost(json)))
)

export const updatePost = (post) => ({
  type: UPDATE_POST,
  post
})

export const postUpdatePost = (post) => dispatch => (
  PostAPIUtil
    .updatePost(post)
    .then(res => res.json())
    .then(json => dispatch(updatePost(json)))
)

export const deletePost = (post) => ({
  type: DELETE_POST,
  post
})

export const postDeletePost = (id) => dispatch => (
  PostAPIUtil
    .deletePost(id)
    .then(res => res.json())
    .then(json => { console.log(json); return dispatch(deletePost(json)) })
)

export const sortPostsScoreAsc = () => (
  {
    type: SORT_POSTS_SCORE_ASC,
    sort: 'scoreAsc'
  }
)

export const sortPostsScoreDesc = () => (
  {
    type: SORT_POSTS_SCORE_DESC,
    sort: 'scoreDesc'
  }
)

export const sortPostsTimestampAsc = () => (
  {
    type: SORT_POSTS_TIMESTAMP_ASC,
    sort: 'timestampAsc'
  }
)

export const sortPostsTimestampDesc = () => (
  {
    type: SORT_POSTS_TIMESTAMP_DESC,
    sort: 'timestampDesc'
  }
)

export const stopLoaderAnimation = () => (
  {
    type: STOP_LOADER
  }
)