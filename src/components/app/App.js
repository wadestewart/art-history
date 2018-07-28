import React, { Component } from 'react'
import Header from '../header/Header'
import { API } from '../../config'
import ArtList from '../art-list/ArtList'
import ArtDetail from '../art-detail/ArtDetail'

class App extends Component {

  constructor() {
    super()

    this.handleShowLikes = this.handleShowLikes.bind(this)
    this.handleDetailsClick = this.handleDetailsClick.bind(this)

    this.state = {
      artworks: [],
      likes: [],
      images: [],
      current:  {}
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

  handleDetailsClick = (artwork) => {

    console.log('Fetching data for ' + artwork.title)
    fetch(`${API.apiUrl}?method=cooperhewitt.objects.getInfo&access_token=${API.apiKey}&id=${artwork.id}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data.object.images[0])
        this.setState({ current: data.object })
        this.setState({ images: this.state.current.images[0] })
        // this.state.images.map((image) => {
        //   console.log(image)
        //   // return this.setState({ images: image })
        // })
      })
      .catch(err => console.log(err))

  }

  componentDidMount = () => {

    fetch(`${API.apiUrl}?method=cooperhewitt.objects.getOnDisplay&access_token=${API.apiKey}&per_page=3`)
      .then(res => res.json())
      .then(data => this.setState({ artworks: data.objects }))
      .catch(err => console.log(err))
     
  }
      
  render() {
    // console.log(this.state.artworks)

    return (
      <div>
        <Header />
        <div className="art-library">
          <ArtList
            artworks={this.state.artworks}
            onShowLikes={this.handleShowLikes}
            onDetailsClick={this.handleDetailsClick}
          />
          <ArtDetail
            artwork={this.state.current}
            images={this.state.images}
          />
        </div>
      </div>
    )

  }

}

export default App

