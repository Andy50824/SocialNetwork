import React from 'react';
import './App.css';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';



const App = (props) => {
    return (
      <div className='app-wrapper'>
          <div className='app-wrapper-header'>
          < HeaderContainer />
          </div>
          < Navbar friendsData={props.store.getState().navPage.friendsData} />
          <div className='app-wrapper-content'>
            <Routes>
              <Route path='/profile/:userId' element={<ProfileContainer/>} />
              <Route path='/dialogs/*' element={<DialogsContainer/>}/>
              <Route path='/users' element={<UsersContainer/>}/>
            </Routes>
          </div>
      </div>
      
    );
  }

export default App;