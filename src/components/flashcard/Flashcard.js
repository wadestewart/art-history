import React, { Component } from 'react'

class Flashcard extends Component {
    constructor(props) {
        super(props)

        

        this.state = {
            currentTimeout: null,
            timer: 10,

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

        this.setState({
            currentTimeout: window.setTimeout(this.decrementTimer, 1000)
        })

    }

    componentWillReceiveProps = () => {

        clearTimeout(this.state.currentTimeout)
        this.setState({
            timer: 10,
            currentTimeout: window.setTimeout(this.decrementTimer, 1000)
        })

    }

    render() {
        console.log(this.props.card)
        console.log(this.state.timer)

        return (
            <div>

            </div>
        )

    }
}

export default Flashcard
