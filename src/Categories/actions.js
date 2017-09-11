import * as CategoryAPIUtil from './utils'

export const GET_CATEGORIES = 'GET_CATEGORIES'

export const getCategories = (categories) => (
  {
    type: GET_CATEGORIES,
    categories
  }
)

export const fetchCategories = () => dispatch => (
  CategoryAPIUtil
    .fetchCategories()
    .then((res) => res.json())
    .then(json => dispatch(getCategories(json.categories)))
)

