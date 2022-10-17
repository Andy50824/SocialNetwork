import React from 'react'
import { addPostCreate, updatePostCreate } from '../../../Redux/profileReducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }  
}
let mapDispatchToProps = (dispatch) => {
  return {
    onPostChange: (text) => {
      dispatch(updatePostCreate(text))
    },
    onAddPost: () => {
      dispatch(addPostCreate())
    }
  }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
   
export default MyPostContainer