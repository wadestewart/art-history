import React, { Component } from 'react'

class ArtColumn extends Component {
    render() {
        return (
            <div className="art-summary">
                <figure>
                    <img src={this.props.image} alt="" />
                </figure>
            </div>
        )
    }
}

export default ArtColumn
