import React from 'react'
import ArtImage from '../art-image/ArtImage'

function ArtColumn(props) {
    let images = props.images
    // console.log(images)

    return (
        <div className="art-column">
            <ArtImage
                images={images}
            />

            <div className="art-summary">
                <h2>{props.title}</h2>
                <p>{props.medium}</p>
            </div>
        </div>
    )
}

export default ArtColumn
