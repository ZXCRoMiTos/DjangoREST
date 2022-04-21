import React from 'react'
import {Navigate, Routes, BrowserRouter, Route} from 'react-router-dom'


class LoginForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {login: '', password: ''}
        this.statee = {redirect: 'False'}
    }


    handleChange(event) {
        this.setState(
            {[event.target.name]: event.target.value}
        )
    }

    handleSubmit(event) {
        this.props.get_token(this.state.login, this.state.password)
        event.preventDefault()
    }

    render() {
        return(
            <form className='loginForm' onSubmit={(event) => this.handleSubmit(event)}>
                <h1>Вход</h1>
                <div><input className='loginInput' type='text' name='login' placeholder='login'
                value={this.state.login} onChange={(event) => this.handleChange(event)} /></div>
                <div><input className='passwordInput' type='text' name='password' placeholder='password'
                value={this.state.password} onChange={(event) => this.handleChange(event)} /></div>
                <input className='submitInput' type='submit' value='Login' />
            </form>
        );
    }
}

export default LoginForm;
