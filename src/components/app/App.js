import React, { Component } from 'react'
import Header from '../header/Header'
import ArtListContainer from '../art-list/ArtListContainer'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ArtListContainer />
      </div>
    )
  }
}

export default App
