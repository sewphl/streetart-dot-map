const initialState = {
  user_id: "",
  tweet_id: "",
  comment: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_FAVORITE_FORM":
      return action.postData
    case "POST_FAVORITE":
      return action.postData
    case "RESET_FAVORITE":
      return initialState
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
      return state
  }
}
