import React, { Component } from 'react'
import ArtImage from '../art-image/ArtImage'
import { API } from '../../config'

class ArtColumn extends Component {

    state = {
        images: []
    }

    componentDidMount = () => {
        let artwork = this.props.artwork
        // const images = this.state.images.slice()
    
        fetch(`${API.apiUrl}?method=cooperhewitt.objects.getImages&access_token=${API.apiKey}&id=${artwork.id}`)
            .then(res => res.json())
            .then((data) => {
                // console.log(data.images[0].z.url)
                let newImage = data.images[0].z.url
                this.setState({ images: this.state.images.concat(newImage) })
            })
            .catch(err => console.log(err))
    }

    render() {
        let images = this.state.images
        console.log(images)

        return (
            <div className="art-column" onLoad={this.props.onGetImages}>
                <ArtImage
                    imageUrl={images}
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
