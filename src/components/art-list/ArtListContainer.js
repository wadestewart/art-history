import React, { Component } from 'react'
import { API } from '../../config'
// import ArtList from './ArtList'

class ArtListContainer extends Component {

    componentDidMount = (props) => {
        let typeObject = this.props.artworks
        console.log(typeObject)

        // this.getObjectsWithID = (objectData) => {
        //     // console.log(objectData.types)
        //     this.setState({ artworks: objectData.types})
        // }

        fetch(`${API.apiUrl}?method=cooperhewitt.types.getList&access_token=${API.apiKey}&`)
            .then(res => res.json())
            .then(data => this.getObjectsWithID(data))
            .catch(err => console.log(err))
    }

    render() {
        // let artworks = this.state.artworks
        // console.log(artworks)

        return (
            <div className="container">
                {/* {artworks && (
                    <ArtList artworks={artworks} />
                )} */}
            </div>
        )
    }
}

export default ArtListContainer
