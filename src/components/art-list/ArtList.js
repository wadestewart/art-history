import React, { Component } from 'react'
import ArtCard from '../art-card/ArtCard'
import './ArtList.css'

class ArtList extends Component {
    constructor(props) {
        console.log(props)
        super(props)
        this.handleLikesClick = this.handleLikesClick.bind(this)
        this.state = {
            show: 'all'
        }
    }

    handleLikesClick = (show) => {
        console.log('Showing: ' + show)
        this.setState({ show: show })
    }
    
    render() {
        const artworks = (this.state.show === 'likes') ? this.props.likes : this.props.artworks

        const allArtworks = artworks.map((artwork) => {
            return (
                <ArtCard
                    artwork={artwork}
                    key={artwork.id}
                    title={artwork.title}
                    medium={artwork.medium}
                    onShowLikes={() => this.props.onShowLikes(artwork)}
                    isLiked={this.props.likes.includes(artwork)}
                    onArtDetailClick={() => this.props.onArtDetailClick(artwork)}
                />
            )
        })

        return (
            <div className="art-list">

                <div className="art-list-show-states">

                    <div  className={`art-list-show-state ${this.state.show === 'all' ? 'is active' : ''}`} onClick={() => this.handleLikesClick('all')}>
                        ARTWORKS: <span>{this.props.artworks.length}</span>
                    </div>

                    <div  className={`art-list-show-state ${this.state.show === 'likes' ? 'is active' : ''}`} onClick={() => this.handleLikesClick('likes')}>
                        LIKES: <span>{this.props.likes.length}</span>
                    </div>

                </div>

                {allArtworks}

            </div>
        )
    }
}

export default ArtList
