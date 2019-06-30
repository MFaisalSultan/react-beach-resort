import React from 'react'
import Room from './Rooms'
export default function RoomList({rooms}) {
    if(rooms.length === 0){
        return (
            <div className="empty-search">
                <h3>Unfortunately no rooms matched your search parametes</h3>
            </div>
        )

    }
    return <section className="roomslist">
        <div className="roomslist-center">
        {
            rooms.map(item =>{
                return (
                    // console.log(item)
                    <Room key={item.id} room={item}></Room>
                )
            })
        }
        </div>
    </section>
}
