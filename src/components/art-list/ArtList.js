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
