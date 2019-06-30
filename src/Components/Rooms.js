import React from 'react';
import defaultImage from '../images/room-1.jpeg';
import {Link} from 'react-router-dom';
import propTypes from 'prop-types'

export default function Rooms({room}) {
    let {name,slug,price,images} = room;
    return (
        <div>
           
    
        <article className="room">
        
            <div className="img-container">
                <img src={images[0] || defaultImage} alt="featured rooms" />
                <div className="price-top">
                    <h6> ${price} </h6>
                    <p> per night</p>
                </div>
                <Link to={`rooms/${slug}`} className="btn-primary room-link">Features</Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
        </div>
    )
}


Rooms.propTypes={
    room:propTypes.shape({
        name:propTypes.string.isRequired,
        slug:propTypes.string.isRequired,
        price:propTypes.number.isRequired,
        images:propTypes.arrayOf(propTypes.string).isRequired,
    })
}