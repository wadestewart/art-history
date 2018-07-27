import React, { Component } from 'react'
import ArtColumn from '../art-column/ArtColumn'

class ArtList extends Component {

    state = {
        filter: 'all'
    }
    
    render() {
        let artworks = this.props.artworks

        const allArtworks = artworks.map((artwork) => {
            return (
                <ArtColumn
                    artwork={artwork}
                    key={artwork.id}
                    title={artwork.title}
                    medium={artwork.medium}
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
