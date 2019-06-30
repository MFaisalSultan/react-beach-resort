

import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../context'
import StyledHero from '../Components/StyledHero'
export default class SingleRoom extends Component {

    constructor(props){
        super(props);
        this.state = {
            slug : this.props.match.params.slug,
            defaultBcg
        }
    }
    
    static contextType = RoomContext;
    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        console.log(room);
        if(!room){
            return <div className="error">
                <h3>No such room found ...</h3>
                <Link to="/rooms" className="btn-primary">Back to Room</Link>
            </div>
        }

        const {name,description,capacity,size,price,extras,breakfast,pets,images} = room;
        const [MainImg, ...defaultImg] = images;
        
        return (
            <>
                
                 <StyledHero heroimg={MainImg || this.state.defaultBcg}>
                    <Banner title={`${name} room`}>
                        <Link to='/rooms' className='btn-primary'>Our Rooms</Link>
                    </Banner>
                 </StyledHero>

            <section className="single-room">
            <div className="single-room-images">
                    {defaultImg.map((item,index)=>{
                       return <img src={item} key={index} alt={name} />
                    })}
            </div>
            <div className="single-room-info">
                    <div className="desc">
                        <h3>Details</h3>
                        <p>{description}</p>
                    </div>
                    <div className="info">
                        <h3>Info</h3>
                        <h6>Price : {price}</h6>
                        <h6>Size : {size}</h6>
                        <h6>Capacity : {capacity > 1 ? `${capacity} person`: `${capacity} people`} </h6>
                        <h6>Pets : {pets?'Pets Allowed':'Pets Not Allowed'}</h6>
                        <h6>{breakfast?'Free BreakFast Include':''}</h6>
                    </div>
            </div>
            </section>
            <section className="room-extras">
                    <h6>extras</h6>
                    <ul className="extras">
                        {extras.map((item,index)=>{
                            return <li key={index}>- {item}</li>
                        })}
                    </ul>
            </section>

            </>
        )
    }
}
