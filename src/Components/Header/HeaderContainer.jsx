import React from 'react'
import Header from './Header';
import { auth} from '../../Redux/authReducer'
import {connect} from 'react-redux'


class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.auth()

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

export default connect (mapStateToProps, {auth})(HeaderContainer)