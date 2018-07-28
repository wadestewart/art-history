import React, { Component } from 'react'
import { API } from '../../config'
import ArtImage from '../art-image/ArtImage'
// import Like from 

class ArtColumn extends Component {

    state = {
        imageUrls: []
    }

    componentDidMount = () => {
        let artwork = this.props.artwork

        fetch(`${API.apiUrl}?method=cooperhewitt.objects.getImages&access_token=${API.apiKey}&id=${artwork.id}`)
            .then(res => res.json())
            .then(data => {
                let newImage = data.images[0].z.url
                this.setState({ imageUrls: this.state.imageUrls.concat(newImage) })
            })
    }

    render() {
        let imageUrls = this.state.imageUrls

        return (
            <div className="art-column" onClick={this.props.onDetailsClick}>
                <ArtImage
                    imageUrl={imageUrls}
                />
    
                <div className="art-summary">
                    <h2>{this.props.artwork.title}</h2>
                    <p>{this.props.artwork.medium}</p>
                </div>

                {/* <Like

                /> */}
            </div>
        )
    }    
}

export default ArtColumn
