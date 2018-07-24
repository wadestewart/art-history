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
     
    const a = fetch(`${API.apiUrl}?method=cooperhewitt.objects.getOnDisplay&access_token=${API.apiKey}&per_page=5`)
        a.then(res => {
          res.json()
            .then(data => {
              console.log(data)
              this.setState({
                    artworks: data.objects
                  })
            })
            // a.then(data => this.setState({ artworks: data.objects }))
        })
 
        a.catch(err => console.log(err))
    
    // console.log(this.state.artworks)

    // const images = artworks.map((artwork, key) => {
    //   return (
    //     artwork
    //   )
    // })

    // fetch(`${API.apiUrl}?method=cooperhewitt.objects.getImages&access_token=${API.apiKey}&id=${this.state.artworks.id}`)
    // const images = art.map((image, key) => {
      //   this.setState({ images: image})
      // })
      // .then(art => console.log(art))
  }
      
  render() {
    let artworks = this.state.artworks
    // console.log(artworks)

    return (
      <div>
        <Header />
        <div className="art-library">
          <ArtList
            artworks={artworks}
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
