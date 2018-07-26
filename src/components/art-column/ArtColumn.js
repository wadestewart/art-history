import React, { Component } from 'react'
import { API } from '../../config'
import ArtImage from '../art-image/ArtImage'

class ArtColumn extends Component {

    state = {
        imageUrls: []
    }

    componentDidMount = () => {
        let artwork = this.props.artwork
        // console.log(this.props)

        fetch(`${API.apiUrl}?method=cooperhewitt.objects.getImages&access_token=${API.apiKey}&id=${artwork.id}`)
            .then(res => res.json())
            .then(data => {
                //   console.log(data.images[0].z.url)
                let newImage = data.images[0].z.url
                this.setState({ imageUrls: this.state.imageUrls.concat(newImage) })
            })
    }

    render() {
        let imageUrls = this.state.imageUrls
        console.log(imageUrls)

        return (
            <div className="art-column">
                <ArtImage
                    imageUrls={imageUrls}
                />
    
                <div className="art-summary">
                    <h2>{this.props.artwork.title}</h2>
                    <p>{this.props.artwork.medium}</p>
                </div>
            </div>
        )
    }    
}

export default ArtColumn
