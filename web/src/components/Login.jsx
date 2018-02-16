import React, { Component } from 'react';
import { connect } from 'react-redux';

import {doLogin, doLogout} from 'shared';
import {Components} from 'shared';

import './login.css';

class Login extends Components.Login{

    componentWillMount(){
        super.componentWillMount();
        console.log("Child web inheritance will mount")
    }

    render(){
        const {view} = this.state; 
        return(
            <div>
                <div className='tab'>
                    <button className='tablink' type="button" onClick={() => this.showTab('login')}>Login</button>
                    <button className='tablink' type="button" onClick={() => this.showTab('register')}>Register</button>
                </div>
                {view === 'login' ?
                    this.renderLogin()
                :
                    this.renderRegister()    
                }
            </div>
        )
    }

    renderLogin(){
        return(
            !this.props.logedIn ? 
            <div>
                <a href='#' onClick={() => this.login()}>Login</a>
            </div>
            :
            <div>
                <p>userName: {this.props.user.user_name}</p>
                <a href='#' onClick={() => this.logout()}>Logout</a>
            </div>
        );
    }

    renderRegister(){
        return(
            !this.props.logedIn ? 
            <div>
                Register
            </div>
            :
            <div>
                <p>userName: {this.props.user.user_name}</p>
                <a href='#' onClick={() => this.logout()}>Logout</a>
            </div>
        );
    }
}


const mapStateToProps = state => ({
logedIn: state.login.logedIn,
user: state.login.user
});

const mapDispatchToProps = dispatch => ({
login: () => dispatch(doLogin()),
logout: () => dispatch(doLogout())
});


export default connect(mapStateToProps, mapDispatchToProps)(Login);

