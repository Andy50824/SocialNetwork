import React from 'react';
import s from './Users.module.css';
import Pagination from "../common/Pagination/Pagination"
import User from "./User"

let Users = (props) => {
    return <div>
                <Pagination totalCount={props.totalCount}  changePages={props.changePages}  
                pageSize={props.pageSize} currentPage={props.currentPage}/>
                    {props.usersData.map(u =>
                <div key={u.id} className={s.users}> 
                    <User {...props} u={u} />
                </div>
            )}
            </div>}

export default Users
        