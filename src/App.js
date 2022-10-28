import React from 'react';
import './App.css';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import NavbarContainer from './Components/Navbar/NavbarContainer';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import Login from './Components/Login/Login';
import { connect } from 'react-redux';
import {initializeApp} from './Redux/appReducer'


class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
}

  render() {
    if (!this.props.initialStatus) {
      return <div></div>}

    return (
      <div className='app-wrapper'>
          <div className='app-wrapper-header'>
          < HeaderContainer />
          </div>
          < NavbarContainer />
          <div className='app-wrapper-content'>
            <Routes>
              <Route path='/profile/' element={<ProfileContainer/>} />
              <Route path='/profile/:userId' element={<ProfileContainer/>} />
              <Route path='/dialogs/*' element={<DialogsContainer/>}/>
              <Route path='/users' element={<UsersContainer/>}/>
              <Route path='/login' element={<Login/>}/>
            </Routes>
          </div>
      </div>
      
    );
  }}

  const mapStateToProps = (state) => ({
    initialStatus: state.app.initialStatus
})

export default connect(mapStateToProps, {initializeApp})(App);