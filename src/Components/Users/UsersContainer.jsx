import React from 'react'
import { follow, unfollow, setUsers, setPage, setTotal, toggleFollowingProgress} from '../../Redux/usersReducer'
import Users from './Users'
import {connect} from 'react-redux'
import {userAPI }from '../../api/usersAPI'


class UsersAPI extends React.Component {

    componentDidMount() {
        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.setUsers(data.items);
                this.props.setTotal(data.totalCount)
        })    
}
    changePages = (p) => {
        this.props.setPage(p);
        userAPI.getUsers(p, this.props.pageSize).then(data => {
        this.props.setUsers(data.items)
        })}


    render() {
        return (
        <div>
            <Users {...this.props}/>
        </div>)
    }}

let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage, 
        followingInProgress: state.usersPage.followingInProgress
           
    }}

const UsersContainer = connect(mapStateToProps,{
    follow, unfollow, setUsers, setPage, setTotal, toggleFollowingProgress})(UsersAPI);

export default UsersContainer 