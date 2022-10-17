import React from 'react'
import s from './Friend.module.css';
import { NavLink } from 'react-router-dom';

const Friend = (props) => {
  return (
    <div className={s.friend}>
        <img src={props.img}></img>
        {props.name}
    </div>
  )
}


export default Friend