// synchronous action creators
export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

// asynchronous action creators
export const login = credentials => {
  return dispatch => {
    //const proxyurl = "https://cors-anywhere.herokuapp.com/";
//    return fetch((proxyurl + "http://localhost:3000/api/v1/login"), {
  return fetch(("http://localhost:3000/api/v1/login"), {
      //mode: "no-cors",
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then(r => r.json())
      .then(response => {
        //debugger
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setCurrentUser(response))
          //history.push('/')
        }
      })
      .catch(console.log)
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    //const proxyurl = "https://cors-anywhere.herokuapp.com/";
    //return fetch((proxyurl + "http://localhost:3000/api/v1/get_current_user"), {
    return fetch(("http://localhost:3000/api/v1/get_current_user"), {
      //mode: "no-cors",
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setCurrentUser(response))
        }
      })
      .catch(console.log)
  }
}