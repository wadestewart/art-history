import React from 'react'

function ArtDetail(props) {
    console.log(props.images)
    let bigPics = props.images.z
    let bigPicData = []
    
    for (let key in bigPics) {
        bigPicData.push(bigPics[key])
    }
    
    let largeImgUrl = bigPicData[0]
    let detail

    if (props.artwork.id && props.artwork.label_text !== null) {
        // console.log('Both statements true!')
        detail = (
            <div className="art-detail">
                <div className="detailed-info">
                    <h4 className="label-text">{props.artwork.label_text}</h4>
                </div>
                <figure className="large-image">
                    <img src={largeImgUrl} alt="" />
                    <h2 className="piece-title">{props.artwork.title}</h2>
                    <h4 className="art-credit">{props.artwork.creditline}</h4>
                </figure>
                    <h2 className="art-description">{props.artwork.description}</h2>
            </div>
        )
    } else {
        // console.log('Which statement is false? Probably the label_text.')
        detail = (
            <div className="art-detail">
                <div className="detailed-info">
                    <h4 className="art-description">{props.artwork.description}</h4>
                </div>
                <figure className="large-image">
                    <img src={largeImgUrl} alt="" />
                    <h2 className="piece-title">{props.artwork.title}</h2>
                    <h4 className="art-credit">{props.artwork.creditline}</h4>
                </figure>
            </div>
        )
    }

    return (
        <div className="art-details">
            {/* <Flashcard
                flashcard={props.flashcard}
            /> */}
            {detail}
        </div>
    )

}

export default ArtDetail
