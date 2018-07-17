import React, { Component } from 'react'
import { config } from '../../config'
import Card from './Card'

class CardContainer extends Component {

    state = {
        artwork:        [],
        currentIndex:   0,
        timer:          10,
    }

    componentDidMount = (token) => {
        const request           = require('superagent')
        const traverson         = require('traverson')
        const JsonHalAdapter    = require('traverson-hal')
        let xappToken = token

        traverson.registerMediaType(JsonHalAdapter.mediaType, JsonHalAdapter)
        let api = 

        request
            .post(config.apiUrl)
            .send({
                client_id : config.clientID,
                client_secret : config.clientSecret
            })
            .then((res) => {
                config.xappToken = res.body.token
                this.componentDidMount(config.xappToken)
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
