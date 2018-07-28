import React, { Component } from 'react'

class Like extends Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)

    }

    handleClick = (e) => {
        e.stopPropagation()
        console.log('User clicked liked!')
        this.props.onShowLikes()
    }

    render() {

        // const isLiked = (this.props.isLiked) ? ''

        return (
            <div>

            </div>
        )
    }
}

export default Like
