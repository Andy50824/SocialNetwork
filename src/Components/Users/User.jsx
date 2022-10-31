import React from 'react';
import s from './Users.module.css';
import userPhoto from "../../assets/images/userPhoto.png"
import {NavLink} from "react-router-dom"


let User = (props) => {
    const u = props.u
    return <div>
        <div>
            <div className={s.photo}>
                <NavLink to={'/profile/'+u.id} key={u.id}>
                    <img  src={u.photos.small != null ? u.photos.small : userPhoto } ></img>
                </NavLink>                    
            </div>
            <div>
                { u.followed 
                
                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { 
                    
                    props.setUnfollowing(u.id)
                    
                }}>unfollow</button>

                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { 
                    props.setFollowing(u.id)

                    }}>follow</button>}   
                
            </div>
            </div>
            <div className={s.rightSide}>
            <div>   
                <div>{u.name}</div>
                <div>{u.status}</div>
            </div>
            <div>
                <div>{"u.location.cityName"}</div>
                <div>{"u.location.country"}</div>
            </div>
        </div>
    </div>
            }
        
export default User
        