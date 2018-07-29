import React from 'react'
// import Flashcard from '../flashcard/Flashcard'

function ArtDetail(props) {
    let bigPics = props.images.b
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
                <figure className="large-image">
                    <img src={largeImgUrl} alt="" />
                    <h1 className="piece-title">{props.artwork.title}</h1>
                </figure>
                <div className="detailed-info">
                    <h2 className="art-description">{props.artwork.description}</h2>
                    <p className="label-text">{props.artwork.label_text}</p>
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
                    <h1 className="piece-title">{props.artwork.title}</h1>
                </figure>
                <div className="detailed-info">
                    <h2 className="art-description">{props.artwork.description}</h2>
                    <h4 className="art-credit">{props.artwork.creditline}</h4>
                </div>
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
