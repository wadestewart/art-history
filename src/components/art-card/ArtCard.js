import React, { Component } from 'react'
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
        let detail

        if (this.props.artwork.title_raw !== null && this.props.artwork.title_raw !== "") {
            // console.log('title is raw!')

            detail = (
                <div className="art-column" onClick={this.props.onArtDetailClick}>

                    <ArtImage
                        imageUrl={imageUrls}
                    />
        
                    <div className="art-summary">
                        <h1>{this.props.artwork.title_raw}</h1>
                        <p>{this.props.artwork.medium}</p>
                    </div>

                    <Like
                        onShowLikes={this.props.onShowLikes}
                        isLiked={this.props.isLiked}
                    />

                </div>
            )
        } else if (this.props.artwork.title !== null) {
            // console.log('title is not raw!')
            console.log(this.props.artwork.title)

            detail = (
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
        } else {
            console.log('title is neither raw or not raw!')

            detail = (
                <div className="art-column" onClick={this.props.onArtDetailClick}>

                    <ArtImage
                        imageUrl={imageUrls}
                    />
        
                    <div className="art-summary">
                        <h1>No Title Available</h1>
                        <p>{this.props.artwork.medium}</p>
                    </div>

                    <Like
                        onShowLikes={this.props.onShowLikes}
                        isLiked={this.props.isLiked}
                    />

                </div>
            )
        }

        return (
            <div>
                {detail}
            </div>
        )
    }
}

export default ArtCard
