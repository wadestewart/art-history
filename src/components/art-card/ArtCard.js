import React, { Component } from 'react'
import ArtImage from '../art-image/ArtImage'
import Like from '../like/Like'

class ArtCard extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            imageUrls: []
        }
    }

    componentDidMount = () => {
        let artwork = this.props.artwork

        fetch(`https://art-history-back.herokuapp.com/${artwork.id}`)
            .then(res => res.json())
            .then(data => {
                let newImage = data.object.images[0].n.url
                this.setState({ imageUrls: this.state.imageUrls.concat(newImage) })
            })
            .catch(err => console.log(err))
    }

    render() {
        let imageUrls = this.state.imageUrls
        let detail

        if (this.props.artwork.title_raw !== null && this.props.artwork.title_raw !== "") {

            detail = (
                <div className="art-column" onClick={this.props.onArtDetailClick}>

                    <div className="art-summary">
                        <h1>{this.props.artwork.title_raw}</h1>
                        <p>{this.props.artwork.medium}</p>
                    </div>

                    <Like
                        onShowLikes={this.props.onShowLikes}
                        isLiked={this.props.isLiked}
                    />

                    <ArtImage
                        imageUrl={imageUrls}
                    />

                </div>
            )
        } else if (this.props.artwork.title !== null) {
            detail = (
                <div className="art-column" onClick={this.props.onArtDetailClick}>

                    <div className="art-summary">
                        <h1>{this.props.artwork.title}</h1>
                        <p>{this.props.artwork.medium}</p>
                    </div>

                    <Like
                        onShowLikes={this.props.onShowLikes}
                        isLiked={this.props.isLiked}
                    />

                    <ArtImage
                        imageUrl={imageUrls}
                    />

                </div>
            )
        } else {
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
