import React from 'react';
import s from './Users.module.css';
import userPhoto from "../../assets/images/userPhoto.png"
import {NavLink} from "react-router-dom"


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalCount/props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount;i++) {
        pages.push(i);
    }
    return <div>
                <div>
                    {pages.map(p => {
                        return <span className={props.currentPage === p && s.selected}
                            onClick={() => {props.changePages(p)}}>{p}</span>
                })}
                </div>
                    {props.usersData.map(u => <div key={u.id} className={s.users}>
                <div>
                    <div className={s.photo}>
                        <NavLink to={'/profile/'+u.id} key='id'>
                            
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
            )}
        
            </div>}

export default Users
        