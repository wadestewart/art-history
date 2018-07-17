import React, { Component } from 'react'
import Card from './Card'

class CardContainer extends Component {

    state = {
        artwork:        [],
        currentIndex:   0,
        timer:          10,
    }

    componentDidMount = () => {
        const clientID = config.clientID
        const clientSecret = config.clientSecret
        const apiUrl = config.apiUrl

        fetch(apiUrl, 
        {
            method: 'POST',
            headers: {
                client_id: clientID,
                client_secret: clientSecret
            }
        })
            .then(function(res) {
                console.log(res)
            })
            .catch(function(err) {
                console.log(err)
            })
    }

    render() {
        return (
            <Card />
        )
    }
}

export default CardContainer
