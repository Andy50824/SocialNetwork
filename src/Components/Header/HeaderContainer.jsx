import React from 'react'
import Header from './Header';
import axios from 'axios';
import {setAuthUser, getAuthData} from '../../Redux/authReducer'
import {connect} from 'react-redux'
import {userAPI} from '../../api/usersAPI'


class HeaderContainer extends React.Component {
  componentDidMount() {
    userAPI.getAuth().then(data => {
        if (data.resultCode === 0) {
        let {id, login, email} = data.data
        this.props.setAuthUser(id, login, email)}
      }
    )
  }

  render () {
    return (
      <div>
        <Header {...this.props} />
      </div>
    )
  }}

let mapStateToProps = (state) => {
  return {    
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    authData: state.auth.authData,
  }
}

export default connect (mapStateToProps, {setAuthUser, getAuthData})(HeaderContainer)