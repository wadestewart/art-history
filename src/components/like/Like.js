import React, { Component } from 'react'
import './Like.css'

class Like extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (e) => {
        e.stopPropagation()
        this.props.onShowLikes()
    }

    render() {
        const isLiked = (this.props.isLiked) ? 'favorite' : 'favorite_border'
        return (
            <div className={`art-column-like ${isLiked}`} onClick={this.handleClick}>
                <p className="material-icons">{isLiked}</p>
            </div>
        )
    }
}

export default Like
