import React, { Component } from 'react'
import ArtColumn from '../art-column/ArtColumn'

class ArtList extends Component {
    
    render() {
        // let art = this.props.artworks
        // let pics = this.props.images
        // console.log(pics)
        // console.log(art)

        // let images = pics.forEach((image) => {
        //     console.log(image)
        //     return image
        // })

        // let artworks = art.forEach((artwork) => {
        //     console.log(artwork)
        //     images.map((image, key) => {
        //         console.log(image.z.url)
        //     })
        //     return (
        //         artwork={artwork}
        //     )
        // })
        // console.log(artworks)
        // console.log(images)

        return (
            <div className="art-list">
                <ArtColumn
                    artworks={this.props.artworks}
                    images={this.props.images}
                />
            </div>
        )
    }
}

export default ArtList
