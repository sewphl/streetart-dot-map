import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import usersReducer from './reducers/users'
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import tweetsReducer from './reducers/tweets'
import favorites from './reducers/favorites'
import userTweetsReducer from './reducers/user_tweets'

const reducer = combineReducers({
  user: usersReducer,
  currentUser: currentUser,
  loginForm: loginForm,
  tweets: tweetsReducer,
  favoritesForm: favorites,
  user_tweets: userTweetsReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store
