import React from 'react'
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if (!props.profile) {
      return <></>}
    debugger
    return (
        <div>
            <div className={s.imageBlock}>
              {/* <img src='https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q='></img> */}
            </div>
            <div className={s.descriptionBlock}>
              <img src={props.profile.photos.large} className={s.profilePhoto}></img>
              <ProfileStatus userStatus={props.userStatus} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo