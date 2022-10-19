import React from 'react'
import { Navigate } from 'react-router-dom';
import {connect} from 'react-redux'

let mapStateToPropsRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export let withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render () { 
            if (!this.props.isAuth) return <Navigate to={"/Login"}/>

            return <Component {...this.props}/>
        }
    }

    const withAuthRedirectContainer = connect(mapStateToPropsRedirect)(RedirectComponent)

    return withAuthRedirectContainer;
}

