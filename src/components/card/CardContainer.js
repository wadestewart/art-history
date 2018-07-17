import React, { Component } from 'react'
import { config } from '../../config'
import Card from './Card'

class CardContainer extends Component {

    state = {
        artwork:        [],
        currentIndex:   0,
        timer:          10,
    }

    componentDidMount = () => {
        const request           = require('superagent')

        this.requestWithToken = (token) => {
            const traverson         = require('traverson')
            const JsonHalAdapter    = require('traverson-hal')
            let xappToken = token
    
            traverson.registerMediaType(JsonHalAdapter.mediaType, JsonHalAdapter)
            let api = traverson.from('https://api.artsy.net/api').jsonHal()
    
            api.newRequest()
                .follow('artist')
                .withRequestOptions({
                    headers: {
                        'X-Xapp-Token': xappToken,
                        'Accept': 'application/vnd.artsy-v2+json'
                    }
                })
                .withTemplateParameters({ id: 'andy-warhol' })
                .getResource((err, data) => {
                    if (data) {
                        console.log(data)
                    } else {
                        console.log(err)
                    }
                })
        }

        request
            .post(config.apiUrl)
            .send({
                client_id : config.clientID,
                client_secret : config.clientSecret
            })
            .then((res) => {
                config.xappToken = res.body.token
                this.requestWithToken(config.xappToken)
            })

    }

    componentWillUnmount = () => {

    }

    render() {
        return (
            <Card />
        )
    }
}

export default CardContainer
