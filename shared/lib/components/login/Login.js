import React, { Component } from 'react';

class Login extends Component{
    constructor(props){
        super(props);

        this.state={
            view: 'login'
        }
    }

    componentWillMount(){
        console.log("Parent (inheritance)  will mount")
    }

    login(){
        this.props.login();
    }

    logout(){
        this.props.logout();
    }

    showTab(tab){
        this.setState({
            view: tab
        })
    }

}


export default Login;



