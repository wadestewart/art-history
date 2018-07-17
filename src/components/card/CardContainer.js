import React, { Component } from 'react'
import { config } from '../../config'
import Card from './Card'

const   request         = require('superagent')

class CardContainer extends Component {

    state = {
        artwork:        [],
        currentIndex:   0,
        timer:          10,
    }

    componentDidMount = () => {

        
    
        request
            .post(config.apiUrl)
            .send({
                client_id : config.clientID,
                client_secret : config.clientSecret
            })
            .then((res) => {
                let token = config.xappToken
                token = res.body.token
                requestWithToken(token)
            })

    }

    render() {
        return (
            <Card />
        )
    }
}

export default CardContainer
