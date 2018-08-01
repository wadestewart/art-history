import React, { Component } from 'react'
import { API } from '../../config'

class Flashcard extends Component {
    constructor(props) {
        super(props)

        this.decrementTimer = this.decrementTimer.bind(this)
        this.fetchData = this.fetchData.bind(this)

        this.state = {
            currentTimeout: null,
            timer: 1,
            imageUrl: '',
            artwork: []
        }
    }

    decrementTimer = () => {
        if (this.state.timer === 0) {
            this.props.onTimerEnd()
        } else {
            clearTimeout(this.state.currentTimeout)
            this.setState(prevState => ({
                timer: prevState.timer -1,
                currentTimeout: window.setTimeout(this.decrementTimer, 1000)
            }))
        }
    }

    fetchData = () => {
        const artwork = this.props.flashcard
        
        this.setState({
            currentTimeout: window.setTimeout(this.decrementTimer, 1000)
        })
        
        fetch(`${API.apiUrl}?method=cooperhewitt.objects.getInfo&access_token=${API.apiKey}&id=${artwork.id}`)
        .then(res => res.json())
        .then(data => {
            let newImage = data.object.images[0].b.url
            this.setState({ artwork: data.object })
            this.setState({ imageUrl: newImage })
        })
        .catch(err => console.log(err))
    }

    
    componentDidMount = () => {
        this.setState({
            currentTimeout: window.setTimeout(this.decrementTimer, 1000)
        })
        this.fetchData()
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.flashcard.id !== this.props.flashcard.id) {
            clearTimeout(this.state.currentTimeout)
            this.setState({
                timer: 1,
                currentTimeout: window.setTimeout(this.decrementTimer, 1000)
            })
            this.fetchData()
        }
    }


    render() {
        let imgUrl = this.state.imageUrl
        let artwork = this.state.artwork
        let detail

        if (artwork.id && artwork.label_text !== null) {
            // console.log('Both statements true!')
            detail = (
                <div className="art-detail">
                    <figure className="large-image">
                        <img src={imgUrl} alt="" />
                        <h1 className="piece-title">{artwork.title}</h1>
                    </figure>
                    <div className="detailed-info">
                        <h2 className="art-description">{artwork.description}</h2>
                        <p className="label-text">{artwork.label_text}</p>
                        <h4 className="art-credit">{artwork.creditline}</h4>
                    </div>
                </div>
            )
        } else {
            // console.log('Which statement is false? Probably the label_text.')
            detail = (
                <div className="art-detail">
                    <figure className="large-image">
                        <img src={imgUrl} alt="" />
                        <h1 className="piece-title">{artwork.title}</h1>
                    </figure>
                    <div className="detailed-info">
                        <h2 className="art-description">{artwork.description}</h2>
                        <h4 className="art-credit">{artwork.creditline}</h4>
                    </div>
                </div>
            )
        }
    
        return (
            <div className="art-details">
                {detail}
            </div>
        )
    }
}

export default Flashcard
