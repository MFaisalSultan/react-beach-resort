// import React from 'react';
// import RoomFilter from './RoomFilter';
// import RoomList from './RoomList';
// import {withRoomConsumer} from '../context'
// import Loading from '../Components/Loading'


// function RoomContainer({context}){
//     const {loading,rooms, sortedRooms}= context;
//     if(loading){
//         return   <Loading></Loading>
//     }
//     return(
//         <>
//             <RoomList rooms={sortedRooms}/>
//             <RoomFilter rooms={rooms} />
//             </>
//         )
// }


// export default withRoomConsumer(RoomContainer);










import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import {RoomConsumer} from '../context'
import Loading from '../Components/Loading'

export default function RoomContainer() {
    return (
        <>
        <RoomConsumer>
            {
                value => {
                    console.log(value);
                    const {loading,rooms, sortedRooms}= value;
                    if(loading){
                     return   <Loading></Loading>
                    }
                    return(
                        <div>
                        <RoomFilter rooms={rooms} />
                        <RoomList rooms={sortedRooms}/>
                    </div>
                    )
                }
            }
        </RoomConsumer>
      
        </>
    )
}
