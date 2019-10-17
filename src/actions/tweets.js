import fetch from 'isomorphic-fetch';

// synchronous action creators
//export const setTweets = tweet => {
//  return {
//    type: "SET_TWEETS",
//    tweet
//  }
//}

//async action creators

export function fetchTweets() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_TWEETS' });
    //const myUrl = window.location.origin.replace(/:\d+/,':3000')
    return fetch('http://localhost:3000/api/v1/get_tweets')
    //return fetch(myUrl + '/api/v1/get_tweets')
      .then(response => response.json())
      .then(tweets => dispatch({ type: 'FETCH_TWEETS', payload: tweets}));
  };
}
