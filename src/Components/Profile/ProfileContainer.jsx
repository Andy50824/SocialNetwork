import React from 'react'
import Profile from './Profile';
import {getProfile} from '../../Redux/profileReducer'
import {connect} from 'react-redux'
import { useParams, Navigate } from "react-router-dom"
import {withAuthRedirect} from '../../Hok/withAuthRedirect'

class ProfileContainer extends React.Component {
  componentDidMount() {

    this.props.getProfile(this.props.match.params.userId)
  }
  
  render () {
    
    return (
      <div>
        <Profile {...this.props} />
      </div>
    )
  }}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  }
}

export function withRouter(Children) {
  return(props) => {
    const match = {params: useParams()}
      return <Children{...props} match={match}/>  
    }
}

export default connect (mapStateToProps, {getProfile})(withRouter(AuthRedirectComponent))