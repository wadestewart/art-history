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
    this.handleDetailsClick = this.handleArtDetailClick.bind(this)

    this.state = {
      artworks: [],
      likes: [],
      images: [],
      current:  {},
      flashcards: [],
      currentIndex: 0,
      timer: 10
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

  next = () => {

    let nextIndex = 
      this.state.currentIndex +1 !== this.state.flashcards.length
      ? this.state.currentIndex +1
      : this.state.currentIndex

    this.setState({
      currentIndex: nextIndex
    })
    
  }

  componentDidMount = () => {

    fetch(`${API.apiUrl}?method=cooperhewitt.objects.getOnDisplay&access_token=${API.apiKey}&per_page=6`)
      .then(res => res.json())
      .then(data => {
        this.setState({ artworks: data.objects })
        this.setState({ flashcards: data.objects })
      })
      .catch(err => console.log(err))
     
  }
      
  render() {
    let flashcard = this.state.flashcards[this.state.currentIndex]
    // let artCarousel =
    //   (this.state.current !== {})
    //   ? <Flashcard
    //       flashcard={flashcard}
    //     />
    //   : <ArtDetail 
    //       artwork={this.state.current}
    //       images={this.state.images}
    //       onTimerEnd={this.next}
    //     />
        
    // console.log(flashcard)
    var flashcardComponent

    if (flashcard !== undefined) {
      var flashcardComponent =
        <Flashcard
          flashcard={flashcard}
        />
    } else {
      var flashcardComponent = null
    }

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
          {/* {artCarousel} */}
          {flashcardComponent}
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

