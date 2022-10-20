import React from 'react'
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './Myposts/MyPostsContainer';


const Profile = (props) => {
  debugger
  return (
    <div>
      <ProfileInfo {...props}/>
      <MyPostsContainer/>
    </div>
  )
}

export default Profile