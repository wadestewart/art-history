import React, { Component } from 'react'
import ArtDetail from './ArtDetail'

class ArtDetailContainer extends Component {

    constructor() {
        super()

        this.handleDetailsClick = this.handleArtDetailClick.bind(this)

        this.state = {
            images: [],
            current:  {},
        }
    }

    handleArtDetailClick = (artwork) => {

        console.log('Fetching data for ' + artwork.title)
        fetch(`${API.apiUrl}?method=cooperhewitt.objects.getInfo&access_token=${API.apiKey}&id=${artwork.id}`)
          .then(res => res.json())
          .then(data => {
            this.setState({ current: data.object })
            this.setState({ images: this.state.current.images[0] })
          })
          .catch(err => console.log(err))
    
    }

    render() {
        return (
            <div>
                <ArtDetail 
                    artwork={this.state.current}
                    images={this.state.images}
                    onTimerEnd={this.next}
                />
            </div>
        )
    }
}

export default ArtDetailContainer
