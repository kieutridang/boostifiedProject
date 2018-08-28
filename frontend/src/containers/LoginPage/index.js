// vendors 
import React, { Component } from 'react';
import styled from 'styled-components';
import InstagramLogin from 'react-instagram-login';

// components
import Settings from '../../config/settings'

const responseInstagram = (response) => {
    console.log(response)
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