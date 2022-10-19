import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://cdn.dribbble.com/userupload/3000718/file/original-3aad87878399c27752ecdb2deb03dcb0.jpg?compress=1&resize=320x240&vertical=top'></img> 
            <div className={s.login}>
                
                { props.isAuth ? props.login :
                 <NavLink to={'/login'}>Login</NavLink>}
            </div>
            
        </header>
        
   )
}

export default Header