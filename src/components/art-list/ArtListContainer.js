import React, { Component } from 'react'
import { API } from '../../config'
import ArtList from './ArtList'

class ArtListContainer extends Component {

    state = {
        artworks:        [],
        timer:          10
    }

    componentDidMount = () => {

        this.getObjectsWithID = (objectData) => {
            // console.log(objectData.types)
            this.setState({ artworks: objectData.types})
        }

        // fetch(`${API.apiUrl}?method=cooperhewitt.exhibitions.getObjects&access_token=${API.apiKey}&query=19th Century&has_images=true`)
        fetch(`${API.apiUrl}?method=cooperhewitt.types.getList&access_token=${API.apiKey}`)
            .then(res => res.json())
            // .then(data => this.setState({ artworks: data.period }))
            .then(data => this.getObjectsWithID(data))
            .catch(err => console.log(err))
    }



    // {
    //     console.log(res)
    //     this.getObjectWithID(res.data)
    // })

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
