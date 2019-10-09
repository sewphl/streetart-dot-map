export const updateFavoriteForm = postData => {
  return {
    type: "UPDATE_FAVORITE_FORM",
    postData
  }
}

export const postFavorite = postData => {
  return {
    type: "POST_FAVORITE",
    postData
  }
}

export const resetFavorite = () => {
  return {
    type: "RESET_FAVORITE"
  }
}

//async
export const favorite = theFavorite => {
  return dispatch => {
  return fetch(("http://localhost:3000/api/v1/post_user_tweets"), {
      //credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(theFavorite)
    })
      .then(r => r.json())
      .then(response => {
        //debugger
        if (response.error) {
          //alert(response.error)
          console.log(response)
        } else {
          dispatch(postFavorite(response))
          //history.push('/')
        }
      })
      .catch(console.log)
  }
}
