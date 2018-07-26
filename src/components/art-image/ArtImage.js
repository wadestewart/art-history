import React from 'react'

function ArtImage(props) {
    console.log(props.imageUrls)

    return (
        <figure>
            <img src={props.imageUrls[0]} alt="" />                
        </figure>
    )
}

export default ArtImage
