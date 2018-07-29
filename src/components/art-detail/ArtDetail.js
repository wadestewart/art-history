import React from 'react'

function ArtDetail(props) {
    // console.log(props.artwork.label_text)
    let bigPics = props.images.b
    let bigPicData = []
    
    for (let key in bigPics) {
        // console.log(key, bigPics[key])
        bigPicData.push(bigPics[key])
    }
    let largeImgUrl = bigPicData[0]
    
    // if else statement to handle different props (does props.artwork === )
    
    // let detail
    // 
    // 
    
    // if (props.artwork.label_text !== null) {
    //      console.log('We have label_text!')
    // } else {
    //     console.log("We ain't got no label_text here.")
    // }

    return (
        <div className="art-details">
            <div className="art-detail">
                <figure className="large-image">
                    <img src={largeImgUrl} alt="" />
                    <h1 className="piece-title">{props.artwork.title}</h1>
                </figure>
                <div className="detailed-info">
                    <h2 className="art-description">{props.artwork.description}</h2>
                    <h5 className="art-credit">{props.artwork.creditline}</h5>
                </div>
            </div>
        </div>
    )
}

export default ArtDetail
