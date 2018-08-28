// vendors
import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

// components
import HomePage from '../HomePage';
import LoginPage from '../LoginPage';

class App extends Component {
    render() {
        const { className } = this.props;
        return(
            <div className={className}>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/login" component={LoginPage} />
                </Switch>
            </div>
        )
    }
}

const AppWrapper = styled(App)`
`

export default AppWrapper