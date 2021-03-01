import React from 'react'

export default function image({urlToImage,title}) {
    return (
        <div className="image-container flex">
            <img className="image" src={urlToImage} alt="im"/>
            <p>{title}</p>
        </div>
    )
}
