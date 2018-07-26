import React from 'react'

function ArtImage(props) {
    // console.log(props.images)
    let imageUrl = props.images.map((image, key) => {
        // console.log(image.z.url)
        return (
                <img src={image.z.url} alt="" />
        )
    })
    // console.log(imageUrl)

    return (
        <figure>
            {imageUrl}
        </figure>
    )
}

export default ArtImage
