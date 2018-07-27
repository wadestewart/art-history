import React, { Component } from 'react'

class ArtDetail extends Component {
    render() {
        let bigPics = this.props.images
        // console.log(bigPics)
    
        const largeImages = Object.keys(bigPics).forEach((key) => {
            // console.log(bigPics[key].b.url)
            return largeImageUrl = bigPics[0].b.url
        })

        return (
            <div className="art-details">
                
                {largeImages}
            </div>
        )
    }
}

export default ArtDetail
