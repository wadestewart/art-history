import React, { Component } from 'react'

class ArtColumn extends Component {

    componentDidMount = (props) => {
        // console.log(this.props.artwork)
    }

    render() {
        return (
            <div className="art-column">
                <figure>
                    <img src={this.props.image} alt="" />
                </figure>
                <div className="art-summary">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.medium}</p>
                </div>
            </div>
        )
    }
}

export default ArtColumn
