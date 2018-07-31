import React, { Component } from 'react'
import { API } from '../../config'

class Flashcard extends Component {
    constructor(props) {
        super(props)

        this.decrementTimer = this.decrementTimer.bind(this)

        this.state = {
            currentTimeout: null,
            timer: 10,
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

    componentDidMount = () => {
        
        const artwork = this.props.flashcard
        console.log(artwork)
        
        this.setState({
            currentTimeout: window.setTimeout(this.decrementTimer, 1000),
            // flashcard: this.props.flashcard
        })
        
        fetch(`${API.apiUrl}?method=cooperhewitt.objects.getInfo&access_token=${API.apiKey}&id=${artwork.id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data.object.images[0].z.url)
                let newImage = data.object.images[0].z.url
                this.setState({ artwork: data.object })
                this.setState({ imageUrl: this.state.imageUrl.concat(newImage) })
            })
            .catch(err => console.log(err))

    }

    componentWillReceiveProps = () => {

        const artwork = this.props.flashcard
        console.log(artwork)

        clearTimeout(this.state.currentTimeout)
        this.setState({
            timer: 10,
            currentTimeout: window.setTimeout(this.decrementTimer, 1000),
        })

    }

    render() {
        console.log(this.state.artwork)
        console.log(this.state.timer)

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
