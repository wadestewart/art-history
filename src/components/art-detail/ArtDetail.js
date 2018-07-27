import React, { Component } from 'react'

class ArtDetail extends Component {
    render() {
        console.log(this.props.images)
        let bigPics = this.props.images.b
        let bigPicData = []
        
        for (let key in bigPics) {
            // console.log(key, bigPics[key])
            bigPicData.push(bigPics[key])
        }
        let largeImgUrl = bigPicData[0]


        return (
            <div className="art-details">
                <figure>
                    <img src={largeImgUrl} alt="" />
                </figure>
            </div>
        )
    }
}

export default ArtDetail
