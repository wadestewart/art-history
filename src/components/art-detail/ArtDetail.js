import React, { Component } from 'react'

class ArtDetail extends Component {

    render() {
        // console.log(this.props.artwork)
        let bigPics = this.props.images.b
        let bigPicData = []
        
        for (let key in bigPics) {
            // console.log(key, bigPics[key])
            bigPicData.push(bigPics[key])
        }
    
        let largeImgUrl = bigPicData[0]
            
        let detail
    
        if (this.props.artwork.id && this.props.artwork.label_text !== null) {
            console.log('Both statements true!')
            detail = (
                <div className="art-detail">
                    <figure className="large-image">
                        <img src={largeImgUrl} alt="" />
                        <h1 className="piece-title">{this.props.artwork.title}</h1>
                    </figure>
                    <div className="detailed-info">
                        <h2 className="art-description">{this.props.artwork.description}</h2>
                        <p className="label-text">{this.props.artwork.label_text}</p>
                        <h4 className="art-credit">{this.props.artwork.creditline}</h4>
                    </div>
                </div>
            )
        } else {
            console.log('Which statement is false? Probably the label_text.')
            detail = (
                <div className="art-detail">
                    <figure className="large-image">
                        <img src={largeImgUrl} alt="" />
                        <h1 className="piece-title">{this.props.artwork.title}</h1>
                    </figure>
                    <div className="detailed-info">
                        <h2 className="art-description">{this.props.artwork.description}</h2>
                        <h4 className="art-credit">{this.props.artwork.creditline}</h4>
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
}

export default ArtDetail
