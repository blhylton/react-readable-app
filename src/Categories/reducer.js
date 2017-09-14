import { GET_CATEGORIES } from './actions'

const initialCategoriesState = {
  categories: [],
  loading: true
}
export default function categories(state = initialCategoriesState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
        loading: false
      }
    default:
      return state
  }
}