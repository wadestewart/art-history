import React, { Component } from 'react'

class Card extends Component {

    render() {
        let card = this.props.card
        // let url = card.iiifbaseuri + '/square/full/0/default.jpg'
        console.log(card)
        // console.log(url)
        // const artUrl = card._links.thumbnail.href

        return (
            <div>
                <h1>{}</h1>
                {/* <figure>
                    <img src={url} alt="" />
                </figure> */}
            </div>
        )
    }
}

export default Card
