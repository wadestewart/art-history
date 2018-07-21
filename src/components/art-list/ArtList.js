import React, { Component } from 'react'
import ArtColumn from '../art-column/ArtColumn'

class ArtList extends Component {
    
    render() {
        let art = this.props.artworks

        const artworks = art.map((artwork) => {
            console.log(artwork)

            return (
                <ArtColumn
                    artwork={artwork}
                    key={artwork.id}
                    title={artwork.title}
                    image={artwork.edmPreview}
                />
            )
        })

        return (
            <div>
                {artworks}
            </div>
        )
    }
}

export default ArtList
