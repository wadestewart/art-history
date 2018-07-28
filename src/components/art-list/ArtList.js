import React, { Component } from 'react'
import ArtColumn from '../art-column/ArtColumn'

class ArtList extends Component {
    
    constructor() {
        super()

        this.handleLikeClick = this.handleLikeClick.bind(this)
    
        this.state = {
            show: 'all'
        }

    }


    handleLikeClick = (show) => {
        console.log('Showing: ' + show)
        this.setState({ show: show })
    }
    
    render() {
        let artworks = (this.state.show === 'likes') ? this.props.likes : this.props.artworks

        const allArtworks = artworks.map((artwork) => {
            return (
                <ArtColumn
                    artwork={artwork}
                    key={artwork.id}
                    title={artwork.title}
                    medium={artwork.medium}
                    onShowLikes={() => this.props.onShowLikes(artwork)}
                    onDetailsClick={() => this.props.onDetailsClick(artwork)}
                />
            )
        })

        return (
            <div className="art-list">
                {allArtworks}
            </div>
        )
    }
}

export default ArtList
