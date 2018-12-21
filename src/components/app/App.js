import React, { Component } from 'react'

import Header from '../header/Header'
import ArtList from '../art-list/ArtList'
import ArtDetail from '../art-detail/ArtDetail'
import Flashcard from '../flashcard/Flashcard'

class App extends Component {
  constructor() {
    super()

    this.handleShowLikes = this.handleShowLikes.bind(this)
    this.handleArtDetailClick = this.handleArtDetailClick.bind(this)

    this.state = {
      artworks: [],
      images: [],
      current:  {},
      likes: [],
      currentIndex: 0,
      timer: 2,
      show: false
    }
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
    fetch(`http://localhost:3001/${artwork.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState(prevState => ({ show: !prevState.show }))
        this.setState({ current: data.object })
        this.setState({ images: this.state.current.images[0] })
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
    fetch('http://localhost:3001/')
      .then(res => res.json())
      .then(data => {
        this.setState({ artworks: data.objects })
      })
      .catch(err => console.log(err))
  }
      
  render() {
    let flashcard = this.state.artworks[this.state.currentIndex]   

    let artCarousel = 
      (this.state.current !== true && this.state.show !== true)
      ? (flashcard !== undefined)
        ? <Flashcard
            flashcard={flashcard}
            onTimerEnd={this.next}
          />
        : null 
      : <ArtDetail
          artwork={this.state.current}
          images={this.state.images}
        />

    return (
      <div>
        <Header />
        <div className="art-library">
          <ArtList
            artworks={this.state.artworks}
            likes={this.state.likes}
            images={this.state.images}
            onShowLikes={this.handleShowLikes}
            onArtDetailClick={this.handleArtDetailClick}
          />
          {artCarousel}
        </div>
      </div>
    )
  }
}

export default App

// if (this.state.current !== {}) {
//   console.log('Truthy')
// } else {
//   console.log('Falsy')
// }

