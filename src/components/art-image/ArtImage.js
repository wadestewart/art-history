import React from 'react'

function ArtImage(props) {
    // console.log(props.imageUrl)

    return (
        <figure>
            <img src={props.imageUrl} alt="" />                
        </figure>
    )
}

export default ArtImage
