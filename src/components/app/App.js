import React, { Component } from 'react'
import Header from '../header/Header'
import { API } from '../../config'
import ArtList from '../art-list/ArtList'
import ArtDetail from '../art-detail/ArtDetail'

class App extends Component {
  
  // I can create an empty array for images and chain promises in the fetch response to fetch image data - use concat (not push) in React.
  state = {
    artworks: [],
    images: [],
    current:  {}
  }

  componentDidMount = () => {
     
    fetch(`${API.apiUrl}?method=cooperhewitt.objects.getOnDisplay&access_token=${API.apiKey}&per_page=5`)
      .then(res => {
        res.json()
          .then(data => {
            // console.log(data)
            this.setState({ artworks: data.objects })
            // console.log(this.state.artworks)
            this.state.artworks.map((artwork) => {
              // console.log(artwork.id)
              return fetch(`${API.apiUrl}?method=cooperhewitt.objects.getImages&access_token=${API.apiKey}&id=${artwork.id}`)
                .then(res => res.json())
                .then(data => {
                  // console.log(data.images[0])
                  let newImage = data.images[0]
                  this.setState({ images: this.state.images.concat(newImage)})
                })
            })
          })
      })
      .catch(err => console.log(err))
  }
      
  render() {
    let artworks = this.state.artworks
    let images = this.state.images
    // console.log(artworks)
    // console.log(this.state.images)

    return (
      <div>
        <Header />
        <div className="art-library">
          <ArtList
            artworks={artworks}
            images={images}
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
