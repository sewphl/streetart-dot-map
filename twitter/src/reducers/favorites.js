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
    default:
      return state
  }
}
