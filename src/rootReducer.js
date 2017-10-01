import { combineReducers } from 'redux'

import categories from './Categories/reducer'
import posts from './Posts/reducer'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  categories,
  posts,
  router: routerReducer,
  form: formReducer
})