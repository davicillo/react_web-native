import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    Alert
  } from 'react-native';

import { connect } from 'react-redux';
import {doLogin, doLogout} from 'shared';
import {Components} from 'shared';

class Login extends Components.Login{

    render(){
        return(
            !this.props.logedIn ? 
            <View>
                <Button
                    onPress={() => this.login()}
                    title="Login"
                    color="#841584"
                />
            </View>
            :
            <View>
                <Text>userName: {this.props.user.user_name}</Text>
                <Button
                    onPress={() => this.logout()}
                    title="Logout"
                    color="#841584"
                />
            </View>
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

//export default Login;