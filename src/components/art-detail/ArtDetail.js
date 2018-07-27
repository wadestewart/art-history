import React from 'react'

function ArtDetail(props) {
    // console.log(props.images)
    let bigPics = props.images.b
    let bigPicData = []
    
    for (let key in bigPics) {
        // console.log(key, bigPics[key])
        bigPicData.push(bigPics[key])
    }
    let largeImgUrl = bigPicData[0]

    return (
        <div className="art-details">
            <figure className="large-image">
                <img src={largeImgUrl} alt="" />
                <h1 className="piece-title">{props.artwork.title}</h1>
            </figure>
            <div className="detailed-info">
                <h2>{props.artwork.description}</h2>
                <h5>{props.artwork.creditline}</h5>
            </div>
        </div>
    )
}

export default ArtDetail
