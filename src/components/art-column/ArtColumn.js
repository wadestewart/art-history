import React, { Component } from 'react'
import ArtImage from '../art-image/ArtImage'
import { API } from '../../config'

class ArtColumn extends Component {

    state = {
        images: []
    }

    componentDidMount = () => {
        let artwork = this.props.artwork
    
        fetch(`${API.apiUrl}?method=cooperhewitt.objects.getImages&access_token=${API.apiKey}&id=${artwork.id}`)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    render() {
        

        return (
            <div className="art-column" onLoad={this.props.onGetImages}>
                <ArtImage
                    artwork={this.props.artwork}
                />

                <div className="art-summary">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.medium}</p>
                </div>
            </div>
        )
    }
}

export default ArtColumn
