export default function tweetsReducer(state = {loading: false, tweets:[]}, action) {
switch (action.type) {

  case 'FETCH_TWEETS':
    return {
      loading: false,
      tweets: action.payload
    }
  case 'LOADING_TWEETS':
    return {
      ...state,
      loading: true
    }
  default:
    return state;
}
}
