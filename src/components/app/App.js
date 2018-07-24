import React, { Component } from 'react'
import Header from '../header/Header'
import { API } from '../../config'
import ArtList from '../art-list/ArtList'

class App extends Component {
  
  // I can create an array with an empty object { key: '', key: '' } and chain promises in the fetch response to fetch image data - use concat (not push) in React.
  state = {
    artworks: [],
    current:  {}
  }

  componentDidMount = () => {

    fetch(`${API.apiUrl}?method=cooperhewitt.objects.getOnDisplay&access_token=${API.apiKey}`)
        .then(res => res.json())
        .then(data => this.setState({ artworks: data.objects }))
        .catch(err => console.log(err))
  }

  render() {
    let artworks = this.state.artworks
    // console.log(artworks)

    return (
      <div className="art-library">
        <Header />
        <ArtList
          artworks={artworks}
        />
      </div>
    )
  }
}

export default App

// This is the url to make a query to CH's exhibition api and return images.
  // fetch(`${API.apiUrl}?method=cooperhewitt.exhibitions.getObjects&access_token=${API.apiKey}&query=19th Century&has_images=true`)
