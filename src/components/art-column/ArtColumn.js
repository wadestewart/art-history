import React, { Component } from 'react'

class ArtColumn extends Component {
    render() {
        return (
            <div className="art-column">
                <figure>
                    <img src={this.props.image} alt="" />
                </figure>
                <div className="art-summary">
                    <h1>{this.props.title}</h1>
                    <p>{this.props.medium}</p>
                </div>
            </div>
        )
    }
}

export default ArtColumn
