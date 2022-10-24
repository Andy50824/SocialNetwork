import React from 'react'
import s from '../common/FormsControl/FormsControls.module.css'
import {reduxForm, Field} from 'redux-form'
import {requiredFields} from "../../utils/validators/validators"
import { Input } from '../common/FormsControl/FormsControls'
import { connect } from 'react-redux'
import {login} from '../../Redux/authReducer'
import { Navigate } from 'react-router-dom';

const LoginForm = (props) => {
    
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='login' name={"email"} component={Input}
                validate={requiredFields}/>
            </div>
            <div>
                <Field placeholder='password' name={"password"}  component={Input}
                validate={requiredFields} type={"password"}/>
            </div>
            <div>
                <Field placeholder='remember me' type='checkbox' name={"rememberMe"}  component={"input"}/>
            </div>
            {props.error && <div className={s.errorLogin}>{props.error}</div>}
            
            <button>registration</button>
        </form>

     )
}

const LoginReduxForm = reduxForm({form: 'Login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    return (
        <div>
            {props.isAuth ? <Navigate to={'/profile'}/> :
                <div>
                    <h1>Registration form</h1>
                    <LoginReduxForm onSubmit={onSubmit}/>
                </div> }
        </div>
        )
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})



export default connect(mapStateToProps, {login})(Login)