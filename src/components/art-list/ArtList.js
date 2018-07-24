import React, { Component } from 'react'
import ArtColumn from '../art-column/ArtColumn'

class ArtList extends Component {
    
    render() {
        let art = this.props.artworks
        let pics = this.props.images
        // console.log(pics)
        // console.log(art)

        const images = pics.map(function(image) {
            // console.log(image)
            return image
        })

        const artworks = art.map((artwork, key) => {
            // console.log(artwork)
            // images.map((image, key) => {
            //     console.log(image.z.url)
            // })
            return artwork
        })

        return (
            <div className="art-list">
                <ArtColumn
                    artworks={artworks}
                    images={images}
                />
            </div>
        )
    }
}

export default ArtList
