import React, { Component } from 'react'
import { API } from '../../config'

class Flashcard extends Component {
    constructor(props) {
        // console.log(props)
        super(props)

        // this.decrementTimer = this.decrementTimer.bind(this)

        this.state = {
            currentTimeout: null,
            timer: 10,
            imageUrl: ''
        }
    }

    decrementTimer = () => {

        if (this.state.timer === 0) {
            this.props.onTimerEnd()
        } else {
            clearTimeout(this.state.currentTimeout)
            this.setState(prevState => {
                timer: prevState.timer -1
                currentTimeout: window.setTimeout(this.decrementTimer, 1000)
            })
        }

    }

    componentDidMount = () => {
        // console.log(this.props)
        
        const artwork = this.props.flashcard.id
        
        this.setState({
            currentTimeout: window.setTimeout(this.decrementTimer, 1000)
        })
        
        fetch(`${API.apiUrl}?method=cooperhewitt.objects.getInfo&access_token=${API.apiKey}&id=${artwork}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.object.images[0].z.url)
                // let newImage = data.object.images[0].z.url
                // this.setState({ imageUrl: this.state.imageUrl.concat(newImage) })
            })
            .catch(err => console.log(err))

    }

    componentWillReceiveProps = () => {
        // console.log(this.props)

        clearTimeout(this.state.currentTimeout)
        this.setState({
            timer: 10,
            currentTimeout: window.setTimeout(this.decrementTimer, 1000)
        })

    }

    render() {
        // console.log(this.props)
        // console.log(this.state.timer)

        // let imgUrl = this.state.imageUrl
        // let detail

        // if (this.props.artwork.id && this.props.artwork.label_text !== null) {
        //     // console.log('Both statements true!')
        //     detail = (
        //         <div className="art-detail">
        //             <figure className="large-image">
        //                 <img src={imgUrl} alt="" />
        //                 <h1 className="piece-title">{this.props.artwork.title}</h1>
        //             </figure>
        //             <div className="detailed-info">
        //                 <h2 className="art-description">{this.props.artwork.description}</h2>
        //                 <p className="label-text">{this.props.artwork.label_text}</p>
        //                 <h4 className="art-credit">{this.props.artwork.creditline}</h4>
        //             </div>
        //         </div>
        //     )
        // } else {
        //     // console.log('Which statement is false? Probably the label_text.')
        //     detail = (
        //         <div className="art-detail">
        //             <figure className="large-image">
        //                 <img src={imgUrl} alt="" />
        //                 <h1 className="piece-title">{this.props.artwork.title}</h1>
        //             </figure>
        //             <div className="detailed-info">
        //                 <h2 className="art-description">{this.props.artwork.description}</h2>
        //                 <h4 className="art-credit">{this.props.artwork.creditline}</h4>
        //             </div>
        //         </div>
        //     )
        // }
    
        return (
            <div className="art-details">
                {/* {detail} */}
            </div>
        )

    }
}

export default Flashcard
