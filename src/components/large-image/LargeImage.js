import React from 'react'

function LargeImage(props) {
    return (
        <figure className="large-image">
        <img src={props.imageUrl} alt="Piece of artwork" />
    </figure>
    )
}

export default LargeImage
