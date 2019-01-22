import React, { Component } from 'react'
import './Header.css'

class Header extends Component {

    render() {
        return (
            <div className="header">
                <nav>
                    <h2 onClick={this.props.onReload}>Art Education</h2>
                    <h3>Equal parts ignorance and bliss</h3>
                </nav>
            </div>
        )
    }
}

export default Header
