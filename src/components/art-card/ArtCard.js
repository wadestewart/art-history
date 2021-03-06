import React, { Component } from 'react'
import SmallImage from '../small-mage/SmallImage'
import Like from '../like/Like'
import './ArtCard.css'

class ArtCard extends Component {
        
    state = {
        imageUrls: []
    }

    componentDidMount = () => {
        let artwork = this.props.artwork

        fetch(`http://ec2-3-90-221-208.compute-1.amazonaws.com:5000/${artwork.id}`)
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

                    <SmallImage
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
            detail = (
                <div className="art-column" onClick={this.props.onArtDetailClick}>

                    <SmallImage
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
            detail = (
                <div className="art-column" onClick={this.props.onArtDetailClick}>

                    <SmallImage
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
