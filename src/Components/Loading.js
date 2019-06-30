import React from 'react'
import LoadingGif from '../images/gif/loading-arrow.gif'
export default function Loading() {
    return (
        <div className="loading">
            <img src={LoadingGif}></img>
            <h4> Rooms loading ... </h4>
        </div>
    )
}
