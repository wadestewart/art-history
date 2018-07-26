import React, { Component } from 'react'
import Header from '../header/Header'
import { API } from '../../config'
import ArtList from '../art-list/ArtList'
import ArtDetail from '../art-detail/ArtDetail'

class App extends Component {
  constructor() {
    super()
    this.handleDetailsClick = this.handleDetailsClick.bind(this)
    this.state = {
      artworks: [],
      images: [],
      current:  {}
    }
  }

  handleDetailsClick = (artwork) => {
    // let artworks = this.state.artworks
    console.log('clicked')
  }

  componentDidMount = () => {

    fetch(`${API.apiUrl}?method=cooperhewitt.objects.getOnDisplay&access_token=${API.apiKey}&per_page=5`)
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => this.setState({ artworks: data.objects }))
    .catch(err => console.log(err))
     
    // fetch(`${API.apiUrl}?method=cooperhewitt.objects.getOnDisplay&access_token=${API.apiKey}&per_page=5`)
    //   .then(res => {
    //     res.json()
    //       .then(data => {
    //         // console.log(data)
    //         this.setState({ artworks: data.objects })
    //         // console.log(this.state.artworks)
    //         this.state.artworks.map((artwork) => {
    //           // console.log(artwork.id)
    //           return fetch(`${API.apiUrl}?method=cooperhewitt.objects.getImages&access_token=${API.apiKey}&id=${artwork.id}`)
    //             .then(res => res.json())
    //             .then(data => {
    //               // console.log(data)
    //               this.setState({ images: this.state.images.concat(data)})
    //             })
    //         })
    //       })
    //   })
  }
      
  render() {

    // let artworks = this.state.artworks
    // let images = this.state.images
    // console.log(artworks)
    // console.log(images)

    return (
      <div>
        <Header />
        <div className="art-library">
          <ArtList
            artworks={this.state.artworks}
            onDetailsClick={this.handleDetailsClick}
          />
          <ArtDetail

          />
        </div>
      </div>
    )

  }

}

export default App

// This is the url to make a query to CH's exhibition api and return images.
  // fetch(`${API.apiUrl}?method=cooperhewitt.exhibitions.getObjects&access_token=${API.apiKey}&query=19th Century&has_images=true`)
