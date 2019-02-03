import React from 'react'

import './ArtDetail.css'
import preloaderImage from './cooperhewitt.jpg'
import LargeImage from '../large-image/LargeImage'

function ArtDetail(props) {
    let detail

    if (props.image.length === 0 ) {
        detail = (
            <figure className="landing-image">
                <img src={preloaderImage} alt="" />
            </figure>
        )
    } else if (props.artwork.title_raw !== null && props.artwork.title_raw !== "" && props.artwork.gallery_text !== null) {
        detail = (
            <div className="art-detail">
                <LargeImage
                    imageUrl={props.image.url}
                />
                <div className="detailed-info">
                    <h3 className="title-h3">Artwork Title:</h3>
                    <h4 className="piece-title">{props.artwork.title_raw}</h4>
                    <h3 className="details-h3">Artwork Details:</h3>
                    <h4 className="label-text">{props.artwork.gallery_text}</h4>
                    <h4 className="art-credit">{props.artwork.creditline}</h4>
                </div>
            </div>
        )
    } else if (props.artwork.title !== null && props.artwork.title !== "" && props.artwork.gallery_text !== null) {
        detail = (
            <div className="art-detail">
                <LargeImage
                    imageUrl={props.image.url}
                />
                <div className="detailed-info">
                    <h3 className="title-h3">Artwork Title:</h3>
                    <h4 className="piece-title">{props.artwork.title}</h4>
                    <h3 className="details-h3">Artwork Details:</h3>
                    <h4 className="label-text">{props.artwork.gallery_text}</h4>
                    <h4 className="art-credit">{props.artwork.creditline}</h4>
                </div>
            </div>
        )
    } else if (props.artwork.title_raw !== null && props.artwork.title_raw !== "" && props.artwork.label_text !== null) {
        detail = (
            <div className="art-detail">
                <LargeImage
                    imageUrl={props.image.url}
                />
                <div className="detailed-info">
                    <h3 className="title-h3">Artwork Title:</h3>
                    <h4 className="piece-title">{props.artwork.title_raw}</h4>
                    <h3 className="details-h3">Artwork Details:</h3>
                    <h4 className="label-text">{props.artwork.label_text}</h4>
                    <h4 className="art-credit">{props.artwork.creditline}</h4>
                </div>
            </div>
        )
    } else if (props.artwork.title !== null && props.artwork.title !== "" && props.artwork.label_text !== null) {
        detail = (
            <div className="art-detail">
                <LargeImage
                    imageUrl={props.image.url}
                />
                <div className="detailed-info">
                    <h3 className="title-h3">Artwork Title:</h3>
                    <h4 className="piece-title">{props.artwork.title}</h4>
                    <h3 className="details-h3">Artwork Details:</h3>
                    <h4 className="label-text">{props.artwork.label_text}</h4>
                    <h4 className="art-credit">{props.artwork.creditline}</h4>
                </div>
            </div>
        )
    } else {
        detail = (
            <div className="art-detail">
                <LargeImage
                    imageUrl={props.image.url}
                />
                <div className="detailed-info">
                    <h3 className="title-h3">Artwork Title:</h3>
                    <h4 className="piece-title">{props.artwork.title}</h4>
                    <h3 className="details-h3">Artwork Details:</h3>
                    <h4 className="art-description">No Details Available</h4>
                    <h4 className="art-credit">{props.artwork.creditline}</h4>
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
