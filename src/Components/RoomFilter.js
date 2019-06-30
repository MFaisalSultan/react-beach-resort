import React from 'react'
import {useContext} from  'react';
import {RoomContext} from  '../context';
import Title from '../Components/Title';
export default function RoomFilter({rooms}) {

    const getunique= (items,value) => {
        return [ ... new Set(items.map(item =>item[value] ))]
    }
    const context = useContext(RoomContext);
    const { handleChange,type,price,capacity,minPrice,maxPrice,minSize,maxSize,breakfast,pets  } = context;

    let types = getunique(rooms,'type');
    types = ['all',...types];
    
    types = types.map((item,index)=> <option value={item} key={index}>{item}</option>);

    let pepole = getunique(rooms,'capacity');
    pepole = pepole.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
    })

    return (
        <section className="filter-container">
            <Title title="search rooms"></Title>

            <form className="filter-form">
            {/* select type */}
            <div className="form-group">

            <label className="form-group"> Room Type</label>
            <select name="type" id="type" value={type} className="form-control" onChange={handleChange} >
                {types}
            </select>
            </div>
            {/* select type end */}
            {/* guest start */}
            <div className="form-group">
            
            <label htmlFor="capacity" className="form-group">Guests</label>
            <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange} >
                {pepole}
            </select>
            </div>
            {/* guest end */}

            {/* {room price} */}
            <div className="form-group">
                <label className='' htmlFor="price">room price ${price}</label>
                <input type="range" name="price" min={minPrice} max={maxPrice} value={price} id="price" onChange={handleChange} className="form-control" />
            </div>

            {/* {room priceend} */}

            {/* size start  */}
            <div className="form-group">
            <label htmlFor="size">room size</label>
            <input type="number" value={minSize} name="minsize" id="size" onChange={handleChange} className="size-input" />
            <input type="number" value={maxSize} name="maxsize" id="size" onChange={handleChange} className="size-input" />
            </div>
            {/* size start end   */}

            {/* extras */}
            <div className="form-grounp">
                <div className="single-extra">
                    <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}  />
                <label htmlFor="breakfast"> breakfast</label>
                </div>
                <div className="single-extra">
                    <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}  />
                <label htmlFor="pets"> pets</label>
                </div>
            </div>

            {/* extrasend */}
            </form>
            
        </section>
    )
}
