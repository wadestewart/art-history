import React, { Component } from 'react'

import Header from '../header/Header'
import ArtList from '../art-list/ArtList'
import ArtDetail from '../art-detail/ArtDetail'

class App extends Component {
  constructor() {
    super()

    // Binding `this` for callbacks
    this.handleReload = this.handleReload.bind(this)
    this.handleShowLikes = this.handleShowLikes.bind(this)
    this.handleArtDetailClick = this.handleArtDetailClick.bind(this)

    this.state = {
      artworks: [],
      image: [],
      current:  {},
      likes: [],
      currentIndex: 0,
      timer: 2,
    }
  }

  // Resets the image and likes state and therefore resetting to initial state
  handleReload = () => {
    this.setState({
      image: [],
      likes: []
    })
  }

  handleShowLikes = (artwork) => {
    const likes = this.state.likes.slice()
    const artworkIndex = likes.indexOf(artwork)

    if (artworkIndex > -1) {
      likes.splice(artworkIndex, 1)
    } else {
      likes.push(artwork)
    }
    this.setState({ likes })
  }

  handleArtDetailClick = (artwork) => {
    fetch(`http://54.161.211.213:443/${artwork.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState(prevState => ({ show: !prevState.show }))
        this.setState({ current: data.object })
        this.setState({ image: this.state.current.images[0].z })
      })
      .catch(err => console.log(err))
  }

  next = () => {
    let nextIndex = 
      this.state.currentIndex +1 !== this.state.artworks.length
      ? this.state.currentIndex +1
      : this.state.currentIndex

    this.setState({
      currentIndex: nextIndex,
    })
  }

  componentDidMount = () => {
    fetch('http://54.161.211.213:443/')
      .then(res => res.json())
      .then(data => {
        this.setState({ artworks: data.objects })
      })
      .catch(err => console.log(err))
  }
      
  render() {
    let artList =
      this.state.artworks.length !== 0 ?
        <ArtList
          artworks={this.state.artworks}
          likes={this.state.likes}
          onShowLikes={this.handleShowLikes}
          onArtDetailClick={this.handleArtDetailClick}
        />
      :
        null

    return (
      <div>
        <Header
          onReload={this.handleReload}
        />
        <div className="art-library">
          {artList}
          <ArtDetail
            artwork={this.state.current}
            image={this.state.image}
          />
        </div>
      </div>
    )
  }
}

export default App
