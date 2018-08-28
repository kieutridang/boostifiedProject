// vendors 
import React, { Component } from 'react';
import styled from 'styled-components';
import InstagramLogin from 'react-instagram-login';
import axios from 'axios';

// components
import Settings from '../../config/settings'

const responseInstagram = (response) => {
    const token = response
    console.log(token)
    const data = {
        token: token
    }
    
    axios.post(`${Settings.baseSocialAuthServerUrl}/instagramer/instagram`, {data}).then(res => {

    })
    
}

class LoginPage extends Component {
    render() {
        const { className } = this.props;
        return(
            <div className={className}>
                <InstagramLogin 
                    clientId={Settings.instagramClientId}
                    buttonText="Instagram"
                    onSuccess={responseInstagram}
                    onFailure={responseInstagram}
                />
            </div>
        )
    }
}

const LoginPageWrapper = styled(LoginPage)`
`

export default LoginPageWrapper