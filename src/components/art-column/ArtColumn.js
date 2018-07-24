import React from 'react'
import ArtImage from '../art-image/ArtImage'

function ArtColumn(props) {
    let images = props.images
    let artworks = props.artworks
    console.log(artworks)

    return (
        <div className="art-column">
            <ArtImage
                // imageUrl={images}
            />

            <div className="art-summary">
                {/* <h2>{this.props.title}</h2>
                <p>{this.props.medium}</p> */}
            </div>
        </div>
    )
}

export default ArtColumn
