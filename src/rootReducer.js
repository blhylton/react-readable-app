import { combineReducers } from 'redux'

import categories from './Categories/reducer'
import posts from './Posts/reducer'

export default combineReducers({
  categories,
  posts
})