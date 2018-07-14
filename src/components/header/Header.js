import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <nav>
                    <h1>Art History</h1>
                    <h4>An App for Art Education and Discovery</h4>
                    <p>Abstract</p>
                    <p>Figurative</p>
                    <p>Landscape</p>
                    <p>Portraiture</p>
                </nav>
            </div>
        )
    }
}

export default Header
