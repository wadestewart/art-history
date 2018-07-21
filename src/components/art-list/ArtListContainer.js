import React, { Component } from 'react'
import { API } from '../../config'
import ArtList from './ArtList'

class ArtListContainer extends Component {

    state = {
        artworks:        [],
        timer:          10
    }

    componentDidMount = () => {

        fetch(`${API.apiUrl}?query=VanGogh&reusability=open&media=true&wskey=${API.apiKey}`)
            .then(res => res.json())
            .then(data => this.setState({ artworks: data }))
            .catch(err => console.log(err))
    }

    render() {
        let artworks = this.state.artworks.items

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
