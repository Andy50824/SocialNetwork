import React from 'react'
import Header from './Header';
import {connect} from 'react-redux'
import {logout} from '../../Redux/authReducer'


class HeaderContainer extends React.Component {
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

export default connect (mapStateToProps, {logout})(HeaderContainer)