import React, { Component } from 'react'
import { API } from '../../config'
import ArtList from './ArtList'

class ArtListContainer extends Component {

    constructor() {
        super()

        this.handleShowLikes = this.handleShowLikes.bind(this)
        this.handleDetailsClick = this.handleArtDetailClick.bind(this)

        this.state = {
            artworks: [],
            likes: []
        }
    }

    handleShowLikes = (artwork) => {

        const likes = this.state.likes.slice()
        const artworkIndex = likes.indexOf(artwork)
    
        if (artworkIndex > -1) {
          console.log('I do not like ' + artwork.title + ' anymore')
          likes.splice(artworkIndex, 1)
        } else {
          console.log('I like ' + artwork.title + '!')
          likes.push(artwork)
        }
        this.setState({ likes })
    
      }

    handleArtDetailClick = (artwork) => {

        console.log('Fetching data for ' + artwork.title)
        fetch(`${API.apiUrl}?method=cooperhewitt.objects.getInfo&access_token=${API.apiKey}&id=${artwork.id}`)
          .then(res => res.json())
          .then(data => {
            this.setState({ current: data.object })
            this.setState({ images: this.state.current.images[0] })
          })
          .catch(err => console.log(err))
    
    }

    componentDidMount = () => {

        fetch(`${API.apiUrl}?method=cooperhewitt.objects.getOnDisplay&access_token=${API.apiKey}&per_page=6`)
        .then(res => res.json())
        .then(data => {
            this.setState({ artworks: data.objects })
            // this.setState({ flashcards: data.objects })
        })
        .catch(err => console.log(err))
        
    }

    render() {
        // let artworks = this.state.artworks
        // console.log(artworks)

        return (
            <div className="container">
                <ArtList
                    artworks={this.state.artworks}
                    likes={this.state.likes}
                    onShowLikes={this.handleShowLikes}
                    onArtDetailClick={this.handleArtDetailClick}
                />
            </div>
        )
    }
}

export default ArtListContainer
