import React from 'react'
import ArtImage from '../art-image/ArtImage'

function ArtColumn(props) {

        return (
            <div className="art-column" onLoad={props.onGetImages}>
                <ArtImage
                    artwork={props.artwork}
                />

                <div className="art-summary">
                    <h2>{props.title}</h2>
                    <p>{props.medium}</p>
                </div>
            </div>
        )
}

export default ArtColumn
