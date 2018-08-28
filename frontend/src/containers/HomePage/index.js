// vendors
import React, { Component } from 'react';
import styled from 'styled-components';

// components

class HomePage extends Component {
    render() {
        const { className } = this.props;
        return(
            <div className={className}>
                This is HomePage

            </div>
        )
    }
}

const HomePageWrapper = styled(HomePage)`
`

export default HomePageWrapper