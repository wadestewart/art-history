import React, { Component } from 'react'
import { API } from '../../config'

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
      timer: 10,
      show: false
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

    fetch(`${API.apiUrl}?method=cooperhewitt.objects.getOnDisplay&access_token=${API.apiKey}&per_page=6`)
      .then(res => res.json())
      .then(data => {
        this.setState({ artworks: data.objects })
      })
      .catch(err => console.log(err))
  }

  // componentDidUpdate = () => {
  //   if (this.state.current !== prevState.current) {
  //     this.setState({ current: this.state.current})
  //   }
  // }
      
  render() {
    console.log(this.state.show)
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
            onShowLikes={this.handleShowLikes}
            onArtDetailClick={this.handleArtDetailClick}
          />
          {artCarousel}
          {/* {flashcardComponent} */}
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

