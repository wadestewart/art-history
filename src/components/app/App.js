import React, { Component } from 'react'
import { API } from '../../config'


import Header from '../header/Header'
import ArtListContainer from '../art-list/ArtListContainer'
// import ArtDetailContainer from '../art-detail/ArtDetailContainer'
import ArtDetail from '../art-detail/ArtDetail'
import Flashcard from '../flashcard/Flashcard'

class App extends Component {

  constructor() {
    super()

    this.state = {
      artworks: [],
      images: [],
      current:  {},
      flashcards: [],
      currentIndex: 0,
      timer: 10
    }

  }

  next = () => {

    let nextIndex = 
      this.state.currentIndex +1 !== this.state.flashcards.length
      ? this.state.currentIndex +1
      : this.state.currentIndex

    this.setState({
      currentIndex: nextIndex,
    })
    
  }

  handleFlashcardImage = (artwork) => {

  }

  componentDidMount = () => {

    fetch(`${API.apiUrl}?method=cooperhewitt.objects.getOnDisplay&access_token=${API.apiKey}&per_page=6`)
      .then(res => res.json())
      .then(data => {
        this.setState({ artworks: data.objects })
        // this.setState({ flashcards: data.objects })
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
      // : <ArtDetail 
      //     artwork={this.state.current}
      //     images={this.state.images}
      //     onTimerEnd={this.next}
      //   />
        
    // console.log(flashcard)
    // var flashcardComponent

    // if (flashcard !== undefined) {
    //   var flashcardComponent =
    //     <Flashcard
    //       flashcard={flashcard}
    //       onTimerEnd={this.next}
    //     />
    // } else {
    //   var flashcardComponent = null
    // }

    return (
      <div>
        <Header />
        <div className="art-library">
          <ArtListContainer

          />
          <ArtDetail 
            artwork={this.state.current}
            images={this.state.images}
            onTimerEnd={this.next}
          />
          {/* {artCarousel} */}
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

