import React from 'react'
import { sidebarReducer} from '../../Redux/sidebarReducer'
import Navbar from './Navbar'
import {connect} from 'react-redux'
import {compose} from 'redux'


class NavbarContainer extends React.Component {

    render() {
        return (
        <div>
            <Navbar {...this.props} />
        </div>)
    }}

let mapStateToProps = (state) => {
    return {
        friendsData: state.navPage.friendsData,   
    }}

    export default compose(
        connect(mapStateToProps, {}),
      )(NavbarContainer) 