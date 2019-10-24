export function fetchUserTweets() {
  //debugger
  return (dispatch) => {
    dispatch({ type: 'LOADING_USER_TWEETS' });
    return fetch(`/api/v1/get_user_tweets`,{  //http://localhost:3000
      credentials: "include"})
    .then(response => response.json())
    //.then(myJson=> console.log(myJson))
      //.then(response => {
      //  debugger
        //if (response.error) {
          //debugger
        //  console.log(response)
        //}else {
          //debugger
        //  console.log(response)
        //response.json()
        //}
    //  }
    //)
      .then(user_tweets => dispatch({ type: 'FETCH_USER_TWEETS', payload: user_tweets}));
  };
}
