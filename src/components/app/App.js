import React, { Component } from 'react'
import Header from '../header/Header'
import { API } from '../../config'
import ArtList from '../art-list/ArtList'

class App extends Component {
  
  state = {
    artworks: [],
    current:  {}
  }

  // handleTypeChoice = (artwork) => {
  //   fetch(`${API.apiUrl}?method=cooperhewitt.types.getInfo&access_token=${API.apiKey}&id=${artwork.id}`)
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  //     // .then(this.setState({ current: data }))
  //     .catch(err => console.log(err))
  // }

  // handleGetImages() {
  //   fetch(`${API.apiUrl}?method=cooperhewitt.objects.getImages&access_token=${API.apiKey}&id=${artwork.id}`)
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  //     .catch(err => console.log(err))
  // }

  componentDidMount = () => {

    fetch(`${API.apiUrl}?method=cooperhewitt.objects.getOnDisplay&access_token=${API.apiKey}`)
        .then(res => res.json())
        .then(data => this.setState({ artworks: data.objects }))
        // .then(data => console.log(data))
        .catch(err => console.log(err))
  }

  render() {
    let artworks = this.state.artworks
    console.log(artworks)

    return (
      <div className="art-library">
        <Header />
        <ArtList
          artworks={artworks}
          onGetImages={this.handleGetImages}
        />
      </div>
    )
  }
}

export default App

// This is the url to make a query to CH's exhibition api and return images.
  // fetch(`${API.apiUrl}?method=cooperhewitt.exhibitions.getObjects&access_token=${API.apiKey}&query=19th Century&has_images=true`)
