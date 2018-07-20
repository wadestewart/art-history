import React, { Component } from 'react'
import { API } from '../../config'
import Card from './Card'

class CardContainer extends Component {

    state = {
        // artwork: undefined,
        artworks:        [],
        // currentIndex:   0,
        timer:          10,
    }

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

    componentDidMount = () => {

        fetch(`${API.apiUrl}/${API.apiResource}/465906?q=width:>1500&apikey=${API.apiKey}`)
            .then(res => res.json())
            .then(data => this.setState({ artworks: data.iiifbaseuri }))
            .catch(err => console.log(err))
    }

    // componentWillUnmount = () => {

    // }

    render() {
        let card = this.state.artworks
        let artUrl = card + '/square/full/0/default.jpg'
        // console.log(artUrl)

        // const artists = card.map((artist) => {
        //     console.log(artist)
        //     return (
        //         <h1>{artist.name}</h1>
        //         <Card
        //          artist={artist}
        //         />
        //     )
        // })

        return (
            <div className="container">
                {card && (
                    <Card card={card} artUrl={artUrl}/>
                )}
            </div>
        )
    }
}

export default CardContainer
