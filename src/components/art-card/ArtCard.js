import React, { Component } from 'react'
import { API } from '../../config'
import ArtImage from '../art-image/ArtImage'
import Like from '../like/Like'

class ArtCard extends Component {

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
            .catch(err => console.log(err))
    }

    render() {
        let imageUrls = this.state.imageUrls

        return (
            <div className="art-column" onClick={this.props.onArtDetailClick}>

                <ArtImage
                    imageUrl={imageUrls}
                />
    
                <div className="art-summary">
                    <h2>{this.props.artwork.title}</h2>
                    <p>{this.props.artwork.medium}</p>
                </div>

                <Like
                    onShowLikes={this.props.onShowLikes}
                    isLiked={this.props.isLiked}
                />

            </div>
        )
    }
}

export default ArtCard
