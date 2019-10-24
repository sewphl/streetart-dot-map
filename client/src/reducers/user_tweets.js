export default function userTweetsReducer(state = {loading: false, user_tweets:[]}, action) {
switch (action.type) {

  case 'FETCH_USER_TWEETS':
    return {
      loading: false,
      tweets: action.payload
    }
  case 'LOADING_USER_TWEETS':
    return {
      ...state,
      loading: true
    }
  default:
    return state;
}
}
