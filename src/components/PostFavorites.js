import React from 'react'
import { connect } from 'react-redux'
import { favorite, updateFavoriteForm } from "../actions/favorites"

const PostFavorites = ({ postData, favorite, history }) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFavoriteInfo = {
      ...postData,
      [name]: value
    }
    updateFavoriteForm(updatedFavoriteInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    favorite(postData)
  }

  //const myUser = {this.props.currentUser.id}
  //const myTweet = {this.state.selectedTweetID}

  return (
    <form  onSubmit = {handleSubmit}>
      <input type="hidden" name="user_id" value={postData.user_id = 3} />
      <input type="hidden" name="tweet_id" value={postData.tweet_id = 39} />
      <textarea name="comment" value={postData.comment} onChange={handleInputChange} placeholder="Add a note" cols="20" rows="5"></textarea>
      <input type="submit" value="Add to my favorites" />
    </form>
  )
}

const mapStateToProps = state => {
  return {
    postData: state.favoritesForm
  }
}

export default connect(mapStateToProps, { updateFavoriteForm, favorite } )(PostFavorites)
