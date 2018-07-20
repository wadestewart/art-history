import React, { Component } from 'react'

class Card extends Component {

    render() {
        let artworks = this.props.artUrl
        console.log(this.props.artUrl)
        // const artUrl = card._links.thumbnail.href

        return (
            <div>
                {/* <h1>{}</h1> */}
                <figure>
                    <img src={artworks} alt="" />
                </figure>
            </div>
        )
    }
}

export default Card
