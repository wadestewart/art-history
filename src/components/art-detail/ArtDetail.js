import React from 'react'

function ArtDetail(props) {
    let bigPics = props.images.z
    let bigPicData = []
    
    for (let key in bigPics) {
        bigPicData.push(bigPics[key])
    }
    
    let largeImgUrl = bigPicData[0]
    let detail

    // if (props.artwork.title || props.artwork.description )

    if (props.artwork.id && props.artwork.label_text !== null) {
        // console.log('Both statements true!')
        detail = (
            <div className="art-detail">
                <figure className="large-image">
                    <img src={largeImgUrl} alt="" />
                </figure>
                <div className="detailed-info">
                    <h4 className="piece-title">{props.artwork.title_raw}</h4>
                    <h4 className="art-description">{props.artwork.description}</h4>
                    <h4 className="label-text">{props.artwork.label_text}</h4>
                    <h4 className="art-credit">{props.artwork.creditline}</h4>
                </div>
            </div>
        )
    } else {
        // console.log('Which statement is false? Probably the label_text.')
        detail = (
            <div className="art-detail">
                <figure className="large-image">
                    <img src={largeImgUrl} alt="" />
                </figure>
                <div className="detailed-info">
                    <h4 className="piece-title">{props.artwork.title_raw}</h4>
                    <h4 className="art-credit">{props.artwork.creditline}</h4>
                    <h4 className="art-description">{props.artwork.description}</h4>
                </div>
            </div>
        )
    }

    return (
        <div className="art-details">
            {detail}
        </div>
    )

}

export default ArtDetail
