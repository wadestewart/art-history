import React from 'react'

function SmallImage(props) {
    return (
        <figure>
            <img src={props.imageUrl} alt="" />                
        </figure>
    )
}

export default SmallImage
