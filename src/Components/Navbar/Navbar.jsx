import React from 'react'
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friend from './Friend/Friend'

const Navbar = (props) => {
    return(
        <nav className= {s.nav}>
          <div>
            <div className={s.item}>
              <NavLink to="/profile" 
              className={navData => navData.isActive ? s.active:s.item}>Profile</NavLink>
            </div>
            <div  className={s.item}>
              <NavLink to="/dialogs" 
              className={navData => navData.isActive ? s.active:s.item}>Messages</NavLink>
            </div>
            <div  className={s.item}>
              <NavLink to="/users" 
              className={navData => navData.isActive ? s.active:s.item}>Friends</NavLink>
            </div>
            <div className={s.item}>
              <NavLink to="news" 
              className={navData => navData.isActive ? s.active:s.item}>News</NavLink>
            </div>
            <div className={s.item}>
              <NavLink to="music"
               className={navData => navData.isActive ? s.active:s.item}>Music</NavLink>
            </div>
            <div className={s.item}>
              <NavLink to="settings"
               className={navData => navData.isActive ? s.active:s.item}>Settings</NavLink>
            </div>
          </div>
          <div>
            <h3>Friends</h3>
            <div>
              <img></img>
              <div>
                {props.friendsData.map(f => <Friend name={f.name} img={f.img} />)}
              </div>
            </div>
          </div>
        </nav>

    )
}

export default Navbar