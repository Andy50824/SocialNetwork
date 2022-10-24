import React from 'react'
import { addPostCreate} from '../../../Redux/profileReducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
  }  
}
let mapDispatchToProps = (dispatch) => {
  return {
    onAddPost: (newPostText) => {
      dispatch(addPostCreate(newPostText))
    }
  }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
   
export default MyPostContainer