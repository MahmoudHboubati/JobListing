import React, { Component } from 'react';
import headerBkGround from '../../assets/images/banner.jpg';

class HeaderBackground extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={headerBkGround} className="header-background" alt="header-background" />
            </header>
        );
    }
}

export default HeaderBackground;