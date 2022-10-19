import React from 'react'
import { setPage, getUsers, setFollowing, setUnfollowing} from '../../Redux/usersReducer'
import Users from './Users'
import {connect} from 'react-redux'


class UsersAPI extends React.Component {

    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize)  
}
    changePages = (p) => {

        this.props.setPage(p);
        this.props.getUsers(p, this.props.pageSize)
    }

    render() {
        return (
        <div>
            <Users {...this.props} changePages={this.changePages} />
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
    setFollowing, setUnfollowing,
    setPage, getUsers})(UsersAPI);

export default UsersContainer 