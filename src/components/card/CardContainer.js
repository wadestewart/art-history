import React, { Component } from 'react'
import { API } from '../../config'
import Card from './Card'

class CardContainer extends Component {

    state = {
        artworks:        [],
        timer:          10
    }

    componentDidMount = () => {

        fetch(`${API.apiUrl}?query=Degas&reusability=open&media=true&wskey=${API.apiKey}`)
            .then(res => res.json())
            .then(data => this.setState({ artworks: data }))
            .catch(err => console.log(err))
    }

    render() {
        let card = this.state.artworks.items

        // const artworks = card.map((artwork) => {
        //     console.log(artwork)
            // return (
            //     <h1>{artist.name}</h1>
            //     <Card
            //      card={card}
                 
            //     />
            // )
        // })

        return (
            <div className="container">
                {card && (
                    <Card card={card} />
                )}
            </div>
        )
    }
}

export default CardContainer

// This is the request to Artys's API - need to add superagent, traverson traverson-hal to use
    // componentDidMount = () => {
    //     const request           = require('superagent')

    //     this.requestWithToken = (token) => {
    //         const traverson         = require('traverson')
    //         const JsonHalAdapter    = require('traverson-hal')
    //         let xappToken = token
    
    //         traverson.registerMediaType(JsonHalAdapter.mediaType, JsonHalAdapter)
    //         let api = traverson.from('https://api.artsy.net/api').jsonHal()
    
    //         api.newRequest()
    //             .follow('artists')
    //             .withRequestOptions({
    //                 headers: {
    //                     'X-Xapp-Token': xappToken,
    //                     'Accept': 'application/vnd.artsy-v2+json'
    //                 }
    //             })
    //             .withTemplateParameters({ term: 'andy' })
    //             .getResource((err, data) => {
    //                 if (data) {
    //                     this.setState({ artworks: data._embedded.artists })
    //                     // console.log(data._embedded.artists)
    //                     // console.log(this.state.artwork)
    //                 } else {
    //                     console.log(err)
    //                 }
    //             })
    //     }

    //     request
    //         .post(config.apiUrl)
    //         .send({
    //             client_id : config.clientID,
    //             client_secret : config.clientSecret
    //         })
    //         .then((res) => {
    //             config.xappToken = res.body.token
    //             this.requestWithToken(config.xappToken)
    //         })

    // }
