import React, { Component } from 'react'
import Header from '../header/Header'
import { API } from '../../config'
import ArtList from '../art-list/ArtList'

class App extends Component {

  state = {
    artworks: []
  }

  handleTypeChoice = (artwork) => {
    fetch(`${API.apiUrl}?method=cooperhewitt.types.getInfo&access_token=${API.apiKey}&id=${artwork.id}`)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  componentDidMount = () => {

    this.getObjectsWithID = (objectData) => {
        // console.log(objectData.types)
        this.setState({ artworks: objectData.types})
    }

    // fetch(`${API.apiUrl}?method=cooperhewitt.exhibitions.getObjects&access_token=${API.apiKey}&query=19th Century&has_images=true`)
    fetch(`${API.apiUrl}?method=cooperhewitt.types.getList&access_token=${API.apiKey}`)
        .then(res => res.json())
        // .then(data => this.setState({ artworks: data.period }))
        .then(data => this.getObjectsWithID(data))
        .catch(err => console.log(err))
  }

  render() {
    let artworks = this.state.artworks

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
