import React from 'react'
import Profile from './Profile';
import axios from 'axios';
import {setProfile} from '../../Redux/profileReducer'
import {connect} from 'react-redux'
import { useParams } from "react-router-dom"
import {userAPI} from '../../api/usersAPI';

class ProfileContainer extends React.Component {
  componentDidMount() {
    
    let user = this.props.match.params.userId
    userAPI.getUser(user).then(  
      data => {
        this.props.setProfile(data)
      }
    )
  }

  render () {
    return (
      <div>
        <Profile {...this.props} />
      </div>
    )
  }}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}

export function withRouter(Children) {
  return(props) => {
    const match = {params: useParams()}
      return <Children{...props} match={match}/>  
    }
}

export default connect (mapStateToProps, {setProfile})(withRouter(ProfileContainer))