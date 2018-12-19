import React, { Component } from 'react'
// import { API } from '../../config'
import ArtImage from '../art-image/ArtImage'
import Like from '../like/Like'

class ArtCard extends Component {
    constructor() {
        super()
        
        this.state = {
            imageUrls: []
        }
    }

    componentDidMount = () => {
        let artwork = this.props.artwork

        fetch(`http://localhost:3001/${artwork.id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data.object.images)
                let newImage = data.object.images[0].n.url
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
                    <h1>{this.props.artwork.title}</h1>
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
