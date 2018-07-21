import React, { Component } from 'react'
import { API } from '../../config'
import ArtList from './ArtList'

class ArtListContainer extends Component {

    state = {
        artworks:        [],
        timer:          10
    }

    componentDidMount = () => {

        fetch(`${API.apiUrl}?method=cooperhewitt.exhibitions.getObjects&access_token=${API.apiKey}&query=19th Century&has_images=true&page=50`)
            .then(res => res.json())
            .then(data => this.setState({ artworks: data.objects }))
            // .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    render() {
        let artworks = this.state.artworks
        // console.log(artworks)

        return (
            <div className="container">
                {artworks && (
                    <ArtList artworks={artworks} />
                )}
            </div>
        )
    }
}

export default ArtListContainer
