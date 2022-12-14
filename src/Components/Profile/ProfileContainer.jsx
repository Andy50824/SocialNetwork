import React from 'react'
import Profile from './Profile';
import {getProfile, getStatus, updateStatus} from '../../Redux/profileReducer'
import {connect} from 'react-redux'
import { useParams} from "react-router-dom"
import {compose} from 'redux'
import {withAuthRedirect} from '../../Hok/withAuthRedirect'

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId

    if (!userId) {
      userId = this.props.authUserId
    }
    
    this.props.getProfile(userId)
    this.props.getStatus(userId)
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
    profile: state.profilePage.profile,
    userStatus: state.profilePage.userStatus,
    authUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    }
}

export function withRouter(Children) {
  return(props) => {
    const match = {params: useParams()}
      return <Children{...props} match={match}/>  
    }
}

export default compose(
                      withRouter,
                      connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
                      withAuthRedirect
                    )(ProfileContainer)