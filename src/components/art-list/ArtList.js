import React, { Component } from 'react'
import ArtColumn from '../art-column/ArtColumn'

class ArtList extends Component {
    
    render() {
        let art = this.props.artworks
        // console.log(art)

        const artworks = art.map((artwork, key) => {
            // console.log(artwork)

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
            <div className="film-list">
                {artworks}
            </div>
        )
    }
}

export default ArtList
