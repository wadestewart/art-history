import React, { Component } from 'react'
import Header from '../header/Header'
import CardContainer from '../card/CardContainer'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CardContainer />
      </div>
    )
  }
}

export default App
