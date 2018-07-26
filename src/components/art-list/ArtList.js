import React, { Component } from 'react'
import ArtColumn from '../art-column/ArtColumn'

class ArtList extends Component {
    
    render() {
        let artworks = this.props.artworks
        // console.log(images)

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
